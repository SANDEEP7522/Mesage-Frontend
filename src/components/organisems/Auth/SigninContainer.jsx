import { useEffect, useState } from "react";
import { SigninCard } from "./SigninCard";
import { Navigate, useNavigate } from "react-router-dom";

export const SigninContainer = () => {

  const [validationError, setValidationError] = useState(null);

  const [signinForm, setSigninForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [isPending, isSuccess, error, signinMutation] = useState();

  const onSigninFormSubmit = async (e) => {
    e.preventDefault();

    if (!signinForm.email || !signinForm.password) {
      console.log("All fields are required.");
      setValidationError({
        message: "Plese fill all the fields",
      });
      return;
    }

 

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
