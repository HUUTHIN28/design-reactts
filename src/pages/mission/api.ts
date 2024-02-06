import { conFixAxios } from "../../api/axiosConfig";
import { mission } from "./type";

export const getMission = async (data: mission) => {
  try {
    const res = await conFixAxios.get("/mission", { data });
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const detailMission = async ({ params }: { params: { id: number } }) => {
  try {
    const id = params.id;
    const res = await conFixAxios.get(`/mission/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
