import { Button } from "@heroui/react";
import {Icon} from "@iconify/react";
const RightSideArea = () => {
  return (
    <div className=" col-span-2">
        <h4 className="text-xl font-semibold text-(--dark-2)  mb-5">Login With</h4>


<div className="flex w-full max-w-xs flex-col gap-3">
      <Button className="w-full rounded-lg border border-blue-500" variant="ghost">
        <Icon icon="devicon:google" />
       Login with Google
      </Button>
      <Button className="w-full rounded-lg border border-neutral-500" variant="ghost">
        <Icon icon="mdi:github" />
        Login with GitHub
      </Button>
   
    </div>
    </div>
  );
};

export default RightSideArea;