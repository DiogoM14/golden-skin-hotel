import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthProvider } from "../contexts/AuthContext";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { queryClient } from "../services/QueryClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </AuthProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
