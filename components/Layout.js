// components/layout.js

import Navbar from './navbar'
import Banner from './Banner'

export default function Layout({ children }) {
  return (
    <>
        <Banner />
        <main>{children}</main>
    </>
  )
}