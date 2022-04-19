import { Text } from '@chakra-ui/react';
import Link from 'next/link';

interface MenuItemProps {
  text: string;
  url: string;
}

export function MenuItem({ text, url }: MenuItemProps) {
  return (
    <Text color="#666" fontSize="18px">
      <Link href={url}>{text}</Link>
    </Text>
  );
}
