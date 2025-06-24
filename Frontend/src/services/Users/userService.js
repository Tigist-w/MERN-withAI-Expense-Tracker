import axios from "axios";
import { getUserToken } from "../../utils/getUsertoken";
import { BASE_URL } from "../../utils/url";

// ✅ Axios instance for protected routes (token included)
const axiosInstance = () => {
  const token = getUserToken(); // ensures fresh token on every call
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ✅ Login API (no token needed)
export const loginAPI = async ({ email, password }) => {
  const res = await axios.post(`${BASE_URL}/user/login`, {
    email,
    password,
  });
  return res.data;
};

// ✅ Register API (no token needed)
export const registerAPI = async ({ email, password, username }) => {
  const res = await axios.post(`${BASE_URL}/user/register`, {
    email,
    password,
    username,
  });
  return res.data;
};

// ✅ Change Password API (requires token)
export const changePasswordAPI = async (newPassword) => {
  const res = await axiosInstance().put(`/user/change-password`, {
    newPassword,
  });
  return res.data;
};

// ✅ Update Profile API (requires token)
export const updateProfileAPI = async ({ username, email }) => {
  const res = await axiosInstance().put(`/user/update-profile`, {
    username,
    email,
  });
  return res.data;
};
