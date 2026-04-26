import CategoryNews from "@/components/news/CategoryNews";
import CategorySide from "@/components/news/CategorySide";
import RightSideArea from "@/components/news/RightSideArea";

const NewsPage =  async ({params}) => {
const {id}=await params



  return (
    <section className="grid grid-cols-8 max-w-7xl mx-auto w-[90%] gap-6 py-20">
   
   <CategorySide  />
<CategoryNews id={id} />
<RightSideArea/>

    </section>
  );
};

export default NewsPage;