const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowed_formats: ["png", "jpeg", "jpg"],
    folder: "restaurant",
    timestamp: Math.floor(Date.now() / 1000), // ✅ Force explicit timestamp
    use_filename: true,
    unique_filename: false,
  },
  console.log("📤 Upload Params:", params);
});

module.exports = multer({ storage });
