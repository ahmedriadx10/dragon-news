'use client'
import { Button } from "@heroui/react";
import {Icon} from "@iconify/react";
import classShowImg from '@/assets/class.png'
import playGroundImg from '@/assets/playground.png'
import swimmingShow from '@/assets/swimming.png'
import instagramImg from '@/assets/instagram.png'
import Image from "next/image";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
const RightSideArea = () => {

  const handleGoogleSignIn=async()=>{

    const data = await authClient.signIn.social({
    provider: "google",
  });


  }

  const handleGithubSign=async()=>{

     const data = await authClient.signIn.social({
        provider: "github"
    })


  }



  return (
    <div className="col-span-full lg:col-span-2">
        <h4 className="text-xl font-semibold text-(--dark-2)  mb-5">Login With</h4>


<div className="flex w-full  flex-col gap-3 border">
      <Button className="w-full rounded-lg border border-blue-500" variant="ghost" onPress={handleGoogleSignIn}>
        <Icon icon="devicon:google" />
       Login with Google
      </Button>
      <Button className="w-full rounded-lg border border-neutral-500" variant="ghost" onPress={handleGithubSign}>
        <Icon icon="mdi:github" />
        Login with GitHub
      </Button>
   
    </div>

    <div>
<h4 className="mt-7.5 font-semibold text-xl text-(--dark-2)">Find Us On</h4>

<div className="border border-zinc-200 rounded-lg mt-5">

<div className="flex items-center gap-2.5 p-4">
<FaFacebook className="text-blue-500 text-3xl"/>
<span className="text-(--dark-3) font-medium">Facebook</span>
</div>
<div className="flex items-center gap-2.5 p-4 border-y">
<FaTwitter className="text-blue-500 text-3xl"/>
<span className="text-(--dark-3) font-medium">Twitter</span>
</div>
<div className="flex items-center gap-2.5 p-4">
  <Image src={instagramImg} alt="instagram image" width={30} height={30} />
<span className="text-(--dark-3) font-medium">Instagram</span>
</div>

</div>
    </div>


    {/* Q Zone */}

<div className="bg-[#F3F3F3] p-3.75 mt-5 space-y-5 rounded-lg">
  <h5 className="text-xl font-semibold text(--dark-2)">Q-Zone</h5>

<Image src={swimmingShow} alt="swimming image" height={219} width={258} ></Image>
<Image src={classShowImg} alt="class room show" height={219} width={258} ></Image>
<Image src={playGroundImg} alt="playground image" height={219} width={258} ></Image>

</div>

    </div>
  );
};

export default RightSideArea;