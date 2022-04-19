import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Text,
  HStack,
} from '@chakra-ui/react';

export function LandingFooter() {
  return (
    <Box
      as="footer"
      backgroundColor="blue.300"
      py="40px"
      width="100vw"
      display="flex"
      justifyContent="center"
    >
      <Container width={['100%', '100%', '100%', '90ch']} maxWidth="90ch">
        <SimpleGrid columns={2} spacing={8} w="100%">
          <Box>SuperApp 2021</Box>
          <Flex flexDirection="column">
            <Text mb="16px">Follow us on</Text>
            <HStack spacing={4}>
              <Text>Twitter</Text>
              <Text>Instagram</Text>
              <Text>Facebook</Text>
            </HStack>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
