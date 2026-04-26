import { getCategoryWiseNews } from "@/lib/dataFetcher";
import NewsCard from "@/ui/NewsCard";

const CategoryNews =async ({id}) => {
 console.log(id)
  const newsData= await getCategoryWiseNews(id)
console.log(newsData)

  
  return (
    <div>
      {newsData.map(x=><NewsCard newsData={x} key={x['_id']} />)}

    </div>
  );
};

export default CategoryNews;