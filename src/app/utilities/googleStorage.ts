"use server";

import { Storage } from "@google-cloud/storage";
require("dotenv").config();

export const fetchImages = async () => {
  const storage = new Storage({
    credentials: {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
    },
  });

  const bucketName = "luyen-wedding-academy-bucket";
  const folderName = "luyen-academy-pics/product-collection";

  const [files] = await storage.bucket(bucketName).getFiles({
    prefix: folderName,
  });

  const imageUrls = files.map((file: any) => {
    return `https://storage.cloud.google.com/${bucketName}/${file.name}`;
  });

  // console.log(imageUrls);

  return imageUrls;
};
