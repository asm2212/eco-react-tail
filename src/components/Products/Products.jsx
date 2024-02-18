import React from 'react';
import { FaStar } from "react-icons/fa";
import Pimag from '../../assets/Pimag.jpg';
import Pimag1 from '../../assets/Pimag1.jpg';
import Pimag2 from '../../assets/Pimag2.jpg';
import Pimag3 from '../../assets/Pimag3.jpg';
import Pimag4 from '../../assets/Pimag4.jpg';
import Pimag5 from '../../assets/Pimag5.jpg';

const ProductsData = [
  {
    id: 1,
    img: Pimag,
    title: "Printed T-shirt",
    rating: 5.0,
  },
  {
    id: 2,
    img: Pimag1,
    title: "Women Western Dress",
    rating: 4.5,
  },
  {
    id: 3,
    img: Pimag2,
    title: "Goggles",
    rating: 4.7,
  },
  {
    id: 4,
    img: Pimag3,
    title: "Women Ethnic Wear",
    rating: 4.4,
  },
  {
    id: 5,
    img: Pimag4,
    title: "Fashion Accessories",
    rating: 4.5,
  },
  {
    id: 6,
    img: Pimag5,
    title: "Casual Shoes",
    rating: 4.2,
  },
];

const Products = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-4" data-aos="fade-up">Top Selling Products</h2>
      <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {ProductsData.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden" data-aos="fade-up">
            <img src={product.img} alt={`Image of ${product.title}`} className="w-full h-64 object-cover object-center" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className={`text-primary ${product.rating >= index + 1 ? "text-primary" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-300">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
