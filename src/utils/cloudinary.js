import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // Upload the local file to the cloudinary
        const resp = await cloudinary.uploader.upload(localFilePath, { 
            resource_type: "auto" }, 
            function(error, result) {console.log(result); 
        });
        // file was successfully uploaded
        console.log(`${resp.url} uploaded successfully`);
        return resp;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
        
    }
};

export { uploadOnCloudinary };