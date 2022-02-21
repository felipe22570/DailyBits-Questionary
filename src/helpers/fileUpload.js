export const fileUpload = async (file) => {
   const cloudUrl = "http://api.cloudinary.com/v1_1/dcane9asx/upload";
   const formData = new FormData();
   formData.append("upload_preset", "users-sprint2");
   formData.append("file", file);

   const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
   });

   const cloudResp = await resp.json();
   return cloudResp.secure_url;
};
