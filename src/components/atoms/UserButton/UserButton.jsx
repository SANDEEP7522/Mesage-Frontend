import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useAuth } from "@/hooks/context/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, SettingsIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export const UserButton = () => {

  const navigate = useNavigate();
     
  const { auth, logout } = useAuth();
 
  const { toast } = useToast();

 async function handleLogout() {
     await logout();
    
     toast({
          title: 'Logged out successfully',
          message: 'You will be redirected to the signin page in a few seconds',
          type: 'success'
     })
     navigate('/auth/signin');

 }

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
          <DropdownMenuItem onClick={handleLogout} >
               <LogOutIcon className="mr-2 h-10 size-4" />
               Logout
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
