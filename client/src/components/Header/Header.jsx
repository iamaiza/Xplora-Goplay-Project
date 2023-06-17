import React from "react";
import "./Header.css"
import { Link } from "react-router-dom"
import Logo from "../../UI/Logo";

const Header = () => {
    return (
        <header className="header-bg px-2 sm:px-4 py-4 fixed top-0 z-20 w-full">
            <div className="flex justify-between items-center gap-3">
                <Logo />
                <div className="flex items-center gap-9">
                    <Link to="/login" className="border text-white py-2 px-5 sm:py-5 sm:px-9 rounded-lg text-lg hover:bg-white hover:bg-opacity-10">Login</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
