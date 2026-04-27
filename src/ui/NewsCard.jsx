import Image from "next/image";
import Link from "next/link";
import { CiBookmark } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";


const NewsCard = ({newsData}) => {
  
  const {_id,category_id,rating:{number,badge},total_view,title,author:{name,published_date,img},image_url,details,}=newsData


  return (
    <div className="border border-zinc-200 rounded-lg mb-7.5 overflow-hidden">
      <div className="bg-[#F3F3F3] flex justify-between py-3 px-5 items-center">

        <div className="flex items-center gap-2">
<Image src={img} alt={name||'author image'} width={40} height={40} className="rounded-full" />
<div>
  <h6 className="font-semibold text-(--dark-2)">{name}</h6>
  <p className="text-[14px] text-(--dark-3)">{published_date}</p>
</div>
        </div>

<div className="flex items-center gap-2.5">
 <CiBookmark className="text-lg"/>
  <IoShareSocialOutline className="text-lg"/>
</div>

      </div>

<div className="p-3.5 space-y-5">
<div>
    <h2 className="text-xl font-bold text-(--dark-2)">{title}</h2>

  <Image src={image_url} alt={title} width={500} height={262} className="w-full mt-8" ></Image>
</div>

<div className="border-b border-gray-300 pb-5">
  <p className="text-(--dark-3) leading-6.5 line-clamp-4">{details}</p>
  <Link className="bg-linear-to-r text-transparent bg-clip-text font-semibold  from-[#FF8C47] to-[#F75B5F]" href={`/details/${_id}`}>Read More</Link>
</div>

<div className="py-5 flex justify-between items-center">

 <div className="flex items-center gap-1">
  <FaStar className="text-orange-400 font-medium"></FaStar> <span className="text-(--dark-3)">{number}</span>
  </div> 


{/* views */}
<div className="flex items-center gap-1">
  <IoMdEye />
<span className="font-medium text-(--dark-3)">  {total_view} </span>
</div>
</div>

</div>

    </div>
  );
};

export default NewsCard;