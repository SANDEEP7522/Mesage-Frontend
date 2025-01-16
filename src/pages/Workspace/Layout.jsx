import { WorkspaceNavbar } from "@/components/organisems/Workspace/WorkspaceNavebar";
import { WorkspaceSidebar } from "@/components/organisems/Workspace/WorkspaceSidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const WorkspaceLayout = ({ children }) => {
  return (
    <div className="h-[100vh]">
      <WorkspaceNavbar />

      <div className="flex h-[calc(100vh-40px)]">
        <WorkspaceSidebar />

        <ResizablePanelGroup
          direction="horizontal"
          autoSaveId={"workspace-resize"}
        >
          <ResizablePanel
            defaultSize={20}
            minSize={11}
            className="bg-slack-medium"
          >
            <div>Sidebar</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={20}>{children}</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};
