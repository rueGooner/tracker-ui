import { Box, Center } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Navigation } from "./Navigation";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <Navigation />
      <Center>{children}</Center>
    </Box>
  );
}
