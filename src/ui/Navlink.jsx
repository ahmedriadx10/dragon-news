'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({href,children}) => {
  const path=usePathname()
  
  return (
    <Link  href={href
    } className={`${href===path?'border-b-2 border-(--pink) font-medium':''}`}>
      {children}
    </Link>
  );
};

export default Navlink;