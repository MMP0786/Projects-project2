import React from "react";
import img1 from "../assets/1.jpeg";
import { toast } from "react-hot-toast";

// const img1 =
// "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

function Home() {
  const productList = [
    {
      name: "Mac Book",
      price: 1200,
      img: img1,
      id: "39840j",
    },
    {
      name: "Black Shoes",
      price: 140,
      img: img2,
      id: "39840jeiioe",
    },
  ];

  const addToCartHandler = (option) => {
    console.log(option);
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          id={item.id}
          price={item.price}
          handler={addToCartHandler}
          img={item.img}
        />
      ))}
    </div>
  );
}
const ProductCard = ({ name, id, price, handler, img }) => {
  return (
    <div className="productCard">
      <img src={img} alt={name} />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, price, id, Quantity: 1, img })}>
        Add To Cart
      </button>
    </div>
  );
};
export default Home;
