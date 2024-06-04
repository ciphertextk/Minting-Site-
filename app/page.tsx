'use client'

import { Login } from '@/components/login';
import { Box, Flex, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex 
      direction="column" 
      justify="center" 
      align="center" 
      height="100vh" 
      bg="white"
    >
      <Box mb={8} textAlign="center">
        <Heading as="h1" size="2xl">
          The Minting Environment
        </Heading>
      </Box>
      <Login />
    </Flex>
  );
}
