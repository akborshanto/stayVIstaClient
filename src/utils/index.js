import axios from "axios";

export  const uploadImage=async (image)=>{

   // const image = form.image.files[0];
    //console.log(name,password,email,files)
    const formData = new FormData();
    formData.append("image", image);

  
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_URL
      }`,
      formData,
      {
        headers: { "content-type": "multipart/form-data" },
      }
    );
    console.log(data.data.display_url);

      return data.data.display_url
}