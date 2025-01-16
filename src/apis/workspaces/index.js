import axios from "@/config/axiosConfig";

export const createWorkspaceRequest = async ({ name, description, token }) => {
  try {
    //  console.log('name', name, 'description', description, 'token', token);

    const response = await axios.post(
      "/workspaces",
      { name, description },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Response in create workspace request", response);

    return response?.data?.data;
    
  } catch (error) {
    console.log("Error in create workspace request", error);
    throw error.response.data;
  }
};

export const fetchWorkspacesRequest = async ({ token }) => {
  try {
    const response = await axios.get("/workspaces", {
      headers: {
        "x-access-token": token,
      },
    });
    console.log("Response in fetch workspaces response", response);

    return response?.data?.data;
  } catch (error) {
    console.log("Error in fetch workspaces", error);
    throw error.response.data;
  }
};
