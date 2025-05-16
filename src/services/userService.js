import axiosInstance from "../utils/axiosInstance";

export const signup = async (formData) => {
  const response = await axiosInstance.post("/auth/signup", formData);
  return response.data;
};
