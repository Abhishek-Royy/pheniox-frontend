import React from "react";
import { NavLink } from "react-router-dom";
import Phenix from "../assets/phenix.png";

const Footer = () => {
  return (
    <>
      <div className=" bg-gradient-to-t from-black to-[#000025] text-white shadow-slate-50 shadow-lg pt-10">
        <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
            <div className="md:w-[316px]">
              <p className="text-[18px] font-medium text-white">
              <div className="flex-shrink-0">
              <NavLink to="/">
                <img src={Phenix} alt="" width={70} />
              </NavLink>
            </div>
              </p>
              <p className="mt-[18px] text-[15px] font-normal text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis ipsam nesciunt ex, a illum non molestias at. Dolor iusto ea sunt a ipsa eveniet accusamus maiores consectetur! Cumque, non?
              </p>
              <div className="mt-[18px]  flex gap-4">
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100033861155295"
                >
                  <img
                    alt="facebook icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                  />
                </a>
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="https://www.instagram.com/itz.abhishek2.o/"
                >
                  <img
                    alt="instagram icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
                  />
                </a>
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="https://x.com/i/flow/login"
                >
                  <img
                    alt="twitter icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
                  />
                </a>
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="https://www.linkedin.com/in/abhishek-roy-4a5244239/"
                >
                  <img
                    alt="inkdin icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                  />
                </a>
                {/* Add similar anchor tags for other social media icons */}
              </div>
            </div>

            <div className="md:w-[316px]">
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.0659 13.5H2.92844L8.36406 8.51719ZM12.7459 7.5L18.25 2.45438V12.5456L12.7459 7.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-gray-400"
                  >
                    phoenix.co12@gmail.com
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-gray-400">
                    Support Email
                  </p>
                </div>
              </div>
              <div className="mt-[23px] flex">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="ml-[18px]">
                  <a
                    href="mailto:help@lorem.com"
                    className="font-Inter text-[14px] font-medium text-gray-400"
                  >
                    Barasat, South 24 Pargana, 700124
                  </a>
                  <p className="font-Inter text-[12px] font-medium text-gray-400">
                    Address
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
              <div>
                <ul>
                  <li className="mt-[15px]">
                    <NavLink
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="mt-[15px]">
                    <NavLink
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      to="/footer/refundPolicy"
                    >
                      Refund Policy
                    </NavLink>
                  </li>
                  <li className="mt-[15px]">
                    <NavLink
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      to="/footer/termCondition"
                    >
                      Terms and conditions
                    </NavLink>
                  </li>
                  <li className="mt-[15px]">
                    <NavLink
                      className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                      to="/footer/privacypolicy"
                    >
                      Privacy policy
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* <div className="mt-6 flex flex-col gap-4 sm:mt-0">
                <p className="text-deutziawhite font-inter text-[18px] font-medium">
                  Download the app
                </p>
                <div className="flex gap-4 sm:flex-col">
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps?hl=en_IN"
                  >
                    <img
                      alt="facebook icon"
                      loading="lazy"
                      width="168"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    />
                  </a>
                  <a
                    className="ml-3 bg-white w-max rounded-lg"
                    target="_blank"
                    href="https://www.apple.com/in/app-store/"
                  >
                    <img
                      alt="facebook icon"
                      loading="lazy"
                      width="145"
                      height="40"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="https://www.pikpng.com/pngl/b/506-5064409_apple-ios-download-on-apple-store-clipart.png"
                    />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          {/* <hr className="mt-[30px] text-red" /> */}
          <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
            <p className="text-[14px] font-normal text-white md:text-[14px]">
              © Copyright 2024 • All rights Reserved •<a href="https://github.com/PhoenixTechCo" target="_blank"> Phoenix Co.</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
