'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryLink = ({linkData}) => {

  const {category_name,category_id}=linkData
    const path=usePathname()
  const pathEnd=path.endsWith(category_id)





  return (
    <Link href={`/news/${category_id}`} className={`${pathEnd?'border-2 border-b border-red-600':''}`}  >
      {category_name}
    </Link>
  );
};

export default CategoryLink;
