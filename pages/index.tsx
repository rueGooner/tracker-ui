import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("cyan.50", "gray.700");

  return (
    <Flex h="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        p={12}
        background={formBackground}
        rounded={8}
        boxShadow="base"
      >
        <Heading mb={5}>Log in</Heading>
        <Input placeholder="Email" variant="filled" mb={3} type="email" />
        <Input placeholder="*****" variant="filled" mb={6} type="email" />
        <Button mb={6} colorScheme="teal">
          Log in
        </Button>
        <Button mb={6} onClick={toggleColorMode}>
          Toggle Dark Mode
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
