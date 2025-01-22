import SocketContext from '@/context/SockitContext';
import { useContext } from 'react';



export const useSocket = () => {

     return useContext(SocketContext);


};