import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdventureList = ({ imgUrl, title, startDate, endDate, className }) => {
    return (
        <div className={`tw-bg-gray-200 max-lg:tw-bg-transparent boxShadow tw-h-full tw-rounded-3xl tw-overflow-hidden max-lg:tw-p-4 ${className}`}>
            <Link className="tw-flex tw-items-center tw-gap-x-10 max-lg:tw-flex-col">
                <div className="max-lg:tw-w-full">
                    <figure className="tw-w-[18rem] max-lg:tw-w-full">
                        <img className="tw-w-full tw-h-full tw-object-cover tw-rounded-r-3xl" src={imgUrl} alt="" />
                    </figure>
                </div>
                <div className="max-lg:tw-w-full">
                    <h1 className="tw-text-3xl max-lg:tw-text-xl tw-mt-3">{title}</h1>
                    <div className="tw-flex tw-items-center tw-gap-x-5 tw-mt-5 max-lg:tw-flex-col">
                        <div className="tw-text-lg max-lg:tw-w-full max-sm:tw-text-base -tw-ml-1">
                            <span className="tw-text-[#6149cd] tw-font-bold">Start Date: </span>
                            {startDate}
                        </div>
                        <div className="tw-text-lg max-lg:tw-w-full max-sm:tw-text-base">
                            <span className="tw-text-[#6149cd] tw-font-bold">End Date: </span>
                            {endDate}
                        </div>
                    </div>
                    <Button className="btn-bg tw-border-none tw-text-sm tw-mt-12 tw-mb-3 tw-py-4 tw-w-64 max-lg:tw-w-full tw-rounded-[1.4rem]">Learn more</Button>
                </div>
            </Link>
        </div>
    );
};

export default AdventureList;
