import React from "react";
import "./Adventures.css"

const Adventures = () => {
    return (
        <div className="text-center mt-36">
            <h1 className="text-6xl mx-3 section-heading">
                Explore with our awesome monthly adventures!
            </h1>
            <p className="text-xl mt-5 mx-3 section-text">
                Win awesome prizes in tons of different, funny, exciting and
                educational adventures just by walking!
            </p>
            <figure className="mt-12 w-full h-full">
                <img
                    className="w-full h-full object-cover"
                    src="https://goplay.myxplora.com/_nuxt/img/section-2.ae4ba89.webp"
                    alt=""
                />
            </figure>
            <p className="text-xl mt-5 hidden mx-3 section-text">
                Move more to earn plenty of Xplora coins and get ahead on that
                leaderboard with participants from all around the globe!
            </p>
            <button className="bg-white text-black mt-10 py-3 px-2 max-w-[18rem] w-11/12 rounded-full text-lg hover:brightness-95">
                See All Adventures
            </button>
        </div>
    );
};

export default Adventures;
