import React from "react";
import "./Section-4.css";

const Section4 = () => {
    return (
        <section className="pt-24 px-20 pb-4 join-premium-section bg-white">
            <figure className="w-full flex justify-center">
                <img
                    src="https://goplay.myxplora.com/_nuxt/img/auction-prizes.ccdb23d.webp"
                    alt=""
                />
            </figure>
            <div className="text-center">
                <h2 className="text-6xl premium-text mt-3">Bid on the most in demand Auction items with Premium</h2>
                <p className="text-xl mt-6 mb-8">
                    Premium auctions are updated regularly with the most
                    in-demand new and exiting gadgets and toys, only available
                    to Xplora premium subscribers.
                </p>
                <button className="bg-[#f9ae45] py-3 max-w-[20rem] w-full px-5 rounded-full text-lg btn-shadow hover:brightness-90">Join Premium today!</button>
            </div>
        </section>
    );
};

export default Section4;
