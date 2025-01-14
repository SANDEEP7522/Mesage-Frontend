import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

// we want to get user details or Token from local stroge 
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
     user: null,
     token: null,
     isLoading: true
  });
  

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem('token');

    if (user && token) {
      setAuth({
        user: JSON.parse(user),
        token,
        isLoading: false
      });
    }
    else{
      setAuth({
        user: null,
        token: null,
        isLoading: false
      });
    }
  }, []);

  return (
     <AuthContext.Provider value={ { auth, setAuth } }>
        {children}
     </AuthContext.Provider>
   )
};

export default AuthContext;
