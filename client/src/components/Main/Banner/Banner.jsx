import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <section className="banner-section mt-24">
            <div className="banner-img w-full flex justify-center items-center">
                <div className="text-white w-full pl-20 banner-content -mt-36">
                    <h1 className="text-6xl leading-tight">
                        Join the most exciting activity universe for kids
                        today!
                    </h1>
                    <p className="text-xl my-4 text-margin">
                        Motivate and engage your kids!
                    </p>
                    <p className="text-xl w-[45%]">
                        On average Xplora-kids walk over 2500 more steps
                        than others each day. It's made for kids and loved
                        by parents!
                    </p>
                    <p className="text-4xl my-9 text-margin text-font">
                        Move. Learn. Play.
                    </p>
                    <button className="bg-[#5AB55E] text-xl border-[#5AB55E] py-4 px-12 rounded-full btn-shadow cursor-pointer">
                        Let's Go
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
