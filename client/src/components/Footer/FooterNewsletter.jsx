import React from "react";
import "./FooterNewsletter.css";

const FooterNewsletter = () => {
    return (
        <div className="flex mx-44 gap-5 max-[1400px]:gap-2 mt-16 newsletter-section max-[768px]:flex-col max-[450px]:mx-6">
            <div>
                <h1 className="text-6xl max-[768px]:text-[30px]">Newsletter</h1>
                <p className="text-xl mt-2 text-[#707070] w-[25rem] max-[960px]:w-full max-[450px]:text-[17px]">
                    UPDATE ON NEW PRODUCTS AND EXCLUSIVE OFFERS.
                </p>
            </div>
            <form className="mt-8 ml-44 w-[33rem] max-[1400px]:ml-0 max-[768px]:w-full">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border border-[rgba(255,255,255,0.3)] rounded-full py-[0.9rem] px-8 text-xl mb-9 hover:outline hover:outline-1 outline-white hover:border-white"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border border-[rgba(255,255,255,0.3)] rounded-full py-[0.9rem] px-8 text-xl mb-9 hover:outline hover:outline-1 outline-white hover:border-white"
                />
                <button className="disable-btn w-full text-xl text-[#222] py-[0.9rem] px-3 rounded-full">Submit</button>
            </form>
        </div>
    );
};

export default FooterNewsletter;
