import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const getUserByUserID = async (userId: string) => {
  const response = await axios.get(`http://localhost:3000/api/users/${userId}`);
  return response.data;
};

export const useGetUserByUserID = () => {
  return useMutation({
    mutationKey: ["postAddNewPatient"],
    mutationFn: (userId: string) => getUserByUserID(userId),
  });
};
