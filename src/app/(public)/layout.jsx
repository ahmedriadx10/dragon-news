import Header from "@/components/shared/Header";


const PublicLayout = ({children}) => {
  return (
    <>
<Header/>

      {children}
    </>
  );
};

export default PublicLayout;