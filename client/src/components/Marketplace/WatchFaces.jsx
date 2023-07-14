import React from "react";
import { ExclaimationIcon } from "../../icons/DashboardBodyIcons";
import { Link } from "react-router-dom";
import Cards from "../../UI/Marketplace/Cards";
import Slider from "react-slick";

const WatchFaces = () => {
    const settings = {
        infinite: false,
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    infinite: false,
                    dots: false,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1023,
                settings: {
                    infinite: false,
                    dots: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    infinite: false,
                    dots: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="tw-mt-16">
            <div className="tw-flex tw-gap-3 tw-mb-7">
                <h1 className="tw-text-[2.2rem] max-lg:tw-text-3xl max-sm:tw-text-[1.17rem] tw-tracking-wide">
                    Popular Arcade Games
                </h1>
                <div className="tw-w-8 tw-h-8 max-sm:tw-w-5 max-sm:tw-h-4 max-sm:tw-mt-1.5 tw-rotate-180">
                    <ExclaimationIcon />
                </div>
            </div>
            <Slider {...settings}>
                <Cards
                    className="tw-h-[17rem] tw-relative max-sm:tw-w-72 max-[400px]:tw-w-full tw-mx-auto"
                    imgSrc="https://goplay.myxplora.com/_nuxt/img/watch-frame.4cc16e8.png"
                    imgSrc2="https://xplora-images.s3.eu-central-1.amazonaws.com/GO-WF-007.png"
                    title="Nice Breeze"
                    coins="30"
                    btnText="Get"
                    tag={true}
                />

                <Cards
                    className="tw-h-[17rem] tw-relative max-sm:tw-w-72 max-[400px]:tw-w-full tw-mx-auto"
                    imgSrc="https://goplay.myxplora.com/_nuxt/img/watch-frame.4cc16e8.png"
                    imgSrc2="https://xplora-images.s3.eu-central-1.amazonaws.com/GO-WF-008.png"
                    title="Sunnyside"
                    coins="30"
                    btnText="Get"
                    tag={true}
                />

                <Cards
                    className="tw-h-[17rem] tw-relative max-sm:tw-w-72 max-[400px]:tw-w-full tw-mx-auto"
                    imgSrc="https://goplay.myxplora.com/_nuxt/img/watch-frame.4cc16e8.png"
                    imgSrc2="https://xplora-images.s3.eu-central-1.amazonaws.com/GO-WF-009.png"
                    title="Pinky"
                    coins="30"
                    btnText="Get"
                    tag={true}
                />

                <div className="slick-slide tw-bg-[#efefef] tw-rounded-2xl tw-h-[490.09px]">
                    <Link to="/watch-faces" className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
                        +View All 10
                    </Link>
                </div>
            </Slider>
        </div>
    );
};

export default WatchFaces;
