import React from "react";
import "./FooterProducts.css"

const FooterProducts = () => {
    return (
        <>
            <div className="footer-products flex justify-between gap-5 mx-9 text-center">
                <div className="flex-item-1">
                    <h1 className="text-6xl">Xplora App</h1>
                    <p className="text-xl mt-8 mb-24 w-[40rem] mx-auto leading-normal">
                        Use smart watches (Apple, fitbit or similar) or simply
                        use your smartphone to join.
                    </p>
                    <div className="flex justify-around gap-5 mb-12">
                        <figure className="app-link">
                            <img
                                className="w-full object-cover"
                                src="https://goplay.myxplora.com/_nuxt/img/get-on-app-store.be4d804.png"
                                alt=""
                            />
                        </figure>
                        <figure className="app-link">
                            <img
                                className="w-full object-cover"
                                src="https://goplay.myxplora.com/_nuxt/img/get-on-google-play.9048527.png"
                                alt=""
                            />
                        </figure>
                    </div>
                    <figure className="">
                        <img
                            className="w-full h-full object-cover"
                            src="https://goplay.myxplora.com/_nuxt/img/xplora-app.bc1d1a0.webp"
                            alt=""
                        />
                    </figure>
                </div>
                <div className="card-container">
                    <h1 className="text-6xl">Xplora Products</h1>
                    <p className="text-xl mt-8 mb-32 w-[40rem] mx-auto leading-normal">
                        Our products are the most awarded, trusted and
                        recognised in the market today.
                    </p>
                    <div className="card w-full rounded-3xl px-5 pb-5">
                        <figure className="w-[60%] mx-auto relative card-img">
                            <img
                                className="w-full object-cover"
                                src="https://goplay.myxplora.com/_nuxt/img/products.c4afdfe.webp"
                                alt=""
                            />
                        </figure>
                        <h2 className="text-4xl -mt-16 mb-5">
                            See the latest smart watches
                        </h2>
                        <button className="bg-[#1a237e] py-4 px-4 max-w-[10rem] w-full rounded-full text-lg ">
                            View
                        </button>
                    </div>
                </div>
            </div>
            <div className="border mx-32 border-[#444] mt-5 rounded-sm"></div>
        </>
    );
};

export default FooterProducts;
