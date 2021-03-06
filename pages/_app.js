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
        cartMode="client-only"
        stripe={stripeKey}
        currency="AUD"
        successUrl="phs-ecanteen.vercel.app/success"
        cancelUrl="phs-ecanteen.vercel.app"
        allowedCountries={'AU'}
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
