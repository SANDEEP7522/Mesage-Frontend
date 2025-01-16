import { UserButton } from "@/components/atoms/UserButton/UserButton";
import { SidebarButton } from "@/components/molecules/SidebarButton/SidebarButton";
import { BellIcon, HomeIcon, MessageSquareIcon, MoreHorizontalIcon } from "lucide-react";
import { WorkspaceSwitcher } from "./WorkspaceSwitcher";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const WorkspaceSidebar = () => {
  return (
    <aside 
    className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[10px] pb-[5px]">
      
      <WorkspaceSwitcher />
      
      <SidebarButton 
        Icon={HomeIcon} 
        label="Home" 
      />
      
      <SidebarButton 
        Icon={MessageSquareIcon} 
        label="DMs"
      />
      
      <SidebarButton 
        Icon={BellIcon}
        label="Notifications"
      />
      
      <SidebarButton 
        Icon={MoreHorizontalIcon}
        label="More"
      />
      
      <div className="flex flex-col items-center justify-center mt-auto mb-5 gap-y-1">   
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger>
            <UserButton />
            </TooltipTrigger>
            <TooltipContent>
               <p>User</p>
            </TooltipContent>
          </Tooltip>
      </TooltipProvider>
    </div>
    </aside>
  );
};
