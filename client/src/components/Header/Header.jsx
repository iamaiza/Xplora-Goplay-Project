import React from "react";
import "./Header.css"
import { Link } from "react-router-dom"
import Logo from "../../UI/MainUI/Logo";

const Header = () => {
    return (
        <header className="header-bg tw-px-3 tw-py-1 sm:tw-py-3 tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-z-20 ">
            <div className="tw-flex tw-justify-between tw-items-center tw-gap-3">
                <Logo classname='max-[1265px]:tw-hidden' logosize='tw-w-8 tw-h-8 sm:tw-w-11 sm:tw-h-11' />
                <div className="tw-flex tw-items-center tw-gap-9">
                    <Link to="/login" className="tw-border tw-text-white tw-px-6 tw-py-3 sm:tw-px-7 sm:tw-py-4 tw-rounded-lg tw-text-sm hover:tw-bg-white hover:tw-bg-opacity-10">Login</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;


// tw-w-10 tw-h-10 sm:tw-w-14 sm:tw-h-14