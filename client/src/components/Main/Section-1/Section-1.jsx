import React from "react";
import "./Section-1.css"
import Adventures from "./Adventures";

const Section1 = () => {
    return (
        <section className="motion-section text-white pt-24 pb-12 px-5">
            <div className="grid-section gap-x-7 px-5">
                <div className="flex grid-item-1">
                    <div>
                        <div className="box w-52 h-32 p-5 rounded-3xl mb-4">
                            <h2 className="text-4xl">745k+</h2>
                            <p className="text-xl mt-3">Registered users</p>
                        </div>
                        <div className="box w-52 h-32 p-5 rounded-3xl">
                            <h2 className="text-3xl">100 billion</h2>
                            <p className="text-xl mt-2">Steps per month</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center pt-2">
                        <div className="box w-64 h-44 rounded-3xl p-3 flex justify-center items-center flex-col z-10 -ml-1.5">
                            <div>
                                <h2 className="text-4xl">3.3 billion</h2>
                                <p className="text-xl mt-2">Steps per day</p>
                            </div>

                        </div>
                            <small className="mt-3">
                                *Average statistics as of September 2022.
                            </small>
                    </div>
                </div>
                <div className="w-full grid-item-2 px-16">
                    <h2 className="text-5xl mb-7 ">Set your kids in motion</h2>
                    <p className="text-xl">
                        Xplora rewards activity and inspires kids to get out of
                        the couch and jump into the real world - leading to a
                        more active and healthy everyday life!
                    </p>
                    <p className="text-xl mt-5">
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
