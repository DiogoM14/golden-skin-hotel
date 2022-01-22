import {
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import NextLink from "next/link";

import LoginPanel from "./LoginPanel";
import { RegisterPanel } from "./RegisterPanel";

export const TabsForm = ({ authOption }: any) => {
  return (
    <>
      <Tabs
        isFitted
        isLazy
        index={authOption == "login" ? 0 : 1}
        variant='unstyled'
        mt='20'>
        <TabList mb='8'>
          <NextLink href='/auth/login'>
            <Tab
              _selected={{
                borderBottom: "2px solid",
                borderBottomColor: "#F2BB05",
              }}>
              <Text fontFamily='Poppins'>Entrar</Text>
            </Tab>
          </NextLink>
          <NextLink href='/auth/register'>
            <Tab
              _selected={{
                borderBottom: "2px  solid",
                borderBottomColor: "#F2BB05",
              }}>
              <Text fontFamily='Poppins'>Registar</Text>
            </Tab>
          </NextLink>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <LoginPanel />
          </TabPanel>
          <TabPanel p={0}>
            <RegisterPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
