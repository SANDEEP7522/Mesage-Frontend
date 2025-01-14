import { Route, Routes } from "react-router-dom";
import { Auth } from "@/pages/Auth/Auth";
import { SignupContainer } from "@/components/organisems/Auth/SignupContainer";
import { SigninContainer } from "@/components/organisems/Auth/SigninContainer";
import { NotFound } from "@/pages/NotFound/NotFound";


export const AppRoutes = () => {
     return (
          <Routes>
               <Route path="/auth/signup" element = {<Auth><SignupContainer /></Auth>}/>
               <Route path="/auth/signin" element = {<Auth><SigninContainer /></Auth>}/>
               <Route path="/home" element = {<Auth><h1>home</h1></Auth>}/>

               <Route path="/*" element = {<NotFound />}/>
        </Routes>
    
  
     )
};