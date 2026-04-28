import Image from "next/image";
import headerLogo from '@/assets/logo.png'
import { format } from "date-fns";
const Header = () => {
  return (
    <header className="text-center py-12.5 space-y-2.5 w-[90%] mx-auto">
<div>
  <Image src={headerLogo} className="mx-auto " alt="dragon news logo" width={480} height={60} loading="eager" />
</div>

<p className="text-(--dark-3) text-lg">Journalism Without Fear or Favour</p>

<div className="font-medium text-xl ">
  <span className="text-(--dark-2)">{format(new Date() , 'EEEE')}</span>
<span className="text-(--dark-3)">  {format(new Date(), " ,MMMM dd,yyyy")}</span>
</div>
    </header>
  );
};

export default Header;