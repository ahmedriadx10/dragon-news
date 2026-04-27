import { getCategoryWiseNews } from "@/lib/dataFetcher";
import NewsCard from "@/ui/NewsCard";
import { GiNewspaper } from "react-icons/gi";

const CategoryNews =async ({id}) => {

  const newsData= await getCategoryWiseNews(id)


  
  return (
    <div className="col-span-4 ">
  <h4 className="text-xl font-semibold text-(--dark-2) mb-5">Dragon News</h4>

     <div>

      
       { newsData.length>0? newsData.map(x=>{
        
        return <NewsCard newsData={x} key={x['_id']} />}):<div className="min-h-[40vh] flex flex-col justify-center gap-2.5 items-center">
        
<GiNewspaper className="text-7xl " />
<h6 className="text-2xl font-medium text-(--dark-2)">No News Found in this category</h6>

        </div>}
     </div>

    </div>
  );
};

export default CategoryNews;