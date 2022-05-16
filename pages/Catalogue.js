import Head from 'next/head';
import { useState } from 'react';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Product from '../components/Product';
import ImageTopper from '../components/ImageTopper';
import Banner from '../components/Banner'
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <ImageTopper 
      heading="Catalogue"
      imagelarge="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.pdng"
      imagesmall="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png"
      />
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
