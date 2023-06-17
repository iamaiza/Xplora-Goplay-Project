import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import Logo from "../../UI/Logo";

const SignUp = () => {
    return (
        <div className="signup-page w-full">
            <div className="pb-24">
                <div className="flex items-center justify-between py-5 px-2 sm:px-5">
                    <Logo />
                    <div className="text-[0.9rem] sm:text-3xl text-end mt-1 sm:mt-0 text-white">
                        <span>Already a User?</span>
                        <Link
                            to="/login"
                            className="text-[#ff0000] underline"
                        >
                            Login
                        </Link>
                    </div>
                </div>

                <div className="signup-text-container mt-24 px-16 text-white">
                    <h1 className="signup-text text-6xl max-w-3xl w-full mx-auto text-center leading-tight">Download and sign up to Xplora App to join Xplora</h1>

                    <figure className="mx-auto w-fit mt-20">
                        <img className="w-full h-full object-cover" src="https://goplay.myxplora.com/_nuxt/img/sign-up-image.32b9ecd.png" alt="" />
                    </figure>

                    <div className="w-fit mx-auto flex gap-x-10 mt-12">
                        <Link to="https://apps.apple.com/gb/app/xplora/id1521983878">
                            <img src="https://goplay.myxplora.com/_nuxt/img/get-on-app-store.be4d804.png" alt="" />
                        </Link>
                        <Link to="https://play.google.com/store/apps/details?id=com.xplora.xplorao2o&hl=en_GB&gl=US">
                            <img src="https://goplay.myxplora.com/_nuxt/img/get-on-google-play.9048527.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
