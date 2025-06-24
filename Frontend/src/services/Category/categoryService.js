import axios from "axios";
import { getUserToken } from "../../utils/getUsertoken";
import { BASE_URL } from "../../utils/url";

// Get token once (if it doesn't change during the session)
const token = getUserToken();

// Axios instance (optional for DRY)
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// 👉 Add Category
export const addCategoryAPI = async ({ name, type }) => {
  const res = await axiosInstance.post("/categories/create", { name, type });
  return res.data;
};

// 👉 List Categories
export const listCategoryAPI = async () => {
  const res = await axiosInstance.get("/categories/list");
  return res.data;
};

// 👉 Update Category
export const updateCategoryAPI = async ({ name, type, id }) => {
  const res = await axiosInstance.put(`/categories/update/${id}`, {
    name,
    type,
  });
  return res.data;
};

// 👉 Delete Category
export const deleteCategoryAPI = async (id) => {
  const res = await axiosInstance.delete(`/categories/delete/${id}`);
  return res.data;
};
