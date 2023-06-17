import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="flex items-center gap-2 sm:gap-4">
            <Link
                to="/"
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-sm overflow-hidden"
            >
                <img
                    className="w-full h-full object-cover"
                    src="https://goplay.myxplora.com/_nuxt/img/xplora-logo.98b33b7.png"
                    alt=""
                />
            </Link>
            <h1 className="text-2xl sm:text-4xl text-white">Xplora</h1>
        </div>
    );
};

export default Logo;
