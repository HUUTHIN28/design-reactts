import axios from "axios";

export const conFixAxios = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: { "X-Requested-With": "XMLHttpRequest" },
  timeout: 10000,
});

conFixAxios.interceptors.request.use(
  function (config) {
    // Làm gì đó trước khi request dược gửi đi
    const token = localStorage.getItem("access_token");
    config.headers.Authorization = token
      ? "JWT " + localStorage.getItem("access_token")
      : "";
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);

// Thêm một bộ đón chặn response
conFixAxios.interceptors.response.use(
  function (response) {
    // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
    // Làm gì đó với dữ liệu response
    return response;
  },
  function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  }
);
