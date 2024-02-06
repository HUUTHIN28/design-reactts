import { conFixAxios } from "../../api/axiosConfig";
import { dashboardType } from "./type";

export const getDashboard = async (data: dashboardType) => {
  try {
    const res = await conFixAxios.get("dashboard", { data });
    return res.data;
  } catch (err) {
    throw err;
  }
};
