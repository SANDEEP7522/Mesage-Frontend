import React, { useState } from 'react'
import { SignupCard } from './SignupCard'


export const SignupContainer =() => {

      const [signupForm, setSignupForm] = useState({
          email:'',
          password:'',
          confirmPassword:'',
          username:''
       })

     const [validationError, setValidationError] = useState(null)
     
     async function onSignupFormSubmit(e) {
          e.preventDefault(); 
          console.log('Signup form submitted', signupForm);
         
          if(!signupForm.email || !signupForm.password || !signupForm.confirmPassword || !signupForm.username) {
              console.error('All fields are required');
              setValidationError({ message: 'All fields are required' });
              return;
          }

          if(signupForm.password !== signupForm.confirmPassword) {
              console.error('Passwords do not match');
              setValidationError({ message: 'Passwords do not match' });
              return;
          }
}
  return (
    <div>
      <SignupCard 
      signupForm={signupForm} 
      setSignupForm={setSignupForm} 
      validationError={validationError} 
      onSignupFormSubmit={onSignupFormSubmit}
      />

    </div>
  )
}
