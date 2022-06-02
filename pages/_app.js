import { UserProvider } from '@auth0/nextjs-auth0'
import '../styles/globals.css'
import Layout from '../components/layout'
import { CartProvider } from 'use-shopping-cart'

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY

function MyApp({ Component, pageProps }) {
  return(
    <UserProvider>
      <CartProvider
        mode="payment"
        cartMode="checkout-session"
        stripe={stripeKey}
        currency="AUD"
        successUrl="stripe.com"
        cancelUrl="localhost:3000"
        allowedCountries={['AU']}
        billingAddressCollection={false}
      >
        <Layout>
            <Component {...pageProps} />
          </Layout>
      </CartProvider>   
    </UserProvider>
  );
}

export default MyApp