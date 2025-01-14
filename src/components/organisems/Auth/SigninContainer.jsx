import { useEffect, useState } from "react";
import { SigninCard } from "./SigninCard";
import { useNavigate } from "react-router-dom";

import { useSignin } from '@/hooks/apis/auth/useSignin';

export const SigninContainer = () => {

  const [validationError, setValidationError] = useState(null);

  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const {isPending, isSuccess, error, signinMutation} = useSignin();

  const onSigninFormSubmit = async (e) => {
    e.preventDefault();

    if (!signinForm.email || !signinForm.password) {
      console.log("All fields are required.");
      setValidationError({
        message: "Plese fill all the fields",
      });
      return;
    }

  
    setValidationError(null);

    await signinMutation({
      email: signinForm.email,
      password: signinForm.password,
    });
  };

  useEffect(() => {
     if (isSuccess) {
          setTimeout(() => {
          navigate('/home')
          }, 3000);
     }
  })

  return (
    <SigninCard
      onSigninFormSubmit={onSigninFormSubmit}
      signinForm={signinForm}
      setSigninForm={setSigninForm}
      validationError={validationError}
      error={error}
      isPending={isPending}
      isSuccess={isSuccess}
    />
  );
};
