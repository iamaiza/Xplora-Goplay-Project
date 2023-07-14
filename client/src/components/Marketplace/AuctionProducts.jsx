import React from "react";
import AuctionCards from "../../UI/Marketplace/AuctionCards";
import { ExclaimationIcon } from "../../icons/DashboardBodyIcons";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const AuctionProducts = () => {
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
        <div className="tw-mt-14">
            <div className="tw-flex tw-gap-3 tw-mb-7">
                <h1 className="tw-text-[2.2rem] max-lg:tw-text-3xl max-sm:tw-text-[1.17rem] max-sm:tw-leading-normal tw-tracking-wide">
                    Popular Auction Products
                </h1>
                <div className="tw-w-8 tw-h-8 max-sm:tw-w-5 max-sm:tw-h-4 max-sm:tw-mt-1.5 tw-rotate-180">
                    <ExclaimationIcon />
                </div>
            </div>
            <Slider {...settings}>
                <AuctionCards
                    timeline="12&nbsp;days&nbsp;04h&nbsp;24m&nbsp;39s"
                    prodImgSrc="https://media.bidjs.com//image/upload/v1688321076/production/1e712c4e0190211eebdcae98966c1b94c_o0wpfk"
                    prodFirstName="XGO3 Watch Strap -"
                    prodLastName="Orange"
                    prodPrice="440"
                    userImg1="https://s3.eu-central-1.amazonaws.com/kids360uc/7044692c8e4bf9a8cad351f524f93ef8"
                    userImg2="https://s3.eu-central-1.amazonaws.com/kids360uc/580291422a4abe44b006cd65d85b1796"
                    userImg3="https://s3.eu-central-1.amazonaws.com/kids360uc/7044692c8e4bf9a8cad351f524f93ef8"
                    totalBids="8 bids"
                />
                <AuctionCards
                    timeline="4&nbsp;days&nbsp;14h&nbsp;37m&nbsp;10s"
                    prodImgSrc="https://media.bidjs.com//image/upload/v1688313732/production/1cd905fc018f111eeb206b1dd3126ce61_ibo3px"
                    prodFirstName="Giant Mikado Pick Up"
                    prodLastName="Sticks Game"
                    prodPrice="2013"
                    userImg1="https://s3.eu-central-1.amazonaws.com/kids360uc/fd49b6355e71f376980df6ebd1afc149"
                    userImg2="https://s3.eu-central-1.amazonaws.com/kids360uc/6091579bebd55c3acc1580e3939972d4"
                    userImg3="https://images.unsplash.com/photo-1688407508654-c6d7ef11bcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                    totalBids="7 bids"
                />
                <AuctionCards
                    timeline="4&nbsp;days&nbsp;13h&nbsp;37m&nbsp;5s"
                    prodImgSrc="https://media.bidjs.com//image/upload/v1688319845/production/1097ceae0190011eeb206b1dd3126ce61_rhzngi"
                    prodFirstName="X6Play Wrist Strap -"
                    prodLastName="Energy"
                    prodPrice="506"
                    userImg1="https://s3.eu-central-1.amazonaws.com/kids360uc/2390e9e46adee9f79d756e40552efdf1"
                    userImg2="https://s3.eu-central-1.amazonaws.com/kids360uc/default_icon.png"
                    userImg3="https://images.unsplash.com/photo-1686077304557-d13e1b91ac06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    totalBids="17 bids"
                />
                <div className="slick-slide tw-bg-[#efefef] tw-rounded-2xl tw-w-full tw-h-[476.39px]">
                    <Link to="/auction" className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
                        +View All 69
                    </Link>
                </div>
            </Slider>
        </div>
    );
};

export default AuctionProducts;
