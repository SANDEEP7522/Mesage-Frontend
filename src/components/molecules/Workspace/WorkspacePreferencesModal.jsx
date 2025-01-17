import { TrashIcon } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useWorkspacePreferencesModal } from '@/hooks/context/WorkspacePreferencesModalContext';


//  for editing workspace 
export const WorkspacePreferencesModal = () => {

     const { initialValue, openPreferences, setOpenPreferences } = useWorkspacePreferencesModal();

     function handleClose() {
        setOpenPreferences(false);

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