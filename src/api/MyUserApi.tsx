import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id : string;
    email: string;
}

export const useCreateMyUser = () => {

    const { getAccessTokenSilently } = useAuth0();


    const createMyUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`,{
            method: "POST",
            headers:{
                Authorization: `Bearer ${accessToken}`,
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user),
        });
        if(!response.ok){
            throw new Error("Failed to create user");
        }
    };

    const {mutateAsync: createUser,isLoading,isError,isSuccess} = useMutation(createMyUserRequest);

    return {createUser,isLoading,isError,isSuccess}
}

type UpdateMyUserReq = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
}

export const useUpdateMyUser = () =>{
    const {getAccessTokenSilently} = useAuth0();
    

    const updateMyUserReq = async (formData: UpdateMyUserReq) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`,{
            method:"PUT",
            headers:{
                Authorization: `Bearer ${accessToken}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        });
        if(!response.ok){
            throw new Error("failed to update user")
        }
        return response;
    };

    const {mutateAsync: updateUser,isLoading,isSuccess,error,reset} = useMutation(updateMyUserReq);

    if(isSuccess){
        toast.success("Profile Updated!")
    }
    if(error){
        toast.error(error.toString());
        reset;
    }
    return { updateUser,isLoading };
}

export const useGetMyUser = () => {
    const {getAccessTokenSilently} = useAuth0();

    const getMyUserReq = async ():Promise<User> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`,{
            method: "GET",
            headers:{
                Authorization: `Bearer ${accessToken}`,
                "Content-Type" : "application/json"
            }
        });
        if(!response.ok){
            throw new Error("Failed to fetch user");
        }

        return response.json();
    }

    const {data: currentUser,isLoading,error} = useQuery("fetchCurrentUser",getMyUserReq);

    if(error){
        toast.error(error.toString());
    }

    return {currentUser,isLoading};
}