import React from "react";

// moon icon
export const IconMoon = ({styles}) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style={{ ...styles }}
        >
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="32"
            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
        ></path>
        </svg>
    );
}

// sun icon
export const IconSun = ({styles}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{ ...styles }}
        >
            <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
            ></path>
            <circle
            cx="256"
            cy="256"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="32"
            ></circle>
        </svg>
    );
}

// search icon
export const IconSearch = ({styles}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{...styles}}
            >
            <path
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            ></path>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M338.29 338.29L448 448"
            ></path>
        </svg>
    );
}

// chevron icon
export const IconChevron = ({styles}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            style={{...styles}}
        >
            <path
            fill="#212121"
            d="M4.146 5.646a.5.5 0 01.708 0L8 8.793l3.146-3.147a.5.5 0 01.708.708l-3.5 3.5a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 010-.708z"
            ></path>
        </svg>
    );
}

// arrow icon
export const IconArrow = ({style}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{...style}}
        >
            <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M244 400L100 256l144-144M120 256h292"
            ></path>
        </svg>
    );
}