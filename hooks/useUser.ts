import { getUser } from "@/actions/userActions/getUser";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
    const { data: user, isLoading: isUserLoading } = useQuery({
        queryKey: ['user'],  
        queryFn: getUser,     
      });
      
    return { user, isUserLoading };
}