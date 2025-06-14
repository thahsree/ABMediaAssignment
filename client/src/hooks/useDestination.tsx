import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useDestination = () => {
  return useQuery({
    queryKey: ["destination"],
    queryFn: async () => {
      const response = await axios("http://localhost:8888/api/destination");

      return response.data;
    },
    refetchOnWindowFocus: false,
  });
};

export default useDestination;
