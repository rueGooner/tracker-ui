import { Flex, Heading, Input } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        alignItems="center"
        direction="column"
        p={12}
        background="cyan.50"
        rounded={8}
        boxShadow="base"
      >
        <Heading mb={5}>Log in</Heading>
        <Input placeholder="Email" variant="filled" mb={3} type="email" />
        <Input placeholder="*****" variant="filled" mb={3} type="email" />
      </Flex>
    </Flex>
  );
};

export default Home;
