import { ChevronDownIcon, ListFilterIcon, SquarePenIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/context/useAuth";
import { useWorkspacePreferencesModal } from "@/hooks/context/WorkspacePreferencesModalContext";
import { useEffect, useState } from "react";
import { WorkspaceInviteModal } from "@/components/organisems/Modals/WorkspaceInviteModal";
export const WorkspacePanelHeader = ({ workspace }) => {
  console.log("workspace is", workspace);

  const { setWorkspace } = useWorkspacePreferencesModal();

  const workspacemembers = workspace?.members;

  const { auth } = useAuth();

  console.log("auth", auth);

  const [openInviteModal, setOpenInviteModal] = useState(false);

  const isLoggedInUserAdminOfWorkspace = workspacemembers?.find(
    (member) =>
      member.memberId._id === auth?.user?._id && member.role === "admin"
  );

  console.log(
    "Logged In User Admin Of Workspace",
    isLoggedInUserAdminOfWorkspace
  );

  useEffect(() => {
    setWorkspace(workspace);
  });

  const { setOpenPreferences, setInitialValue } =
    useWorkspacePreferencesModal();

  return (
     <>
     
     <WorkspaceInviteModal 
                openInviteModal={openInviteModal}
                setOpenInviteModal={setOpenInviteModal}
                workspaceName={workspace?.name}
                joinCode={workspace?.joinCode}
                workspaceId={workspace?._id}
            />
     
    <div className="flex items-center justify-between px-4 h-[50px] gap-0.5">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            variant="transparent"
            className="font-semibold text-lg w-auto p-1.5 overflow-hidden"
          >
            <span className="truncate">{workspace?.name}</span>
            <ChevronDownIcon className="size-5 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-64">
          <DropdownMenuItem>
            <div className="size-9 relative overflow-hidden text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2 bg-[#616061]">
              {workspace?.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold">{workspace?.name}</p>
              <p className="text-xs text-muted-foreground">Active Workspace</p>
            </div>
          </DropdownMenuItem>
          {isLoggedInUserAdminOfWorkspace && (
            <>
              <DropdownMenuItem
                className="cursor-pointer py-2"
                onClick={() => {
                  setInitialValue(workspace?.name);
                  setOpenPreferences(true);
                }}
              >
                Preferences
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
               onClick={() => {setOpenInviteModal(true);}}
              className="cursor-pointer py-2">
                Invite people to {workspace?.name}
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-0.5">
        <Button variant="transparent" size="iconSm">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ListFilterIcon className="size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>

        <Button variant="transparent" size="iconSm">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <SquarePenIcon className="size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p> Preferense </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>
      </div>
    </div>
    </>

  );
};
