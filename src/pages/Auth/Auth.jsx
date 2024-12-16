import { SignupCard } from "@/components/organisems/Auth/SignupCard";

export const Auth = () => {
  return (
    <div className=" h-[100vh] flex justify-center items-center bg-slack ">
      <div className="md:h-auto md:w-[420px]" >
       <SignupCard />
      </div>
    </div>

  );
};
