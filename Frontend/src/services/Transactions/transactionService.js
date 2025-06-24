import axios from "axios";
import { getUserToken } from "../../utils/getUsertoken";
import { BASE_URL } from "../../utils/url";

// 🛠 Create reusable axios instance with dynamic headers
const axiosInstance = () => {
  const token = getUserToken(); // Always gets fresh token
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ✅ Add Transaction
export const addTransactionAPI = async ({
  type,
  amount,
  category,
  description,
  date,
}) => {
  const res = await axiosInstance().post("/transaction/create", {
    type,
    amount,
    category,
    description,
    date,
  });
  return res.data;
};

// ✅ List Transactions (with filters)
export const listTransactionAPI = async ({
  startDate,
  endDate,
  type,
  category,
}) => {
  const res = await axiosInstance().get("/transaction/list", {
    params: {
      startDate,
      endDate,
      type,
      category,
    },
  });
  return res.data;
};

// ✅ Update Category
export const updateCategoryAPI = async ({ name, type, id }) => {
  const res = await axiosInstance().put(`/categories/update/${id}`, {
    name,
    type,
  });
  return res.data;
};

// ✅ Delete Category
export const deleteCategoryAPI = async (id) => {
  const res = await axiosInstance().delete(`/categories/delete/${id}`);
  return res.data;
};
