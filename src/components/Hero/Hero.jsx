import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../assets/sale.jpg';
import Image2 from '../../assets/shopping.jpg';
import Image3 from '../../assets/women.jpg';

const ImageList = [
  {
    id: 1,
    image: Image1,
    title: "New Sale Event!",
    description: "Get ready for our exclusive sale event with amazing discounts on all products. Limited time offer, so hurry up!"
  },
  {
    id: 2,
    image: Image2,
    title: "Discover New Arrivals!",
    description: "Explore our latest collection of trendy products. From fashion to electronics, we have it all. Shop now and stay up to date!"
  },
  {
    id: 3,
    image: Image3,
    title: "Shop for Women's Fashion!",
    description: "Find the perfect outfit for any occasion. Our women's fashion collection offers a wide range of styles to suit your taste."
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      <div className='w-[700px] h-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
          {ImageList.map((imageItem) => (
            <div key={imageItem.id} className='grid grid-cols-1 sm:grid-cols-2'>
              <div>
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                  <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-5' data-aos="zoom-out">{imageItem.title}</h1>
                  <p className='text-sm' data-aos="fade-up" data-aos-delay="100">{imageItem.description}</p>
                  <div data-aos="fade-up" data-aos-delay="300">
                    <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-5 rounded-full'>
                      Order now
                    </button>
                  </div>
                </div>
              </div>
              <div className='order-1 sm:order-2'>
                <div className='relative z-10' data-aos="zoom-in">
                  <img src={imageItem.image} alt={imageItem.title} className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105-105 lg:scale-125 object-contain mx-auto' />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
