import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SigninCard = () => {

     const navigate = useNavigate();

  const [signinForm, setSigninForm] = useState({
     email:'',
     password:'',
  
  })

     return (
    <Card className='h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100' >
       <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Sign in to access your account</CardDescription>
       </CardHeader>
       <form className='space-y-5 m-6'>
          <Input 
          placeholder= 'Email'
          required
          onChange={(e) => setSigninForm({...signinForm, email: e.target.value})}
          value={signinForm.email}
          type='email'
          disabled={false}
          />

          <Input 
          placeholder= 'Password'
          required
          onChange={(e) => setSigninForm({...signinForm, password: e.target.value})}
          value={signinForm.password}
          type='password'
          disabled={false} 
          />

           <Button
           disabled={false}
           size='lg'
           type='submit'
           className='w-full'
           >
            Continue
           </Button>

       </form>

      <Separator className='my-3' />
   
        <p 
        className='text-center text-sm text-muted-foreground mb-3 mt-3'
        >
          You have <b>No</b> account?{' '}
          <span 
          onClick={() => navigate('/auth/signup')}
          className='text-sky-600 hover:text-sky-500 hover:underline cursor-pointer'
          >Sign Up</span>
        </p>
     </Card>
  )
}
