import { Heading } from "@chakra-ui/react";
import { Center } from '@chakra-ui/react'

export default function Header() {
  return (
    <Center h='100px'>
    <Heading as='h2' size='xl' >
      Todo List
    </Heading>
    </Center>
  );
}