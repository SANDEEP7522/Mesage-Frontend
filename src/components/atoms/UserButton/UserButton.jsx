import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useAuth } from "@/hooks/context/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, PencilIcon, SettingsIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";

export const UserButton = () => {

  const navigate = useNavigate();
     
  const { auth, logout } = useAuth();
 
  const { toast } = useToast();

  const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();
  function openWorkspaceCreateModal() {
      setOpenCreateWorkspaceModal(true);
  }


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
         <DropdownMenuItem onClick={openWorkspaceCreateModal}>
               <PencilIcon className='size-4 mr-2 h-10' />
                    Create Workspace
           </DropdownMenuItem >
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
