import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaCheck } from 'react-icons/fa';
import { LucideLoader2, TriangleAlert } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SignupCard = ({
  signupForm,
  setSignupForm,
  validationError,
  onSignupFormSubmit,
  error,
  isPending,
  isSuccess,
}) => {
  const navigate = useNavigate();
  console.log(signupForm);

  return (
    <Card className="h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Sign up to access your account</CardDescription>

        {validationError && (
          <div
            className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 
           text-sm mb-6 text-destructive-foreground"
          >
            <TriangleAlert size={20} className="text-red-700" />
            <p className="text-red-500">{validationError.message}</p>
          </div>
        )}

        {error && (
          <div
            className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 
           text-sm mb-6 text-destructive-foreground"
          >
            <TriangleAlert size={20} className="text-red-700" />
            <p className="text-red-500">{error.message}</p>
          </div>
        )}

        {isSuccess && (
          <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 
          text-sm mb-5 text-primary">
            <p className="text-sm text-green-500 ">
            <FaCheck size={20} className="text-green-600 "/>
            Successfully sign up. You will be redirected to Signin Page few second
            
            <LucideLoader2 size={20} className="animate-spin ml-3" />
          
            </p>
          </div>
        )}

{/* 
         {isPending && (
          <div>
            <p className="text-center text-sm text-green-500" > Plese Wait....... </p>
          </div>
         )} */}


      </CardHeader>
      <form className="space-y-5  m-6" onSubmit={onSignupFormSubmit}>
        <Input
          placeholder="Email"
          required
          onChange={(e) =>
            setSignupForm({ ...signupForm, email: e.target.value })
          }
          value={signupForm.email}
          type="email"
          disabled={isPending}
        />
        <Input
          placeholder="Password"
          required
          onChange={(e) =>
            setSignupForm({ ...signupForm, password: e.target.value })
          }
          value={signupForm.password}
          type="password"
          disabled={isPending}
        />
        <Input
          placeholder="Confirm Password"
          required
          onChange={(e) =>
            setSignupForm({ ...signupForm, confirmPassword: e.target.value })
          }
          value={signupForm.confirmPassword}
          type="password"
          disabled={isPending}
        />
        <Input
          placeholder="username"
          required
          onChange={(e) =>
            setSignupForm({ ...signupForm, username: e.target.value })
          }
          value={signupForm.username}
          type="text"
          disabled={isPending}
        />
        <Button disabled={false} size="lg" type="submit" className="w-full">
          Continue
        </Button>
      </form>
      <Separator className="my-5" />
      <p className="text-center text-sm text-muted-foreground mb-3 mt-3">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/auth/signin")}
          className="text-sky-600 hover:text-sky-500 hover:underline cursor-pointer"
        >
          Sign In
        </span>
      </p>
    </Card>
  );
};
