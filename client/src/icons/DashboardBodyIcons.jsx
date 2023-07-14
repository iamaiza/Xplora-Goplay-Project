const ExclaimationIcon = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            // strokeWidth={3}
            className={className}
        >
            <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
            />
        </svg>
    );
};

const WatchIcon = () => {
    return (
        <svg
            id="SvgjsSvg1011"
            className="tw-w-7 tw-h-7"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.com/svgjs"
        >
            <defs id="SvgjsDefs1012"></defs>
            <g id="SvgjsG1013">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M16.9,8.6L16.9,8.6l-1-5.8c-0.1-0.5-0.5-0.8-1-0.8h-6C8.4,2,8,2.3,7.9,2.8L7,8.6c-1.4,2-1.4,4.7,0,6.8l1,5.8	C8,21.6,8.4,22,8.9,22h6c0.5,0,0.9-0.4,1-0.8l1-5.8C18.3,13.3,18.3,10.6,16.9,8.6z M11.9,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4
	c2.2,0,4,1.8,4,4C15.9,14.2,14.1,16,11.9,16z"
                        fill="#6149cd"
                        className="color000 svgShape"
                    ></path>
                </svg>
            </g>
        </svg>
    );
};

const EditIcon = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
        </svg>
    );
};

const CloseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="tw-w-6 tw-h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
};

const SortIcon = () => {
    return (
        <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className="tw-w-6 tw-h-6"
        >
            <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z" />
            <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
    );
};

const PlayIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="tw-w-24 tw-h-24 tw-fill-white"
        >
            <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export { ExclaimationIcon, WatchIcon, EditIcon, CloseIcon, SortIcon, PlayIcon };
