

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Auth } from'@/pages/Auth/Auth'
import { SignupCard } from "@/components/organisems/Auth/SignupCard";
import { SigninCard } from "@/components/organisems/Auth/SigninCard";
import { NotFound } from "@/pages/NotFound/NotFound";

function App() {
  
  return ( 
    <Routes>
      <Route path="/auth/signup" element = {<Auth><SignupCard /></Auth>}/>
      <Route path="/auth/signin" element = {<Auth><SigninCard /></Auth>}/>

      <Route path="/*" element = {<NotFound />}/>
      
    </Routes>
  );
}

export default App;
