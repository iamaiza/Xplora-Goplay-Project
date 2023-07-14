import React from "react";
import { ChevronDownIcon } from "../../icons/DashboardSidebarIcons";

const GraphList = ({className}) => {
    return (
        <div className={`tw-text-sm tw-flex tw-items-center tw-gap-x-2 tw-text-[#6149cd] ${className}`}>
            <span>Today</span>
            <div className="tw-stroke-[#6149cd] tw-w-[0.8rem] tw-h-[0.8rem]">
                <ChevronDownIcon />
            </div>
        </div>
    );
};

export default GraphList;
