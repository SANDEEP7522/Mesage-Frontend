import { WorkspaceNavbar } from "@/components/organisems/Workspace/WorkspaceNavebar";
import { WorkspaceSidebar } from "@/components/organisems/Workspace/WorkspaceSidebar";

export const WorkspaceLayout = ({ children }) => {
  return (
    
     <div className="h-[100vh]">
     
       <WorkspaceNavbar />

      <div className="flex h-[calc(100vh-40px)]">
    
        <WorkspaceSidebar />
    
        {children}
    
      </div>
    
    </div>
  );
};
