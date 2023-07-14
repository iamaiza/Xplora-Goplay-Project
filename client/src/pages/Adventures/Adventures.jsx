import React, { useEffect, useState } from "react";
import DashboardHeader from "../../UI/MainUI/DashboardHeader";
import DashboardSidebar from "../../UI/MainUI/DashboardSidebar";
import { ExclaimationIcon, SortIcon } from "../../icons/DashboardBodyIcons";
import AdventureList from "../../UI/Adventures/AdventureList";
import { useCookies } from "react-cookie";

const Adventures = () => {
    const defaultImg = "https://goplay.myxplora.com/_nuxt/img/campaign-goldrush-desktop.570c559.png"
    const responsiveImg = "https://goplay.myxplora.com/_nuxt/img/campaign-banner-img.237ff09.png"
    const [img, setImg] = useState(defaultImg)
    const [cookie, setCookie] = useCookies(["adventureImg"])

    useEffect(() => {
        if(cookie.adventureImg) {
            setImg(cookie.adventureImg)
        }
        window.addEventListener("resize", changeImageHandler)

        return () => {
            window.removeEventListener("resize", changeImageHandler)
        }
    }, [])

    const changeImageHandler = () => {
        if(window.innerWidth <= 1024) {
            const newImage = responsiveImg
            setCookie("adventureImg", newImage)
            setImg(responsiveImg)
        } else {
            const newImage = defaultImg
            setCookie("adventureImg", newImage)
            setImg(defaultImg)
        }
    }

    return (
        <div>
            <DashboardHeader />
            <div className="tw-flex">
                <DashboardSidebar
                    className="tw-h-screen tw-px-3 max-xl:tw-hidden"
                    position="tw-right-0 tw-top-0"
                />

                <div className="tw-pt-36 max-xl:tw-pt-28 max-sm:tw-pt-[6.5rem] tw-px-10 max-sm:tw-px-4 tw-w-full tw-max-h-screen tw-h-full tw-overflow-y-auto tw-pb-7">
                    <div
                        className="tw-flex tw-items-center tw-justify-between tw-gap-x-9 tw-py-4 max-sm:tw-py-3 tw-rounded-3xl tw-w-full"
                        style={{
                            background:
                                "linear-gradient(81deg,#754bef 2%,#5675f4 19%,#cb7ae6 98%)",
                        }}
                    >
                        <h1 className="tw-text-[2rem] tw-text-white max-lg:tw-text-base max-md:tw-text-sm tw-pl-7 max-sm:tw-pl-6 tw-leading-normal adventure-heading max-xl:tw-text-lg">
                            Welcome to Xplora Adventures
                        </h1>
                        <figure>
                            <img
                                src={img}
                                alt=""
                            />
                        </figure>
                    </div>
                    <div className="tw-flex tw-justify-between tw-items-center tw-gap-3 tw-mt-11">
                        <div className="tw-flex tw-items-center tw-gap-x-4 max-sm:tw-gap-x-2">
                            <h1 className="tw-text-4xl max-sm:tw-text-xl">All Adventures</h1>
                            <div className="-tw-mt-1 max-lg:-tw-mt-2 max-sm:tw-mt-0">
                                <ExclaimationIcon className='tw-w-8 tw-h-8 tw-rotate-180 max-sm:tw-w-5 max-sm:tw-h-5' />
                            </div>
                        </div>
                        <div className="tw-flex tw-items-center">
                            <div>
                                <SortIcon />
                            </div>
                            <p className="tw-text-[1.55rem] max-sm:tw-text-base">Sort</p>
                        </div>
                    </div>

                    <div className="tw-mt-6 max-sm:tw-mt-4">
                        <AdventureList className="tw-mb-7" imgUrl="https://xplora-images.s3.eu-central-1.amazonaws.com/180543b90fed011edb8dabd9b489f3439.png" title="Africa Expedition" startDate="31/05/2023" endDate="27/06/2023" />
                        <AdventureList className='tw-mb-7' imgUrl="https://xplora-images.s3.eu-central-1.amazonaws.com/14fce65c0d77711ed858ba1f182701b4b.png" title="Planet Adventure" startDate="26/04/2023" endDate="30/05/2023" />
                        <div className="tw-relative tw-h-full">
                            <AdventureList className='tw-mb-7' imgUrl="https://xplora-images.s3.eu-central-1.amazonaws.com/18b074730b2b811ed858ba1f182701b4b.png" title="Walk the wonders of the World" startDate="01/03/2023" endDate="01/04/2023" />
                            <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-[rgba(0,0,0,0.5)] tw-rounded-3xl">
                                <div className="tw-bg-black tw-w-fit tw-mx-auto tw-text-white tw-py-1.5 tw-px-4 tw-rounded-full tw-text-sm">Ended in 01/04/2023</div>
                            </div>
                        </div>
                        <div className="tw-relative tw-h-full">
                            <AdventureList imgUrl="https://xplora-images.s3.eu-central-1.amazonaws.com/dino_disc_ListTileDesktop.png" title="Dinosaur Discovery" startDate="01/02/2023" endDate="06/03/2023" />
                            <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-[rgba(0,0,0,0.5)] tw-rounded-3xl">
                                <div className="tw-bg-black tw-w-fit tw-mx-auto tw-text-white tw-py-1.5 tw-px-4 tw-rounded-full tw-text-sm">Ended in 06/03/2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adventures;
