
import { createWorkspacesRequest } from "@/apis/workspaces";

import { useAuth } from "@/hooks/context/useAuth"

import { useMutation } from "@tanstack/react-query";


// this hook is used to create a workspace
export const useCreateWorkspace = () => {
     const auth = useAuth();

     const { isPending, isSuccess, error, mutateAsync: createWorkspaceMutation } =
          useMutation({
               mutationFn: (data) => createWorkspacesRequest({ ...data, token: auth?.token }),
               onSuccess: (data) => {
                    console.log('Successfully created workspace', data);
                    
               },
               onError: (error) => {
                    console.log('Failed to creatw workspace', error);
                    
               }

          });

     return {
          isPending,
          isSuccess,
          error,
          createWorkspaceMutation
     };
};

