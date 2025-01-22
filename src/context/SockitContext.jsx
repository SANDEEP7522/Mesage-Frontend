
import { createContext } from "react";

import { io } from "socket.io-client";

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {

     const socket = io(import.meta.env.VITE_BACKEND_WEBSOCKIT_CONNECTION_URL);

     return (
               <SocketContext.Provider value={{ socket }}>
                
                    {children}
               
               </SocketContext.Provider>
     );



};



export default SocketContext;
