import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";


const NewsCard = ({newsData}) => {
  
  const {_id,category_id,rating,total_view,title,author:{name,published_date,img},image_url,details,}=newsData

  return (
    <div className="border border-zinc-100 rounded-lg mb-7.5">
      <div className="bg-[#F3F3F3] flex justify-between py-3 px-5 items-center">

        <div className="flex items-center gap-2">
<Image src={img} alt={name} width={40} height={40} className="rounded-full" />
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
</div>

    </div>
  );
};

export default NewsCard;