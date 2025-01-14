import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useAuth } from "@/hooks/context/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, SettingsIcon } from "lucide-react";

export const UserButton = () => {
  const { auth } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none relative ">
          <Avatar className="size-10 hover:opacity-65 transition">
               <AvatarImage className="h-10 w-10" src={auth?.user?.avator} />
               <AvatarFallback>
               {auth?.user?.username[0].toUpperCase()}
               </AvatarFallback>
          </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
          <DropdownMenuItem>
               <SettingsIcon className="mr-2 h-10 size-4" />
               Setting
          </DropdownMenuItem>
          <DropdownMenuItem>
               <LogOutIcon className="mr-2 h-10 size-4" />
               Logout
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
