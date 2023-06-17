import React from "react";
import "./FooterLinks.css";
import {
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon,
} from "../../icons/FooterIcons";
import { Link } from "react-router-dom"

const FooterLinks = () => {
    return (
      <div className="px-6 mt-48 max-[768px]:mt-36">
        <div className="flex justify-between items-end max-[768px]:items-center max-[768px]:flex-col max-[768px]:justify-center">
          <div className="item-1 flex gap-2 ml-12 max-[990px]:ml-0">
            <figure className="w-36 max-[960px]:hidden">
              <img
                className="w-full object-cover"
                src="https://goplay.myxplora.com/_nuxt/img/xplora-logo.98b33b7.png"
                alt=""
              />
            </figure>
            <div className="footer_list ml-56 -mt-[4.6rem] max-[768px]:mt-0">
              <p className="text-2xl opacity-40 mb-8">MENU</p>
              <ul>
                <li className="text-xl pb-5">About</li>
                <li className="text-xl pb-5">Dashboard</li>
                <li className="text-xl pb-5">Adventures</li>
                <li className="text-xl pb-5">Marketplace</li>
                <li className="text-xl pb-5">Contact</li>
              </ul>
            </div>
          </div>
          <div className="item-2 flex gap-4 max-[768px]:mt-16">
            <Link to="https://www.youtube.com/channel/UCsIfl3PccNIWXwgtyr6NHrA/featured" target="_blank" className="bg-[#E5310E] w-14 h-14 flex justify-center items-center rounded-full">
              <YoutubeIcon />
            </Link>
            <Link to="https://www.instagram.com/xplora_uk/" target="_blank" className="bg-[#E5310E] w-14 h-14 flex justify-center items-center rounded-full">
              <InstagramIcon />
            </Link>
            <Link to="https://www.facebook.com/myxplorauk" target="_blank" className="bg-[#E5310E] w-14 h-14 flex justify-center items-center rounded-full">
              <FacebookIcon />
            </Link>
          </div>
        </div>

        <div className="copyright mt-14 flex justify-between gap-4">
          <article className="text-xl copyright-text opacity-50 flex items-center gap-2 flex-1 max-[990px]:flex-none">
            <span>© 2022 Xplora Technologies AS.</span>
            <span>All rights reserved.</span>
          </article>
          <article className="flex items-center justify-end gap-7 flex-1 copyright-text-2">
            <span>Xplora EULA</span>
            <span>Privacy Policy</span>
          </article>
        </div>
      </div>
    );
};

export default FooterLinks;
