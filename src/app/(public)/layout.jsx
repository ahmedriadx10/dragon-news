import Header from "@/components/shared/Header";
import HeadlineMarquee from "@/components/shared/HeadlineMarquee";


const PublicLayout = ({children}) => {
  return (
    <>
<Header/>
<HeadlineMarquee/>
      {children}
    </>
  );
};

export default PublicLayout;