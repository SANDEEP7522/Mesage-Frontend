import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React, { useState } from 'react'

export const SignupCard = () => {

  const [signupForm, setSignupForm] = useState({
     email: '',
     password: '',
     confirmPassword: '',
     username: ''
  })

     return (
    <Card className='h-full w-[80%] bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100' >
       <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>Sign up to access your account</CardDescription>
       </CardHeader>
       <form className='space-y-5'>
          <Input 
          placeholder= 'Email'
          required
          onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
          value={signupForm.email}
          type='email'
          disabled={false}
          />
          <Input 
          placeholder= 'Password'
          required
          onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
          value={signupForm.password}
          type='password'
          disabled={false} 
          />
          <Input 
          placeholder= 'Confirm Password'
          required
          onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
          value={signupForm.confirmPassword}
          type='password'
          disabled={false}
          /> 
           <Input 
          placeholder= 'Enter user Name'
          required
          onChange={(e) => setSignupForm({...signupForm, username: e.target.value})}
          value={signupForm.username}
          type='text'
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

       {/* <Separator className='my-5' /> */}
        <p 
        className='text-center text-sm text-muted-foreground mb-3 mt-3'
        >
          Already have an account?{' '}
          <span
          className='text-sky-600 hover:text-sky-500 hover:underline cursor-pointer'
          >Sign In</span>
        </p>
     </Card>
  )
}
