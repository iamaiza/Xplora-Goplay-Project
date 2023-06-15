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
        <div className="main-form w-full h-full pt-32 overflow-x-hidden">
            <div className="mx-10 login-form-container">
                <h2 className="text-[27px] ml-5">Log in</h2>
                <div className="span-container relative mt-10 py-[0.55rem] text-xl bg-[#ffc6bb] w-fit rounded-full cursor-default">
                    <span
                        className={`py-3 px-7 rounded-full text-color ${
                            activeTab === "mobile" ? "active" : ""
                        }`}
                        onClick={handleMobileClick}
                    >
                        Mobile&nbsp;Number
                    </span>
                    <span
                        className={`py-3 px-7 rounded-full text-color ${
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

