

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Auth } from'@/pages/Auth/Auth'
import { SignupCard } from "@/components/organisems/Auth/SignupCard";
import { SigninCard } from "@/components/organisems/Auth/SigninCard";

function App() {
  
  return (
    <Routes>
      <Route path="/auth/signup" element = {<Auth><SignupCard /></Auth>}/>
      <Route path="/auth/signin" element = {<Auth><SigninCard /></Auth>}/>
      
    </Routes>
  );
}

export default App;
