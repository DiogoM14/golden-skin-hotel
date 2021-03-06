import { Container } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { CreateRoom } from "../../components/AdminComponents/create-room";
import { Rooms } from "../../components/AdminComponents/rooms";
import { Users } from "../../components/AdminComponents/users";
import { AuthContext } from "../../contexts/AuthContext";

const Admin: NextPage = ({ param }: any) => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const { push } = useRouter();

  useEffect(() => {
    if (!isAuthenticated || user?.role !== "ADMIN") {
      push("/")
    }
  }, [])

  return (
    <>
      <Container maxW='container.xl'>
        <Head>
          <title>Golden Skin Hotel</title>
          <meta name='description' content='Melhor hotel do mundo' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        {param == "rooms" && <Rooms />}
        {param == "users" && <Users />}
        {param == "create-room" && <CreateRoom />}
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { param }: any = params;

  return {
    props: {
      param,
    },
  };
};

export default Admin;
