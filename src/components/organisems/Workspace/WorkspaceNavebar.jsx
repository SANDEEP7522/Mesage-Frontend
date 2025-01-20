import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";

import { InfoIcon, LucideLoader2, SearchIcon } from "lucide-react";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";
import { useEffect } from "react";
import { useAuth } from "@/hooks/context/useAuth";

export const WorkspaceNavbar = () => {
  
  const { workspaceId } = useParams();

  const navigate = useNavigate();
  
  const { logout } = useAuth();

  const { isFetching, workspace, error, isSuccess } = useGetWorkspaceById(workspaceId);
  
  const { setCurrentWorkspace } = useCurrentWorkspace();

  useEffect(() => {


    if(!isFetching && !isSuccess && error) {
      console.log('Error fetching workspace', error.status);
      if(error.status === 403) {
          logout();
          navigate('/auth/signin');
      }
  }

    if(workspace) {
        setCurrentWorkspace(workspace);
    }
},[workspace, setCurrentWorkspace, isSuccess, error, isFetching]);


  if (isFetching) {
    return (
      <LucideLoader2 className="fixed top-2 left-1/2 translate-x-1/2 animate-spin z-50" />
    );
  }
  return (
    <nav className="flex items-center justify-center h-10 p-1.5 bg-slack-dark">
      <div className="flex-1" />
        <div>
            <Button
            size="sm"
            className="bg-accent/25 hover:bg-accent/15 w-full justify-start h-7 px-2"
            >
            <SearchIcon className="size-5 text-white mr-2" />
            <span className="text-white text-xs">
                Search {workspace?.name || "Workspace"}
            </span>
            </Button>
        </div>
            <div className="ml-auto flex-1 flex items-center justify-end">
                <Button variant="transparent" size="iconSm">
                <InfoIcon className="size-5 text-white" />
                </Button>
            </div>
    </nav>
  );
};
