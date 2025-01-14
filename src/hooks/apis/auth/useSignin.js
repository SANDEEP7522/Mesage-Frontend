import { useMutation } from '@tanstack/react-query';
import { signInRequest } from '@/apis/auth';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/context/useAuth';
export const useSignin = () => {

    const { toast } = useToast();

    const { setAuth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signInRequest,
        onSuccess: (response) => {
            console.log('Successfully signed in', response);
            
         // store the user object in local storage
            const userObject = JSON.stringify(response.data)
         
            localStorage.setItem('user', userObject);// items stored data in current browser
            localStorage.setItem('token', response.data.token); // pro. direct token

            setAuth({
                token: response.data.token,
                user: response.data,
                loading: false
            });

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