import React, { useEffect, useState } from "react";
import "./Section-5.css";
import { useCookies } from "react-cookie";

const Section5 = () => {
    const defaultImg = "https://goplay.myxplora.com/_nuxt/img/section-5.77230e6.webp"
    const responsiveImg = "https://goplay.myxplora.com/_nuxt/img/section-5-mobile.518378f.webp"
    const [image, setImage] = useState(defaultImg)
    const [cookies, setCookies] = useCookies(["img"])

    useEffect(() => {
        if(cookies.img) {
            setImage(cookies.img)
        }

        window.addEventListener("resize", handleImageSize)

        return () => {
            window.removeEventListener("resize", handleImageSize)
        }
    }, [])

    const handleImageSize = () => {
        if(window.innerWidth <= 600) {
            const newImage = responsiveImg
            setCookies("img", newImage)
            setImage(responsiveImg)
        } else {
            const newImage = defaultImg
            setCookies("img", newImage)
            setImage(defaultImg)
        }
    }

    return (
        <section className="marketplace-section text-center text-white pt-36 pb-12">
            <div>
                <h1 className="text-6xl mx-32 mb-5 leading-tight">
                    Spend your well earned coins in our massive marketplace!
                </h1>
                <p className="text-[21px] mx-24 mb-6">
                    Activity will be rewarded! The more steps, the more Xplora
                    Coins will fill up their wallet. The coins can be used to
                    play the coolest and best games in the Arcade, get exclusive
                    ringtones and watch faces, and to buy awesome items in the
                    auction!
                </p>
                <p className="text-[21px]">
                    Make the most out of your Xplora Coins now!
                </p>

                <figure className="mt-24">
                    <img
                        src={image}
                        alt=""
                    />
                </figure>
            </div>

            <div className="mt-12 ">
                <h2 className="text-6xl">Prizes and Coins Galore</h2>
                <p className="text-[21px] mx-24 mt-6 mb-24">Win amazing prizes and even more bonus Xplora coins!</p>
                <figure>
                    <img
                        className="w-full h-full object-cover aspect-cover"
                        src="https://goplay.myxplora.com/_nuxt/img/section-6.9e6b182.webp"
                        alt=""
                    />
                </figure>
            </div>
        </section>
    );
};

export default Section5;
