import { UserProvider } from '@auth0/nextjs-auth0'
import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return(
    <UserProvider>
      <Layout>

      </Layout>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp