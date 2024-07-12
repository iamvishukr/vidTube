import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration inside an IIFE
(async function () {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
})();

// Define the function outside the IIFE
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // Upload on Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // File has been uploaded successfully
    console.log("Uploaded successfully", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Removes the locally saved temporary file when operation gets rejected or failed
    throw error; // Re-throw the error after cleaning up
  }
};



export { uploadOnCloudinary };
