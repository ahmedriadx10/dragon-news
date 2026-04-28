'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryLink = ({linkData}) => {

  const {category_name,category_id}=linkData
    const path=usePathname()
  const pathEnd=path.endsWith(category_id)





  return (
    <Link href={`/news/${category_id}`} className={`py-4 px-4 text-center block  ${pathEnd?'bg-[#E7E7E7]  rounded-[5px]  text-(--dark-2)':'text-(--dark-4)'}`}  >
      {category_name}
    </Link>
  );
};

export default CategoryLink;
