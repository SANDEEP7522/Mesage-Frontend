import React, { useEffect, useState } from "react";
import { SignupCard } from "./SignupCard";
import { useSignup } from "@/hooks/apis/auth/useSignup";
import { useNavigate } from "react-router-dom";

export const SignupContainer = () => {
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const [validationError, setValidationError] = useState(null);

  const { isPending, isSuccess, error, signupMutation } = useSignup();

  async function onSignupFormSubmit(e) {
    e.preventDefault();
    console.log("Signup form submitted", signupForm);

    if (
      !signupForm.email ||
      !signupForm.password ||
      !signupForm.confirmPassword ||
      !signupForm.username
    ) {
      console.error("All fields are required");
      setValidationError({ message: "All fields are required" });
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      console.error("Passwords do not match");
      setValidationError({ message: "Passwords do not match" });
      return;
    }

    setValidationError(null);

    // call signup mutation here (help to create new user)
    await signupMutation({
      email: signupForm.email,
      password: signupForm.password,
      username: signupForm.username,
    });
  }

  useEffect(() => {
    if (isSuccess) {
        setTimeout(() => {
          navigate("/auth/signin");
        }, 3000);
    }
  }, [isSuccess, navigate]);

  return (
    <div>
      <SignupCard
        error={error}
        isPending={isPending}
        isSuccess={isSuccess}
        signupForm={signupForm}
        setSignupForm={setSignupForm}
        validationError={validationError}
        onSignupFormSubmit={onSignupFormSubmit}
      />
    </div>
  );
};
