import React from 'react';
import BannerImage from '../../assets/banner.jpg';
import { GrSecure } from 'react-icons/gr';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  AOS.init(); 

  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          <div data-aos='fade-right'>
            <img
              src={BannerImage}
              alt='Winter Sale Banner'
              className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-lg'
            />
          </div>
          <div className='flex flex-col justify-center gap-6 sm:pt-0' data-aos='fade-left'>
            <h1 className='text-3xl sm:text-4xl font-bold'>
              Sale: Up to 50% Off
            </h1>
            <p className='text-sm text-gray-500 tracking-wide leading-5'>
              Upgrade your winter wardrobe with our exclusive sale! From cozy
              sweaters to stylish jackets, find everything you need to stay
              warm and fashionable.
            </p>
            <div className='flex flex-col gap-4'>
              <FeatureItem Icon={GrSecure} color='violet' text='Quality Products' delay={100} />
              <FeatureItem Icon={IoFastFood} color='orange' text='Fast Delivery' delay={200} />
              <FeatureItem Icon={GiFoodTruck} color='green' text='Easy Payment Method' delay={300} />
              <FeatureItem Icon={GiFoodTruck} color='yellow' text='Get Offers' delay={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ Icon, color, text, delay }) => {
  return (
    <div className='flex items-center gap-4' data-aos='fade-up' data-aos-delay={delay}>
      <Icon className={`text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-${color}-100 dark:bg-${color}-400`} />
      <p>{text}</p>
    </div>
  );
};

export default Banner;
