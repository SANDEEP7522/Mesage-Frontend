import { CreateChannelModal } from "@/components/molecules/CreateChannelModal/CreateChannelModal";
import { CreateWorkspaceModal } from "@/components/molecules/CreateWorkspaceModal/CreateWorkspaceModal";
import { WorkspacePreferencesModal } from "@/components/molecules/Workspace/WorkspacePreferencesModal";

export const Modals = () => {
  return (
    <div>
      <CreateWorkspaceModal />
      <WorkspacePreferencesModal />
      <CreateChannelModal />
    </div>
  );
};
