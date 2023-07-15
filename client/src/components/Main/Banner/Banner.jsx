import React, { useState, useEffect } from "react";
import "./Banner.css";

const Banner = () => {
    const bannerContentQueries =
        "max-xl:tw-pt-28 max-lg:tw-pl-4 max-lg:tw-pt-36 max-[900px]:tw-pt-28 max-sm:tw-pt-36 max-sm:tw-text-center max-sm:tw-px-4";
    const headingQueries =
        "max-lg:tw-text-[1.7rem] max-sm:tw-text-[1.55rem] max-sm:tw-w-full";
    return (
        <section className="banner-section tw-max-h-screen tw-h-full max-[500px]:tw-h-[97vh] max-[385px]:tw-h-full max-[361px]:tw-h-[94vh] tw-mt-[4.9rem] max-lg:tw-mt-[3.4rem] max-sm:tw-mt-0 ">
            <img
                className="tw-w-full tw-h-full tw-object-cover max-sm:tw-hidden"
                src="https://goplay.myxplora.com/_nuxt/img/banner-bg.94b0586.webp"
                alt=""
            />
            <img
                className="tw-w-full tw-h-full tw-object-cover tw-hidden max-sm:tw-block"
                src="https://goplay.myxplora.com/_nuxt/img/banner-bg-mobile.e45f846.webp"
                alt=""
            />
            <div
                className={`tw-text-white tw-w-full tw-h-full tw-pl-16 banner-content tw-absolute tw-top-0 tw-pt-56 ${bannerContentQueries}`}
            >
                <h1
                    className={`tw-text-5xl tw-w-[56%] ${headingQueries}`}
                    style={{ lineHeight: "1.2" }}
                >
                    Join the most exciting activity universe for kids today!
                </h1>
                <p className="tw-text-base tw-my-4  max-[550px]:tw-my-4">
                    Motivate and engage your kids!
                </p>
                <p className="tw-text-base tw-w-[42%] max-lg:tw-w-[55%] max-sm:tw-w-full max-[550px]:tw-my-4">
                    On average Xplora-kids walk over 2500 more steps than others
                    each day. It's made for kids and loved by parents!
                </p>
                <p className="tw-text-3xl tw-my-9 text-font max-lg:tw-text-xl max-lg:tw-mb-4 max-lg:tw-mt-8 max-sm:tw-my-9">
                    Move. Learn. Play.
                </p>
                <button className="tw-bg-[#5AB55E] tw-text-base tw-border-[#5AB55E] tw-py-2.5 sm:tw-py-2.5 tw-px-9 tw-rounded-full btn-shadow tw-cursor-pointer">
                    Let's Go!
                </button>
            </div>
        </section>
    );
};

export default Banner;
