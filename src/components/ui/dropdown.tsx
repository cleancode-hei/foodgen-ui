import  { useState } from "react";
import { Button } from "./button";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import logo from "/logo.png";

type Link = {
    label:string,
    to:string   
}

export const DropDown = ({links} : {links:[Link]}) => {
  const [open, setOpen] = useState(false);
  const onOpenChange = (open:boolean) => {
    setOpen(open);
    console.log("oke")
  }
  return (
    <DropdownMenu open={open} onOpenChange={onOpenChange}>
        <DropdownMenuTrigger>
            <Button className="rounded-full">
              <Avatar className="rounded bg-[--color-2]">
                <AvatarImage src={logo} />
                <AvatarFallback>IO</AvatarFallback>
              </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-2">
            <div className="w-[150px] rounded-md bg-gray-600 p-2">
                <div className="w-full h-[60px] flex justify-center items-center">
                  <Avatar className="rounded-full bg-[--color-2]">
                    <AvatarImage src={logo} />
                    <AvatarFallback>IO</AvatarFallback>
                  </Avatar>
                </div>
                <hr className="bg-white m-3"/>
                {links.map((link, i) => (
                    <DropdownMenuItem key={"linkdropdown"+i}><Button>{link.label}</Button></DropdownMenuItem>
                ))}
                <hr className="bg-white m-3"/>
                    <DropdownMenuItem><Button>deconnect</Button></DropdownMenuItem>
            </div>
        </DropdownMenuContent>
    </DropdownMenu>
  );
};
