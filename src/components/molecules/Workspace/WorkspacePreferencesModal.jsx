import { TrashIcon } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useWorkspacePreferencesModal } from '@/hooks/context/WorkspacePreferencesModalContext';
import { useDeleteWorkspace } from '@/hooks/apis/workspaces/useDeleteWorkspace';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';


//  for editing workspace 
export const WorkspacePreferencesModal = () => {

    const queryClient = useQueryClient();

     const { initialValue, openPreferences, setOpenPreferences, workspace } = useWorkspacePreferencesModal();

     const [workspaceId,   setWorkspaceId] = useState();

     const navigate = useNavigate();

     const { toast } = useToast(); 

     const { deleteWorkspaceMutation} = useDeleteWorkspace(workspaceId);
 
     function handleClose() {
        setOpenPreferences(false);

     }

     useEffect(() => {
       setWorkspaceId(workspace?._id)
     }, [workspace]);
     
    async function handleDeleteWorkspace() {
       try {
        await deleteWorkspaceMutation();
        navigate('/home');
        queryClient.invalidateQueries('fetchWorkspaces');
        setOpenPreferences(false);
        toast({
            title: 'Workspace deleted successfully',
            success: true,
        })

       } catch (error) {
        console.log('Error in deleting workspace', error);
         toast({
            title: 'Error in deleting workspace',
            success: error,
         })
       }
    }


     return (
        <Dialog open={openPreferences} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {initialValue}
                    </DialogTitle>
                </DialogHeader>
                <div className='px-4 pb-4 flex flex-col gap-y-2'>
                    <div
                        className='px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'
                    >   
                        <div className='flex items-center justify-between'>
                            <p
                                className='font-semibold text-sm'
                            >
                                Workspace Name
                            </p>
                            <p
                                className='text-sm font-semibold hover:underline hover:text-green-700'
                            >
                                Edit
                            </p>
                        </div>

                      <p
                      className='text-sm'
                      >{initialValue}</p>

                    </div>
                    <button
                        className='flex items-center gap-x-2 px-5 py-4 bg-white 
                        hover:bg-red-500 hover:text-white rounded-lg border cursor-pointer hover:bg-gray-50'
                    onClick={handleDeleteWorkspace}
                    >
                        <TrashIcon className='size-5 ' />
                        <p
                        className='font-semibold text-sm '
                        >
                            Delete Workspace
                        </p>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};