'use client'
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import {  useRouter } from "next/navigation";

const LogoutBtn = ({children}) => {
const router=useRouter()

const handleLogout= async()=>{
await authClient.signOut({
fetchOptions:{
  onSuccess:()=>{
router.replace('/login')
  }
}
});

}
  return (
    <Button onPress={handleLogout} className='bg-(--dark-2) rounded-lg '>
      {children}
    </Button>
  );
};

export default LogoutBtn;