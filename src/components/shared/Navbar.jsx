import Navlink from "@/ui/Navlink";

import Image from "next/image";
import profileImage from "@/assets/user.png";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import LogoutBtn from "@/ui/LogoutBtn";
import { Button } from "@heroui/react";

// import { authClient } from "@/lib/auth-client";
const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const image = session?.user?.image;

  return (
    <nav className="flex py-10 justify-between items-center max-w-7xl mx-auto w-[90%]">
      <div></div>
      <ul className="flex text-(--dark-3) gap-3">
        <li>
          <Navlink href={"/"}>Home</Navlink>
        </li>
        <li>
          <Navlink href={"/about"}>About</Navlink>
        </li>
        <li>
          <Navlink href={"/career"}>Career</Navlink>
        </li>
      </ul>
      <div className="flex items-center gap-2.25">
        <Image
          src={image ?? profileImage}
          alt="user profile image"
          width={41}
          height={41}
          loading="eager"
          className="rounded-full  "
        />
        {session?.user ? (
          <LogoutBtn>Logout</LogoutBtn>
        ) : (
          <Link href={"/login"}>
            <Button className="bg-(--dark-2) rounded-lg ">SignIn</Button>{" "}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
