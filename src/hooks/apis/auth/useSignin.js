import { useMutation } from '@tanstack/react-query';
import { signInRequest } from '@/apis/auth';
import { useToast } from '@/hooks/use-toast';
export const useSignin = () => {

    const { toast } = useToast();

    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signInRequest,
        onSuccess: (data) => {
            console.log('Successfully signed in', data);
            toast({
                title: 'Signed in successfully',
                message: 'You will be redirected to the home Page in a few seconds',
                type: 'success'    
            })
        },
        onError: (error) => {
            console.error('Failed to sign in', error);
            toast({
                title: 'Failed to sign in',
                message: error.message,
                type: 'error',
                variant: 'destructive'
            })
        }
    });
    return {
        isPending,
        isSuccess,
        error,
        signinMutation
    };
};