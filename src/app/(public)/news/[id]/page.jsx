import CategoryNews from "@/components/news/CategoryNews";
import CategorySide from "@/components/news/CategorySide";

const NewsPage =  async ({params}) => {
const {id}=await params



  return (
    <section>
   
   <CategorySide  />
<CategoryNews id={id} />


    </section>
  );
};

export default NewsPage;