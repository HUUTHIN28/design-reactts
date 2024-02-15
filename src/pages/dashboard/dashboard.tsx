import React from "react";
import { useLoaderData } from "react-router-dom";
import { useCustomFilePicker, useUploadFile } from "../../util/help";

type Props = {};

const Dashboard = (props: Props) => {
  try {
    const loaderData = useLoaderData();
    console.log("loaderData", loaderData);
  } catch (err) {
    console.log(err);
  }
  const handleFileSelected = (file: File) => {
    // Xử lý file đã chọn ở đây
    console.log("File đã chọn:", file);
  };

  const { handleFileSelection } = useCustomFilePicker(handleFileSelected);

  const { handleUploadFile } = useUploadFile();

  const HandleUpdateLoad = async () => {
    const { files } = await handleUploadFile();
    console.log("arr", files);
  };

  return (
    <div>
      <button onClick={handleFileSelection}>Chọn ảnh</button>
      <button onClick={HandleUpdateLoad}>UploadFile</button>\
    </div>
  );
};

export default Dashboard;
