import React from "react";
import Slider from "react-slick";
import DashboardCard1 from "../../UI/DashboardPageCards/DashboardCard1";

const DashboardSlider = () => {
    const settings = {
        infinite: false,
        dots: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    infinite: false,
                    dots: false,
                    speed: 500,
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 350,
                settings: {
                    infinite: false,
                    dots: false,
                    speed: 500,
                    slidesToShow: 1.43,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className="tw-hidden max-lg:tw-block">
        <Slider className="card-shadow tw-px-7 max-sm:tw-px-4 tw-py-8 max-[350px]:tw-py-5 tw-rounded-3xl" {...settings}>
            <DashboardCard1
                className2="tw-w-20 max-[900px]:tw-w-32 max-sm:tw-w-[6.2rem] max-[500px]:tw-w-[4.8rem] max-[350px]:tw-w-11"
                src="https://goplay.myxplora.com/_nuxt/img/library.12f639e.png"
                text1="Library"
                text2="0"
                slider={true}
            />
            <DashboardCard1
                // className1="px-card tw-flex-1 max-lg:tw-flex-none tw-h-[4.5rem] max-lg:tw-h-full tw-border-r"
                className2="tw-w-20 max-[900px]:tw-w-32 max-sm:tw-w-[6.2rem] max-[500px]:tw-w-[4.8rem] max-[350px]:tw-w-11"
                src="https://goplay.myxplora.com/_nuxt/img/wishlist.8039159.png"
                text1="Wishlist"
                text2="0"
                slider={true}
            />
            <DashboardCard1
                // className1="px-card card-border max-lg:tw-border-r tw-flex-1 max-lg:tw-flex-none tw-h-[4.5rem] max-lg:tw-h-full"
                className2="tw-w-20 max-[900px]:tw-w-32 max-sm:tw-w-[6.2rem] max-[500px]:tw-w-[4.8rem] max-[350px]:tw-w-11"
                src="https://goplay.myxplora.com/_nuxt/img/favourites.0d92a7e.png"
                text1="Favourites"
                text2="0"
                slider={true}
            />
            <DashboardCard1
                // className1="tw-border-r tw-flex-1 max-lg:tw-flex-none tw-h-[5.5rem] max-lg:tw-h-full"
                className2="tw-w-20 max-[900px]:tw-w-32 max-sm:tw-w-[6.2rem] max-[500px]:tw-w-[4.8rem] max-[350px]:tw-w-16"
                src="https://goplay.myxplora.com/_nuxt/img/joinedcampaigns.453c113.png"
                text1="Adventures Joined"
                text2="1"
                slider={true}
            />
            <DashboardCard1
                // className1="px-card tw-flex-1 max-lg:tw-flex-none tw-h-[5.5rem] max-lg:tw-h-full"
                className2="tw-w-20 max-[900px]:tw-w-32 max-sm:tw-w-[6.2rem] max-[500px]:tw-w-[4.8rem] max-[350px]:tw-w-12"
                src="https://goplay.myxplora.com/_nuxt/img/auctionhistory.cbc3513.png"
                text1="Auction History"
                text2="3"
                slider={true}
            />
        </Slider>
        </div>
    );
};

export default DashboardSlider;
