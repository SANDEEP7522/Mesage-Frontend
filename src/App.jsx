

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Auth } from'@/pages/Auth/Auth'
import { NotFound } from "@/pages/NotFound/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SignupContainer } from "@/components/organisems/Auth/SignupContainer";
import { Toaster } from "@/components/ui/toaster";
import { SigninContainer } from "./components/organisems/Auth/SigninContainer";

function App() {

  const queryClient = new QueryClient();
  
  return ( 

    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/auth/signup" element = {<Auth><SignupContainer /></Auth>}/>
      <Route path="/auth/signin" element = {<Auth><SigninContainer /></Auth>}/>
      <Route path="/home" element = {<Auth><h1>home</h1></Auth>}/>

      <Route path="/*" element = {<NotFound />}/>
    </Routes>
   
    <Toaster />
    
    </QueryClientProvider>
  );
}

export default App;
