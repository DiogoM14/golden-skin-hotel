import { createContext, ReactNode, useEffect, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/apiClient";
import { useToast } from "@chakra-ui/react";
import { BookingProps } from "../utils/TBooking";

type AuthProviderProps = {
  children: ReactNode;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type User = {
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
  role: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  user: any;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function signOut() {
  destroyCookie(null, "nextauth.token", { path: "/" });

  Router.push("/");
  Router.reload();
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const [upcomingBookings, setUpcomingBookings] = useState<BookingProps[]>([]);
  const isAuthenticated = !!user;
  const toast = useToast();

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          signOut();
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const { "nextauth.token": token } = parseCookies();

    if (token) {
      api
        .get("/me/myInfo", {
          headers: {
            "x-access-token": token,
          },
        })
        .then((response) => {
          const { email, avatar, first_name, last_name, role } = response.data;

          setUser({
            email: email,
            avatar: avatar,
            first_name,
            last_name,
            role,
          });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post("auth/login", {
        email,
        password,
      });

      const { token } = response.data;

      if (token) {
        toast({
          title: "Successo",
          description: "Login realizado com sucesso",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }

      setCookie(undefined, "nextauth.token", token, {
        path: "/",
      });

      if (token) {
        api
          .get("/me/myInfo", {
            headers: {
              "x-access-token": token,
            },
          })
          .then((response) => {
            const { email, avatar, first_name, last_name, role } =
              response.data;

            setUser({
              email: email,
              avatar,
              first_name,
              last_name,
              role,
            });
          });
      }

      api.defaults.headers.common["x-access-token"] = `${token}`;

      Router.push("/");
    } catch (error: any) {
      toast({
        title: "Erro",
        description: "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
