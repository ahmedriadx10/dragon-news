import Navlink from "@/ui/Navlink";
import { Button } from "@heroui/react";
import Image from "next/image";
import profileImage from '@/assets/user.png'
const Navbar = () => {
  return (
    <nav className="flex py-21.25 justify-between items-center max-w-7xl mx-auto w-[90%]">
      
<div></div>
<ul className="flex text-(--dark-3) gap-3">
  <li><Navlink href={'/'}>Home</Navlink></li>
  <li><Navlink href={'/about'}>About</Navlink></li>
  <li><Navlink href={'/career'}>Career</Navlink></li>
</ul>
<div className="flex items-center gap-2.25">

<Image src={profileImage} alt="user profile image" width={41} height={41} loading="eager" />
<Button className='bg-(--dark-2) rounded-lg '>SignIn</Button>
</div>
    </nav>
  );
};

export default Navbar;