import Head from 'next/head';
import Link from 'next/link';


function Login() {
  return (
    <>
        <Head>
            <title>Login</title>
        </Head>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-96">
                <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20' viewBox="0 0 512 512"><title>Fast Food</title><path d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40" fill="none" stroke="currentColor"/><path d="M256 480h139.31a32 32 0 0031.91-29.61L463 112" fill="none" stroke="currentColor"/><path fill="none" stroke="currentColor" d="M368 112l16-64 47-16"/><path fill="none" stroke="currentColor" d="M224 112h256"/></svg>
                </div>
                <h3 className="text-6xl font-bold text-center mt-3">
                    <span className='text-pastel'>e</span>Canteen</h3>
                <div className="flex items-baseline justify-center mt-10">
                    <button className="w-full py-2 mt-4 font-bold duration-100 bg-pastel rounded-lg hover:bg-pastel-hover">
                        <Link href='/api/auth/login'>
                            <a className='w-full text-xl'>
                                Login
                            </a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login