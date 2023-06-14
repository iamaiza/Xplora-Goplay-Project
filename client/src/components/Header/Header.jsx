import React from "react";
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header-bg px-2 sm:px-4 py-4 fixed top-0 z-20 w-full">
            <div className="flex justify-between items-center gap-3">
                <div className="flex items-center gap-2 sm:gap-4">
                    <Link to="/" className="w-10 h-10 sm:w-14 sm:h-14 rounded-md overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://goplay.myxplora.com/_nuxt/img/xplora-logo.98b33b7.png" alt="" />
                    </Link>
                    <h1 className="text-2xl sm:text-4xl text-white">Xplora</h1>
                </div>
                <div className="flex items-center gap-9">
                    <Link to="/login" className="border text-white py-2 px-5 sm:py-5 sm:px-9 rounded-lg text-lg hover:bg-white hover:bg-opacity-10">Login</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
