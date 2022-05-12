import Head from 'next/head';
import { useState } from 'react';

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Home() {
  return (
    <>
      
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();