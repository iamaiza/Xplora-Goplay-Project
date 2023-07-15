import React from "react";
import "./Section-1.css"
import Adventures from "./Adventures";

const Section1 = () => {

    const smallBoxQueries = "max-lg:tw-w-44 max-sm:tw-w-[11rem] max-sm:tw-h-24"
    const bigBoxQueries = "max-lg:tw-w-52 max-sm:tw-w-[11rem] max-sm:tw-h-[7rem]"
    return (
        <section className="tw-overflow-x-hidden tw-w-full tw-text-white tw-mt-16 max-xl:tw-mt-8 max-sm:tw-mt-7">
            <div className="grid-section tw-w-full tw-gap-x-5 tw-px-5 max-[900px]:tw-px-2 max-sm:tw-px-2 max-sm:tw-text-center">
                <div className="tw-flex grid-item-1">
                    <div>
                        <div className={`box tw-text-left tw-w-44 tw-p-5 tw-rounded-2xl tw-mb-4 ${smallBoxQueries}`}>
                            <h2 className="tw-text-[1.7rem] max-lg:tw-text-2xl max-sm:tw-text-xl">745k+</h2>
                            <p className="tw-text-base max-lg:tw-text-[0.95rem] tw-mt-1 max-sm:tw-text-sm  max-sm:tw-mt-0">Registered users</p>
                        </div>
                        <div className={`box tw-text-left tw-w-44 tw-p-5 tw-rounded-2xl ${smallBoxQueries}`}>
                            <h2 className="tw-text-[1.7rem] max-lg:tw-text-2xl max-sm:tw-text-xl">100 billion</h2>
                            <p className="tw-text-base tw-mt-1 max-sm:tw-text-sm max-sm:tw-mt-0">Steps per month</p>
                        </div>
                    </div>
                    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-pt-2">
                        <div className={`box tw-text-left tw-w-52 tw-h-32 tw-rounded-2xl tw-p-3 tw-flex tw-justify-center tw-items-center -tw-ml-2 ${bigBoxQueries}`}>
                            <div>
                                <h2 className="tw-text-3xl max-sm:tw-text-xl">3.3 billion</h2>
                                <p className="tw-text-base tw-mt-1 max-sm:tw-text-sm max-sm:tw-mt-0">Steps per day</p>
                            </div>

                        </div>
                            <div className="tw-mt-3 tw-text-[0.65rem] max-lg:tw-text-[0.6rem]">
                                *Average statistics as of September 2022.
                            </div>
                    </div>
                </div>
                <div className="tw-w-full grid-item-2 tw-px-14 max-xl:tw-px-2">
                    <h2 className="tw-text-5xl max-lg:tw-text-3xl max-sm:tw-text-2xl tw-mb-7">Set your kids in motion</h2>
                    <p className="tw-text-base">
                        Xplora rewards activity and inspires kids to get out of
                        the couch and jump into the real world - leading to a
                        more active and healthy everyday life!
                    </p>
                    <p className="tw-text-base tw-mt-5">
                        Each week, our users walk more than one billion steps.
                        That's the equivalent of walking around the world once!
                    </p>
                </div>
            </div>
            <Adventures />
        </section>
    );
};

export default Section1;
