import React from "react";
import "./Banner.css";

const Banner = () => {

    const bannerContentQueries = "max-[767px]:p-5 max-[767px]:text-center max-[550px]:mt-24 max-[1480px]:mt-0 max-[1179px]:-mt-5 max-[970px]:mt-0 max-[970px]:pl-7"
    const headingQueries = "max-[550px]:text-[25px] max-[767px]:w-full max-[1480px]:text-5xl max-[1179px]:text-[35px] max-[970px]:text-[30px]"
    return (
        <section className="banner-section mt-24 max-[767px]:mt-16">
            <div className="banner-img w-full flex justify-center items-center">
                <div className={`text-white w-full pl-20 banner-content -mt-20 ${bannerContentQueries}`}>
                    <h1 className={`text-6xl w-[56%] ${headingQueries}`} style={{ lineHeight: '1.2' }}>
                        Join the most exciting activity universe for kids
                        today!
                    </h1>
                    <p className="text-xl my-4 text-margin max-[550px]:text-[16px] max-[550px]:my-4">
                        Motivate and engage your kids!
                    </p>
                    <p className="text-xl w-[45%] max-[767px]:w-full max-[970px]:text-[16px] max-[550px]:my-4">
                        On average Xplora-kids walk over 2500 more steps
                        than others each day. It's made for kids and loved
                        by parents!
                    </p>
                    <p className="text-4xl my-9 text-margin text-font text-move max-[550px]:text-[21px] max-[550px]:my-4">
                        Move. Learn. Play.
                    </p>
                    <button className="bg-[#5AB55E] text-base sm:text-xl border-[#5AB55E] py-2.5 sm:py-4 px-12 rounded-full btn-shadow cursor-pointer">
                        Let's Go
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
