import { Box, Center, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Navigation } from "./Navigation";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Container maxW="container.lg">
      <Box>
        <Navigation />
        <Center>{children}</Center>
      </Box>
    </Container>
  );
}
