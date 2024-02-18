import React from "react";
import { FaStar } from "react-icons/fa";
import Timg1 from "../../assets/Timg1.jpg";
import Timg2 from "../../assets/Timg2.jpg";
import Timg3 from "../../assets/Timg3.jpg";
import Timg4 from "../../assets/Timg4.jpg";

const ProductsData = [
  {
    id: 1,
    img: Timg1,
    title: "Casual Wear",
    description:
      "Upgrade your casual wardrobe with our comfortable and stylish casual wear collection. Perfect for everyday wear, our casual outfits will keep you looking and feeling great.",
  },
  {
    id: 2,
    img: Timg2,
    title: "Printed Shirt",
    description:
      "Make a statement with our vibrant and trendy printed shirts. Whether you're heading to a casual outing or a weekend getaway, our printed shirts will add flair to your look.",
  },
  {
    id: 3,
    img: Timg3,
    title: "Women's Shirt",
    description:
      "Elevate your wardrobe with our chic and versatile women's shirts. From classic button-downs to trendy blouses, we have a wide range of styles to suit every occasion.",
  },
  {
    id: 4,
    img: Timg4,
    title: "Women's Shirt",
    description:
      "Discover the perfect addition to your closet with our collection of women's shirts. With high-quality fabrics and flattering fits, our shirts are designed to enhance your style.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="container mx-auto py-8">

      <div className="text-center mb-8" data-aos="fade-up">
        <p className="text-sm text-primary">Top Rated Products</p>
        <h1 className="text-3xl font-bold">Best Products</h1>
        <p className="text-xs text-gray-400">
          Explore our top-rated products that customers love!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ProductsData.map((data) => (
          <div
            key={data.id}
            className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            data-aos="zoom-in"
          >

            <div className="h-[200px] overflow-hidden">
              <img
                src={data.img}
                alt={data.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-105 duration-300"
              />
            </div>
  
            <div className="p-4 text-center">
    
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-3">
                {data.description}
              </p>
              <button
                className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                onClick={handleOrderPopup}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
