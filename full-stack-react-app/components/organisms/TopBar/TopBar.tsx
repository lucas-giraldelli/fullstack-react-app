import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { MenuItem } from '../../molecules/MenuItem';

export function TopBar() {
  return (
    <Flex width="100%" alignContent="center" p="6px 16px">
      <Text fontSize="36px" fontWeight="bold" lineHeight="42px" color="#1F79BA" flexGrow={1}>
        SuperApp
      </Text>
      <Flex>
        <HStack spacing="16px">
          <MenuItem text="Blog" url="/blog" />
          <MenuItem text="Product" url="/product" />
          <MenuItem text="Pricing" url="/pricing" />
        </HStack>
        <Flex marginLeft="82px">
          <Button variant="solid" colorScheme="blue">
            Get Started
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
