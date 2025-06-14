import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTopSelling = () => {
  return useQuery({
    queryKey: ["TopSelling"],
    queryFn: async () => {
      const response = await axios(
        "http://localhost:8888/api/packages/top-selling"
      );

      return response.data;
    },
    refetchOnWindowFocus: false,
  });
};

export default useTopSelling;
