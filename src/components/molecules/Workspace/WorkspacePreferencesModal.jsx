import { TrashIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useWorkspacePreferencesModal } from "@/hooks/context/WorkspacePreferencesModalContext";
import { useDeleteWorkspace } from "@/hooks/apis/workspaces/useDeleteWorkspace";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useUpdateWorkspace } from "@/hooks/apis/workspaces/useUpdateWorkspace";
import { Button } from "@/components/ui/button";
import { useConfirm } from "@/hooks/useConfirm";

//  for editing workspace
export const WorkspacePreferencesModal = () => {
  const queryClient = useQueryClient();
  const [workspaceId, setWorkspaceId] = useState();

  const navigate = useNavigate();

  const { toast } = useToast();

  const [editOpen, setEditOpen] = useState(false);

  const { initialValue, openPreferences, setOpenPreferences, workspace } =
    useWorkspacePreferencesModal();
  const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);

  const { isPending, updateWorkspaceMutation } =
    useUpdateWorkspace(workspaceId);

  const [renameValue, setRenameValue] = useState(workspace?.name);

  const { confirmation, ConfirmDialog } = useConfirm({ title: 'Do you want to delete this workspace?', 
     message: 'this action connot be undone and all the data will be Lost',
   })
 
   const { confirmation: updateConformation, ConfirmDialog: UpdateDialog } = useConfirm({ 
     title: 'Do you want to update this workspace?', 
     message: 'this action connot be undone and all the data will be Changed',
   })

  function handleClose() {
    setOpenPreferences(false);
  }

  useEffect(() => {
    setWorkspaceId(workspace?._id);
    setRenameValue(workspace?.name);
  }, [workspace]);

  async function handleDeleteWorkspace() {
    try {
      const ok = await confirmation();
      if (!ok) {
        return;
      }
      await deleteWorkspaceMutation();
      navigate("/home");
      queryClient.invalidateQueries("fetchWorkspaces");
      setOpenPreferences(false);
      toast({
        title: "Workspace deleted successfully",
        success: true,
      });
    } catch (error) {
      console.log("Error in deleting workspace", error);
      toast({
        title: "Error in deleting workspace",
        success: error,
      });
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
    const ok = await updateConformation();
    console.log('Confirmation recived');
    
      if (!ok) {
        return;
      }
      await updateWorkspaceMutation(renameValue);
      queryClient.invalidateQueries(`fetchWorkspaceById-${workspace?._id}`);
      setOpenPreferences(false);
      toast({
        title: "Workspace updated successfully",
        type: "success",
      });
    } catch (error) {
      console.log("Error in updating workspace", error);
      toast({
        title: "Error in updating workspace",
        type: "error",
      });
    }
  }

  return (
    <>
     <ConfirmDialog />
     <UpdateDialog />
    <Dialog open={openPreferences} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialValue}</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-4 flex flex-col gap-y-2">
          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogTrigger>
              <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">Workspace Name</p>
                  <p className="text-sm font-semibold hover:underline hover:text-green-700">
                    Edit
                  </p>
                </div>

                <p className="text-sm">{initialValue}</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Rename Workspace</DialogTitle>
              </DialogHeader>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <Input
                  value={renameValue}
                  onChange={(e) => setRenameValue(e.target.value)}
                  required
                  autoFocus
                  minLength={3}
                  maxLength={50}
                  disabled={isPending}
                  placeholder="Workspace Name e.g. Design Team"
                />

                <DialogFooter>
                  <DialogClose>
                    <Button variant="outline" disabled={isPending}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" disabled={isPending}>
                    Save
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          <button
            className="flex items-center gap-x-2 px-5 py-4 bg-white 
                        hover:bg-red-500 hover:text-white rounded-lg border cursor-pointer hover:bg-gray-50"
            onClick={handleDeleteWorkspace}
          >
            <TrashIcon className="size-5 " />
            <p className="font-semibold text-sm ">Delete Workspace</p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};
