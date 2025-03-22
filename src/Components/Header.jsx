import { Heading } from "@chakra-ui/react";
import { Center, Text } from "@chakra-ui/react";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center h="100px">
      <Heading as="h2" size="xl">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
        >
          {" "}
          To-do List{" "}
        </Text>
        <Flex as="header">
          <IconButton
            background="pink"
            color="white"
            rounded={50}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            m={4}
            position="fixed"
            top={4}
            right={4}
          />
        </Flex>
      </Heading>
    </Center>
  );
}
