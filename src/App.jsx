

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Auth } from'@/pages/Auth/Auth'
import { SigninCard } from "@/components/organisems/Auth/SigninCard";
import { NotFound } from "@/pages/NotFound/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SignupContainer } from "@/components/organisems/Auth/SignupContainer";
import { Toaster } from "@/components/ui/toaster";

function App() {

  const queryClient = new QueryClient();
  
  return ( 

    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/auth/signup" element = {<Auth><SignupContainer /></Auth>}/>
      <Route path="/auth/signin" element = {<Auth><SigninCard /></Auth>}/>

      <Route path="/*" element = {<NotFound />}/>
    </Routes>
   
    <Toaster />
    
    </QueryClientProvider>
  );
}

export default App;
