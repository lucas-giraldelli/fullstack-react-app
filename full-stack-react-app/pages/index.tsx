import type { NextPage } from 'next';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { TopBar } from '../components/organisms/TopBar';
import { Hero } from '../components/molecules/Hero';
import { MenuItem } from '../components/molecules/MenuItem';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SuperApp</title>
        <meta name="description" content="full stack application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <Flex>
        <Hero />
      </Flex>
    </div>
  );
};

export default Home;
