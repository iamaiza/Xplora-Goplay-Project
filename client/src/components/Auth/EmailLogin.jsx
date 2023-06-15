import React from "react";
import "./Login.css"

const EmailLogin = ({ isVisible }) => {
    return (
        <form className={`form mt-20 absolute top-0 w-full transition-all duration-300 ease-in-out ${isVisible ? "right-0" : "-right-full"}`} style={{ visibility: isVisible ? "visible" : "hidden" }}>
            <div className="login-form flex gap-x-8">
                <div className=" border text-xl rounded-3xl w-full py-6 px-4">
                    <input type="text" placeholder="Email Address" />
                </div>
                <div className="border text-xl rounded-3xl w-full py-6 px-4">
                    <input type="text" placeholder="Password" />
                </div>
            </div>
            <div className="remember-me mt-20 flex items-center gap-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-xl">Remember me</span>
            </div>
            <button className="mt-12 py-6 px-2 max-w-[22rem] w-full login-btn text-white text-xl rounded-3xl">
                Login
            </button>
        </form>
    );
};

export default EmailLogin;
