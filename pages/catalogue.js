import Head from 'next/head';
import { useState } from 'react';

import Product from '../components/product';
import ImageTopper from '../components/imagetopper';
import Banner from '../components/banner'
import Navbar from '../components/navbar';
import Stripe from 'stripe'

export default function Home({ prices }) {
  return (
    <>
      <Head>
        <title>eCanteen | Catalogue</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-100'>
      <ImageTopper 
      heading="Catalogue"
      imagelarge="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png"
      imagesmall="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png"
      />
      <div className='grid gap-4 list-none 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
             
              <li>
                <Product
                productname="Name"
                productprice={12}
                productimage="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481"
                producturl="https://buy.stripe.com/test_3csdSLgK7fLW1nqaEE"
                />
              </li>
              <li>
                <Product
                productname="Name"
                productprice={12}
                productimage="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481"
                />
              </li>
              <li>
                <Product
                productname="Name"
                productprice={12}
                productimage="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481"
                />
              </li>
              <li>
                <Product
                productname="Name"
                productprice={12}
                productimage="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481"
                />
              </li>
              <li>
                <Product
                productname="Name"
                productprice={12}
                productimage="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481"
                />
              </li>
              <li>
                <Product
                productname="Name"
                productprice={12}
                productimage="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481"
                />
              </li>
          </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27"
  });

  const prices = await stripe.prices.list({
    active: true,
    expand: ["data.product"],
  })

  return {props: {prices: prices.data } };
}