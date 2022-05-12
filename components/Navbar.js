import Link from "next/link";
import { useRouter } from "next/router";

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
     <div>
       <div className="justify-center">
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
     </div>
   );
}