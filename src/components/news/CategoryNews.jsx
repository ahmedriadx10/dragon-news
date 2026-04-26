import { getCategoryWiseNews } from "@/lib/dataFetcher";
import NewsCard from "@/ui/NewsCard";

const CategoryNews =async ({id}) => {
 console.log(id)
  const newsData= await getCategoryWiseNews(id)
console.log(newsData)

  
  return (
    <div className="col-span-4 ">
  <h4 className="text-xl font-semibold text-(--dark-2) mb-5">Dragon News</h4>

     <div>
       {newsData.map(x=><NewsCard newsData={x} key={x['_id']} />)}
     </div>

    </div>
  );
};

export default CategoryNews;