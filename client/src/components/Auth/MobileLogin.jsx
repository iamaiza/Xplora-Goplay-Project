import React, { useState } from "react";
// import IntlTelInput from 'react-intl-tel-input';
// import 'react-intl-tel-input/dist/main.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./Login.css";

const MobileLogin = ({ isVisible }) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    return (
        <form
            className={`form mt-14 min-(1025px):mt-20 absolute top-0 w-full transition-all duration-300 ease-in-out ${
                isVisible ? "left-0" : "-left-full"
            }`}
            style={{ visibility: isVisible ? "visible" : "hidden" }}
        >
            <div className="login-form flex gap-x-8 w-[50rem] max-[1450px]:w-full">
                <div className="border flex-1 text-xl rounded-3xl w-full py-4 min-[1025px]:py-4 px-4">
                    <PhoneInput
                        country={'us'}
                        value={phoneNumber}
                        onChange={value => setPhoneNumber(value)}
                        inputStyle={{ border: 0 }}
                    />
                </div>

                <div className="border flex-1 text-xl rounded-3xl w-full py-4 min-[1025px]:py-5 px-4">
                    <input
                        type="password"
                        placeholder="Password"
                        className="focus:outline-0 w-full"
                    />
                </div>
            </div>
            <div className="remember-me mt-16 flex items-center gap-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-xl">Remember me</span>
            </div>
            <button className="mt-12 py-6 px-2 max-w-[22rem] w-full login-btn text-white text-xl rounded-3xl">
                Login
            </button>
        </form>
    );
};

export default MobileLogin;
