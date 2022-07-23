/// <reference types="react-scripts" />
import React from "react";
import { Link } from "react-router-dom";
import cover from "../img/works/leadog/cover.png"

export default function PageWorks(): JSX.Element {
    return (
        <div className="PageWorks position-absolute top-50 start-50 translate-middle page">
            <div className="PageWorks-flex d-flex flex-column">
                <h1 className="title">Project</h1>
                <div className="workList">
                    <WorkListItem
                        link=""
                        name="LEADOG"
                        tag="導盲犬資訊媒合平台"
                        img={cover}
                    ></WorkListItem>
                </div>
            </div>
        </div>
    );
}

function WorkListItem(props: React.PropsWithChildren<{ link: string, name: string, tag: string, img: string }>): JSX.Element {
    return (
        <Link to={props.link} className="workList-item">
            <div className="item-img">
                <img src={props.img} alt="" />
            </div>
            <div className="item-info">
                <h2 className="item-name">{props.name}</h2>
                <p className="item-tag">{props.tag}</p>
            </div>
        </Link>
    );
}