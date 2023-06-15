import React from "react";
import { Link } from "react-router-dom";
import './Login.css'
import LoginForm from "../../components/Auth/LoginForm";


const Login = () => {
    return (
      <div className="login-page h-screen">
        <div className="login-container h-full flex gap-x-7 relative">
            <div className="flex items-center justify-between absolute top-5 left-2 sm:left-5 right-2 sm:right-5">
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                <Link to="/" className="w-10 h-10 sm:w-14 sm:h-14 rounded-sm overflow-hidden">
                <img className="w-full h-full object-cover" src="https://goplay.myxplora.com/_nuxt/img/xplora-logo.98b33b7.png" alt="" />
              </Link>
              <h1 className="text-xl block sm:text-4xl text-white">
                Xplora
              </h1>

              </div>
              <div className="text-base sm:text-xl text-end mt-2 sm:mt-0 text-white md:text-[#7a86a1]">
              <span>New User?</span>
              <Link to="/signup" className="text-[#ff0000] md:text-[#6149cd] underline">Sign up</Link>
            </div>
            </div>
          <div className="left-side-items px-5 py-6 overflow-hidden">
            <div className="left-item-flex flex flex-col gap-y-7">
              <div className="text-white mt-28 ml-16 stay-active">
                <h1 className="text-3xl mb-3">Stay Active.</h1>
                <h1 className="text-3xl">Play to move the world.</h1>
              </div>
              <div className="mt-32 -ml-12 flex-img-container">
                <figure className="flex-img">
                  <img className="w-full h-full object-cover" src="https://goplay.myxplora.com/_nuxt/img/login-image.c5f08c4.png" alt="" />
                </figure>
              </div>
              
            </div>
          </div>

        <LoginForm />
        </div>
      </div>
    );
};

export default Login;

