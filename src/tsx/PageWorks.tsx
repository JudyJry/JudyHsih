/// <reference types="react-scripts" />
import React from "react";
import { Link } from "react-router-dom";

export default function PageWorks(): JSX.Element {
    return (
        <div className="PageWorks position-absolute top-50 start-50 translate-middle page">
            <div className="PageWorks-flex d-flex flex-column">
                <h1 className="title">Project</h1>
            </div>
        </div>
    );
}

function WorkListItem(props: React.PropsWithChildren<{ link: string, name: string, tag: string }>): JSX.Element {
    return (
        <Link to={props.link} className="workList-item">
            <img src="{}" alt="" />
            <h2 className="item-name">{props.name}</h2>
            <p className="item-tag">{props.tag}</p>
        </Link>
    );
}