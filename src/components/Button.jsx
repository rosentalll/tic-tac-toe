import React from "react";

export default function Button({ handleClick, label }) {
    return (
        <button className="button" onClick={handleClick}>
            {label}
        </button>
    )
}