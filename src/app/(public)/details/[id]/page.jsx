import { getDetailsNews } from "@/lib/dataFetcher";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export async function generateMetadata({params}){

const {id}=await params

  const newsDetials=await getDetailsNews(id)

return {
  title:newsDetials.title,
      openGraph: {
      image: newsDetials.image_url,
    },
}

}

const DetailsPage = async ({params}) => {
  const {id}=await params

  const newsDetials=await getDetailsNews(id)

 const {category_id,title,image_url,details,}=newsDetials

  return (
   <div className="border border-zinc-200 rounded-lg mb-7.5 p-7.5 overflow-hidden max-w-4xl mx-auto w-[90%]">
 

<div className=" space-y-5">

   

  <Image src={image_url} alt={title} width={500} height={262} className="w-full" ></Image>

 <h2 className="text-xl font-bold text-(--dark-2)">{title}</h2>

  <p className="text-(--dark-3) leading-6.5 ">{details}</p>



<div>
  <Link href={`/news/${category_id}`} ><Button className={'bg-(--pink) rounded-lg'}><FaArrowLeft /> <span>All News in This category</span></Button></Link>
</div>

    </div>
    </div>

  );
};

export default DetailsPage;