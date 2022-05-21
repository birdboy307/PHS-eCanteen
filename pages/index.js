import Head from 'next/head'
import Stripe from 'stripe'

import Product from '../components/product'
import Footer from '../components/footer'
import ImageTopper from '../components/imagetopper'


export default function Home({ prices }) {
  return (
    <>
      <Head>
        <title>eCanteen | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-100'>
        <ImageTopper 
        heading="Home"
        imagelarge="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png"
        imagesmall="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png"
        />
        <section>
          <div className='grid grid-cols-4 gap-4 list-none'>
            {prices.map((price) => 
              <li key={price.id}>
                <Product
                productname={price.product.name}
                productprice={((price.unit_amount) / 100).toFixed(2)}
                productimage={price.product.images[0]}
                />
              </li>
            )}
          </div>
        </section>
        <section>

        </section>
        <Footer />
      </div>
      
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