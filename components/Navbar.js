import Link from "next/link";
import { useRouter } from "next/router";
import { ShoppingCartIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
   { name: "Home", href: "/" },
   { name: "Catalogue", href: "/Catalogue" },
   { name: "Support", href: "/Support" },
];

export default function Navbar() {
   const router = useRouter();

   return (
     <>
       <nav class="container flex justify-around py-8 mx-auto bg-white">
  <div class="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 stroke-blue-500' viewBox="0 0 512 512"><title>Fast Food</title><path d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40" fill="none" stroke="currentColor"/><path d="M256 480h139.31a32 32 0 0031.91-29.61L463 112" fill="none" stroke="currentColor"/><path fill="none" stroke="currentColor" d="M368 112l16-64 47-16"/><path fill="none" stroke="currentColor" d="M224 112h256"/></svg>
    <h3 class="text-2xl font-medium text-blue-500">eCanteen</h3>
  </div>
  <div class="items-center hidden space-x-8 lg:flex">
    {navigation.map((item) => (
            <Link href={item.href} key={item.name}>
              <a
                className={classNames("inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium", router.route === item.href ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")}
                aria-current={router.route === item.href ? "page" : undefined}
              >
                {item.name}
              </a>
            </Link>
          ))}
  </div>
  <div class="flex items-center space-x-2">
    <a href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    </a>
    <a href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </a>
    <a href="#" class="p-2 rounded-full bg-blue-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-gray-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </a>
  </div>
</nav>
     </>
   );
}

