import MainCont  from "../../mainCategory/mainCategory.component";
import { Outlet } from "react-router-dom";

const Home = ()=>{

    const productData = [
        {
          "id": 1,
          "title": "hats",
          "imageUrl": "https://user-images.githubusercontent.com/77974484/173227879-69fb96b1-5947-4423-867c-f77b87439563.jpeg"
        },
        {
          "id": 2,
          "title": "jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          "id": 3,
          "title": "sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          "id": 4,
          "title": "womens",
          "imageUrl": "https://www.jewelryshoppingguide.com/wp-content/uploads/2019/08/types-of-indian-jewelry-and-how-to-wear-them.jpeg"
        },
        {
          "id": 5,
          "title": "mens",
          "imageUrl": "https://tamil.samayam.com/photo/msid-91485197,imgsize-27712/pic.jpg"
        }
      ]
      return (
        <>
        <MainCont productData={productData}/>
        <Outlet/>
        </>
        
      );


}

export default Home