import multer from "multer";
import imgStorage from "./cloudinary";

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb({ message: "Unsupported File Format" }, false);
  }
};

const upload = multer({
  storage: imgStorage,
  fileFilter: fileFilter,
});

export default upload;