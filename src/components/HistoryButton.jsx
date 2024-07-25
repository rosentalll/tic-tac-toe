import React from "react";

export default function HistoryButton(props) {
    return <button className="history-button" onClick={props.moveThroughtHistory}>{props.label}</button>
}