'use client'
import Navlink from "@/ui/Navlink";
import { Button } from "@heroui/react";
import Image from "next/image";
import profileImage from '@/assets/user.png'
import Link from "next/link";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";
import { authClient } from "@/lib/auth-client";
const Navbar =() => {

  
// const session = await auth.api.getSession({
//     headers: await headers() // you need to pass the headers object.
// })

// console.log(session.user)

    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 
  
  
  
    return (
    <nav className="flex py-10 justify-between items-center max-w-7xl mx-auto w-[90%]">
      
<div></div>
<ul className="flex text-(--dark-3) gap-3">
  <li><Navlink href={'/'}>Home</Navlink></li>
  <li><Navlink href={'/about'}>About</Navlink></li>
  <li><Navlink href={'/career'}>Career</Navlink></li>
</ul>
<div className="flex items-center gap-2.25">

<Image src={profileImage} alt="user profile image" width={41} height={41} loading="eager" />
<Link href={'/login'}><Button className='bg-(--dark-2) rounded-lg '>SignIn</Button> </Link>
</div>
    </nav>
  );
};

export default Navbar;