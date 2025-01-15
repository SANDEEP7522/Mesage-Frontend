import { UserButton } from "@/components/atoms/UserButton/UserButton";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";
import { useEffect } from "react";


export const Home = () => {

  const { isFetching, workspaces } = useFetchWorkspace();

  useEffect(() => {
    
   if(isFetching) return;
     console.log('Workspaces is downloded', workspaces);
    
   if (workspaces.length === 0 || !workspaces) {
    console.log('No workspaces found, creating one ');
    
   } 
     
  }, [isFetching, workspaces]);

  return (

    <div>
      
      <h1>Home</h1>
      
      <UserButton />
    
    </div>
  
 );

};
