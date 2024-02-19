import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/Foimg.png";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-black">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-16 pt-5">

          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-black">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shop
            </h1>
            <p className="text-black">
              Shop is your go-to destination for discovering unique products
              and amazing deals. We strive to provide an exceptional shopping
              experience to our customers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-black">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3 text-black">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                      key={link.title}
                    >
                      <a href={link.link} className="text-black">{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p className="text-black">DMC Main Campous, Haramaya, Ethiopia</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p className="text-black">+251945906550</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
