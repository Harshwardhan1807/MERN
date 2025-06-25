import CreateProductPageComponent from "./components/CreateProductPageComponent";
import axios from "axios";


const createProductApiRequest = async (formInputs) => {
  const { data } = await axios.post("/api/products/admin", { ...formInputs });
  return data;
}
const uploadImagesApiRequest = async (images, productId) => {
  const formData = new FormData();

  Array.from(images).forEach((image) => {
    formData.append("images", image);
  })
  await axios.post("/api/products/admin/upload?productId=" + productId, formData);
}

const uploadImagesCloudinaryApiRequest = async (images, productId) => {
  const url = "https://api.cloudinary.com/v1_1/dselbn4vp/image/upload";
  const formData = new FormData();
  for(let i=0;i<images.length;i++){
    formData.append("file", images[i]);
    formData.append("upload_preset", "MERN stack");
    fetch(url,{
      method: "POST",
      body: formData
    })
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      axios.post("/api/products/admin/upload?cloudinary=true&productId=" + productId, data)
    })
    .catch(err=>{
      console.log(err)
    })
  
  }

}

const AdminCreateProductPage = () => {
  return <CreateProductPageComponent createProductApiRequest={createProductApiRequest} 
  uploadImagesApiRequest={uploadImagesApiRequest} uploadImagesCloudinaryApiRequest={uploadImagesCloudinaryApiRequest}/>;
};

export default AdminCreateProductPage;