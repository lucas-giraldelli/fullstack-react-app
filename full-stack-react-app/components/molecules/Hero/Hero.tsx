import { Flex, Container, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export function Hero() {
  return (
    <Flex
      w="100%"
      background="linear-gradient(93.73deg, #FEAC5E 2.17%, #C779D0 47.86%, #48CBCB 98.58%)"
    >
      <Container py="64px">
        <Heading as="h1">
          <p>Increase your productivity</p>
          <p>Make your App in minutes</p>
        </Heading>
        <Text mt="16px" fontSize="24px" lineHeight="64px" color="gray.700">
          Your Fullstack React App
        </Text>
      </Container>
    </Flex>
  );
}
