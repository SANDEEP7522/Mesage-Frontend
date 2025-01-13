import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LucideLoader2, TriangleAlert } from "lucide-react";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const SigninCard = ({
  signinForm,
  setSigninForm,
  onSigninFormSubmit,
  validationError,
  error,
  isSuccess,
  isPending
}) => {
  const navigate = useNavigate();

  return (
    <Card className="h-full w-full bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to access your account</CardDescription>

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
            <p className="text-red-800">{error.message}</p>
          </div>
        )}

        {isSuccess && (
          <div
            className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 
          text-sm mb-5 text-primary"
          >
            <p className="text-sm text-green-500 ">
              <FaCheck size={20} className="text-green-600 " />
              Successfully sign up. You will be redirected to Home Page few
              second
              <LucideLoader2 size={20} className="animate-spin ml-3" />
            </p>
          </div>
        )}


      </CardHeader>
      <form className="space-y-5 m-6" onSubmit={onSigninFormSubmit}>
        <Input
          placeholder="Email"
          required
          onChange={(e) =>
            setSigninForm({ ...signinForm, email: e.target.value })
          }
          value={signinForm.email}
          type="email"
          disabled={isPending}
        />

        <Input
          placeholder="Password"
          required
          onChange={(e) =>
            setSigninForm({ ...signinForm, password: e.target.value })
          }
          value={signinForm.password}
          type="password"
          disabled={isPending}
        />

        <Button disabled={isPending} size="lg" type="submit" className="w-full">
          Continue
        </Button>
      </form>

      <Separator className="my-3" />

      <p className="text-center text-sm text-muted-foreground mb-3 mt-3">
        You have <b>No</b> account?{" "}
        <span
          onClick={() => navigate("/auth/signup")}
          className="text-sky-600 hover:text-sky-500 hover:underline cursor-pointer"
        >
          Sign Up
        </span>
      </p>
    </Card>
  );
};
