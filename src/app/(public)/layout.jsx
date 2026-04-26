import Header from "@/components/shared/Header";
import HeadlineMarquee from "@/components/shared/HeadlineMarquee";
import Navbar from "@/components/shared/Navbar";


const PublicLayout = ({children}) => {
  return (
    <>
<Header/>
<HeadlineMarquee/>
<Navbar/>
      {children}
    </>
  );
};

export default PublicLayout;