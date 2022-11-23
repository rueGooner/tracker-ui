import {
  useColorModeValue,
  Container,
  HStack,
  Flex,
  IconButton,
  Box,
  useBreakpointValue,
  Link,
  Text,
} from "@chakra-ui/react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import NextLink from "next/link";

export const Navigation = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }} maxW="container.lg">
          <HStack spacing="3" justify="end">
            {isDesktop ? (
              <>
                <NextLink href="/" legacyBehavior passHref>
                  <Link>
                    <Text>Home</Text>
                  </Link>
                </NextLink>
                <NextLink href="/service-users" legacyBehavior passHref>
                  <Link>
                    <Text>Service Users</Text>
                  </Link>
                </NextLink>
                <NextLink href="/" legacyBehavior passHref>
                  <Link>
                    <Text>Home</Text>
                  </Link>
                </NextLink>
              </>
            ) : (
              <IconButton
                variant="ghost"
                icon={<Bars3BottomRightIcon />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
