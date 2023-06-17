import React from "react";
import "./Section-2.css";
import SectionImages from "./Section-Images";

const Section2 = () => {
    return (
        <section className="bg-white h-full pb-14 premium-section">
            <SectionImages />
            <div className="mt-12 px-2">
                <h1 className="font-bold text-center text-[4.5rem] leading-none text-[#6149cd]">
                    Move more to play more
                </h1>
                <h1 className="m-heading font-bold text-center text-[4.5rem] leading-tight mt-5 text-[#f9a825]">
                    with Xplora Premium!
                </h1>
                <ul className="max-w-[50rem] w-full mx-auto text-left mt-8">
                    <li className="flex items-center mb-6">

                        <figure className="w-9 h-9">
                            <img src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png" alt="" />
                        </figure>
                        
                        <span className="text-xl ml-5 flex-1">
                            Fun ringtones and watch faces
                        </span>
                    </li>
                    <li className="flex items-center mb-6">

                        <figure className="w-9 h-9">
                            <img src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png" alt="" />
                        </figure>
                        
                        <span className="text-xl ml-5 flex-1">
                            Amazing facts and tools for curious minds with new
                            subjects added every month
                        </span>
                    </li>
                    <li className="flex items-center mb-6">

                        <figure className="w-9 h-9">
                            <img src="https://goplay.myxplora.com/_nuxt/img/xcoin-small.918e028.png" alt="" />
                        </figure>
                        
                        <span className="text-xl ml-5 flex-1">
                            Exclusive Adventures with great prizes!
                        </span>
                    </li>
                </ul>

                <div className="max-w-[64rem] w-full mx-auto h-full relative">
                    <div className="flex items-center justify-center">
                        <div className="text-center w-screen">
                            <h2 className="text-[3.2rem] leading-none font-bold text-[#f9a825]">Get the most out of</h2>
                            <h2 className="m-heading text-[3.2rem] leading-none font-bold mt-5">your Xplora watch!</h2>
                        </div>
                        <figure className="watch-img h-full w-full max-[1275px]:w-[70%] max-[850px]:w-full">
                            <img className="w-full h-full object-cover" src="https://goplay.myxplora.com/_nuxt/img/get-the-most.0de3279.webp" alt="" />
                        </figure>
                    </div>
                </div>
                <div className="max-w-[60rem] w-full h-full mx-auto premium-table_container">
                    <figure>
                        <img className="w-full h-full object-cover" src="https://goplay.myxplora.com/_nuxt/img/gb.b389911.png" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Section2;
