import { useMutation } from '@tanstack/react-query';

import { updateteWorkspaceRequest } from '@/apis/workspaces';

import { useAuth } from '@/hooks/context/useAuth';

export const useUpdateWorkspace = (workspaceId) => {

     const { auth } = useAuth();

     const {isPending, isSuccess, error, mutateAsync: updateWorkspaceMutation} = useMutation({
        mutationFn: (name) => updateteWorkspaceRequest({ workspaceId, name, token: auth?.token}),
        onSuccess: () => {
            console.log('Workspace updated successfully');
        },
        onError: (error) => {
            console.log('Error in updating workspace', error);
        }
    });
  
    return {
        isPending,
        isSuccess,
        error,
        updateWorkspaceMutation
    };

};