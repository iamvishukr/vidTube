import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // Upload an image
  const uploadOnCloudinary = async (localFilePath) => {
    try {
      if (!localFilePath) return null;
      //upload on cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
      //file has been uploaded successfully
      console.log("Uploaded  successfully", response.url);
      return response;
    } catch (error) {
      fs.unlinkSync(localFilePath); //removes the locally saved temporary file
      //when operation gets rejected or failed
    }
  };
});
export  { uploadOnCloudinary };
