import Head from 'next/head'
import Image from 'next/image'

import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { loadStripe } from '@stripe/stripe-js'
import Stripe from 'stripe'

import Product from '../components/Product'
import Navbar from '../components/navbar'



export default function Home({ prices }) {
  return (
    <>
      <Head>
        <title>eCanteen | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section>
        <ul>
          {prices.map((price) => 
            <li key={price.id}>
              <Product
              productname={price.product.name}
              productprice={((price.unit_amount) / 100).toFixed(2)}
              productimage={price.product.images[0]}
              />
            </li>
          )}
        </ul>
      </section>
      <section>

      </section>
    </>
  )
}

export async function getServerSideProps() {
  const stripe= new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27"
  });

  const prices = await stripe.prices.list({
    active: true,
    expand: ["data.product"],
  })

  return {props: {prices: prices.data } };
}