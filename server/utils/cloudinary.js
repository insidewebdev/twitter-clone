import { v2 as cloudinary } from "cloudinary"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const uploadToCloudinary = (image) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(image, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}