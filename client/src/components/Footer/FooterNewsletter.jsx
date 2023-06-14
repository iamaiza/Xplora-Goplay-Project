import React from "react";
import "./FooterNewsletter.css";

const FooterNewsletter = () => {
    return (
        <div className="flex mx-44 gap-5 mt-16 newsletter-section">
            <div>
                <h1 className="text-6xl">Newsletter</h1>
                <p className="text-xl mt-2 text-[#707070] newsletter-text">
                    UPDATE ON NEW PRODUCTS AND EXCLUSIVE OFFERS.
                </p>
            </div>
            <form className="mt-8 ml-44 form">
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
