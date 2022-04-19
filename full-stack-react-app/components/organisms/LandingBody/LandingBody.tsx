import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';

export function LandingBody() {
  return (
    <Container flex="1 1 auto">
      <SimpleGrid columns={2} spacing={10} p="64px 24px">
        <Box>
          <Box
            backgroundColor="gray.600"
            width="100%"
            height="225px"
            borderRadius="16px"
          ></Box>
        </Box>
        <Flex flexDirection="column" justifyContent="center">
          <Text>Including the market standard technologies</Text>
          <List spacing={1} mt="4px">
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Next.JS
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              ChakraUI
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              Database
            </ListItem>
          </List>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
