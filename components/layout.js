import Navbar from './navbar'
import Banner from './banner'

export default function Layout({ children }) {
  return (
    <>
        <Banner />
        <Navbar />
        <main>{children}</main>
    </>
  )
}