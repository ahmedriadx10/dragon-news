import { redirect } from "next/navigation";
export const metadata = {
  title: 'Dragon News | Home',
}
const HomePage = () => {
redirect('/news/01')  

};

export default HomePage;