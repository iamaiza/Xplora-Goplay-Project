import { useState } from "react";
import MobileLogin from "./MobileLogin";
import EmailLogin from "./EmailLogin";
import "./Login.css"

const Login = () => {
    const [activeTab, setActiveTab] = useState("mobile");

    const handleMobileClick = () => {
        setActiveTab("mobile");
    };

    const handleEmailClick = () => {
        setActiveTab("email");
    };

    return (
        <div className="main-form w-full h-full pt-32 overflow-x-hidden mb-5">
            <div className="mx-10 login-form-container">
                <h2 className="text-xl leading-none min-(1025px):text-2xl ml-5">Log in</h2>
                <div className="span-container mt-10 py-2 h-10 min-(1025px):h-11 text-base min-(1025px):text-xl bg-[#ffc6bb] w-fit rounded-full cursor-default">
                    <span
                        className={`h-full py-2.5 px-7 rounded-full text-color ${
                            activeTab === "mobile" ? "active" : ""
                        }`}
                        onClick={handleMobileClick}
                    >
                        Mobile&nbsp;Number
                    </span>
                    <span
                        className={`h-full py-2.5 px-7 rounded-full text-color ${
                            activeTab === "email" ? "active" : ""
                        }`}
                        onClick={handleEmailClick}
                    >
                        Email&nbsp;Address
                    </span>
                </div>
                <div className="flex relative">
                    <MobileLogin isVisible={activeTab === "mobile"} />
                    <EmailLogin isVisible={activeTab === "email"} />
                </div>
            </div>
        </div>
    );
};

export default Login;

