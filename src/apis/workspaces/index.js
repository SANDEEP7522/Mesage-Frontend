import axios from "@/config/axiosConfig";

export const createWorkspacesRequest = async ( { name, description, token } ) => {
     try {
          const response = await axios.post('/workspaces', { name, description}, {
               headers: {
                    'x-access-token': token
               }
          });
          console.log('Response create in workspaces response', response);
          
          return response?.data?.data;

          
     } catch (error) {
          console.log('Error create in create workspaces', error);
          throw error.response.data;
          
          
     }
}

export const fetchWorkspacesRequest = async ( {token} ) => {
     try {

      const response = await axios.get('/workspaces',{
               headers: {
                    'x-access-token': token
               }
        });
       console.log('Response in fetch workspaces response', response);
          
          return response?.data?.data;
          
     } catch (error) {
          console.log('Error in fetch workspaces', error);
          throw error.response.data;
          
     }
}