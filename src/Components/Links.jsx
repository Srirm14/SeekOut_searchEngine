import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
    // {
    //     url: "/test",
    //     field: "Test",
    // },
    {
        url: "/search",
        field: "All",
    },
    {
        url: "/news",
        field: "News",
    },
    {
        url: "/images",
        field: "Images",
    },
    {
        url: "/videos",
        field: "Videos",
    },
];

const Links = () => {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className="flex justify-start gap-10 links ml-[80px] dark:bg-dark-800 ">
            {links.map((data, index) => (
                <Link
                    to={data.url}
                    key={index}
                    className={
                        location.pathname === data.url
                            ? "font-Poppins text-sm text-teal-400 focus:text-teal-900"
                            : "font-Poppins text-sm text-gray-400 hover:text-teal-400 focus:text-teal-900"
                    }
                >
                    <span>{data.field}</span>
                </Link>
            ))}
        </div>
    );
};

export default Links;
