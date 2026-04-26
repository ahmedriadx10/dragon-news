import { getCategories } from "@/lib/dataFetcher";
import CategoryLink from "@/ui/CategoryLink";

const CategorySide = async() => {
 
  const {news_category}=await getCategories()



 
  return (
    <div>
      <h4 className="text-xl font-semibold text-(--dark-2)">All Category</h4>

      <div className="flex flex-col">
{news_category.map(x=><CategoryLink  linkData={x} key={x.category_id}/>)}

      </div>
    </div>
  );
};

export default CategorySide;