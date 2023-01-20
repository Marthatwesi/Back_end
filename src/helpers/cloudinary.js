import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary"

cloudinary.config({
  cloud_name: process.env.C_NAME,
  api_key: process.env.C_API_KEY,
  api_secret: process.env.C_KEY_SECRET,
  secure: true,
});

const imgStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "MY_CLOUDINARY_BRAND",
  },
});
export default imgStorage;
