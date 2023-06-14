import React from "react";
import "./Section-2.css"

const SectionImages = () => {
    return (
        <div className="flex items-center justify-center gap-5 flex-wrap py-3">
            <div className="w-div">
                <figure>
                    <img
                        className="w-full h-full object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/smartwatches.e64d29d.png"
                        alt=""
                    />
                </figure>
                <figcaption className="text-center text-xl">Watch Faces</figcaption>
            </div>
            <div className="w-div">
                <figure>
                    <img
                        className="w-full h-full object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/music.a1367c8.png"
                        alt=""
                    />
                </figure>
                <figcaption className="text-center text-xl">Ringtones</figcaption>
            </div>
            <div className="w-div">
                <figure>
                    <img
                        className="w-full h-full object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/campaign.9653aba.png"
                        alt=""
                    />
                </figure>
                <figcaption className="text-center text-xl">Adventures</figcaption>
            </div>
            <div className="w-div">
                <figure>
                    <img
                        className="w-full h-full object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/books.a28146b.png"
                        alt=""
                    />
                </figure>
                <figcaption className="text-center text-xl">eBooks</figcaption>
            </div>
            <div className="w-div">
                <figure>
                    <img
                        className="w-full h-full object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/games.dcd1623.png"
                        alt=""
                    />
                </figure>
                <figcaption className="text-center text-xl">Games</figcaption>
            </div>
            <div className="w-div">
                <figure>
                    <img
                        className="w-full h-full object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/golearn.3cbaaf7.png"
                        alt=""
                    />
                </figure>
                <figcaption className="text-center text-xl">eLearning</figcaption>
            </div>
            <div className="w-div">
                <figure>
                    <img
                        className="w-full h-full object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/auction.6a79c33.png"
                        alt=""
                    />
                </figure>
                <figcaption className="text-center text-xl">Auction</figcaption>
            </div>
            <div className="w-div">
                <figure>
                    <img
                        className="w-full h-full object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/prizes.6fafa8b.png"
                        alt=""
                    />
                </figure>
                <figcaption className="text-center text-xl">Prizes</figcaption>
            </div>
            <div className="w-div">
                <figure>
                    <img
                        className="w-full h-full object-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/coins.40a838b.png"
                        alt=""
                    />
                </figure>
                <figcaption className="text-center text-xl">Coins</figcaption>
            </div>
        </div>
    );
};

export default SectionImages;
