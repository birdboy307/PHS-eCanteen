import Head from "next/head"
import ImageTopper from "../components/imagetopper"
import Footer from "../components/footer"

function Support() {
  return (
    <>
      <Head>
        <title>eCanteen | Support</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100">
      <ImageTopper 
      heading="Support"
      imagelarge="https://i.ibb.co/HxXSY0j/jason-wang-Nx-Awry-Abt-Iw-unsplash-1-1.png"
      imagesmall="https://i.ibb.co/B6qwqPT/jason-wang-Nx-Awry-Abt-Iw-unsplash-1.png"
      />
      <Footer />
      </div>
    </>
  )
}

export default Support