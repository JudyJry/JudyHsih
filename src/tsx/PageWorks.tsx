/// <reference types="react-scripts" />
import React from "react";
import data from "../json/works";

interface WorkData {
    name: string;
    tag: string;
    cover: typeof import("*.png") | string;
    describe: string;
    member: {
        "member-name": string;
        position: string;
    }[];
    img: (typeof import("*.jpg") | typeof import("*.png"))[];
}

export default function PageWorks(): JSX.Element {
    return (
        <div className="PageWorks position-absolute top-50 start-50 translate-middle page">
            <div className="PageWorks-flex d-flex flex-column">
                <h1 className="title">Project</h1>
                <div className="work-list">
                    {
                        data.map((d, i) => {
                            return (
                                <WorkListItem
                                    key={i}
                                    data={d}
                                ></WorkListItem>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

function WorkListItem(props: React.PropsWithChildren<{ data: WorkData }>): JSX.Element {
    let workDetail: HTMLElement;
    const showWork = () => {
        workDetail = document.getElementById(props.data.name) as HTMLElement;
        workDetail.classList.add("show");
    }
    const closeWork = () => {
        workDetail = document.getElementById(props.data.name) as HTMLElement;
        workDetail.classList.remove("show");
    }
    return (
        <>
            <button className="work-list-item" onClick={showWork}>
                <div className="item-img">
                    <img src={props.data.cover as unknown as string} alt="" />
                </div>
                <div className="item-info">
                    <h2 className="item-name">{props.data.name}</h2>
                    <p className="item-tag">{props.data.tag}</p>
                </div>
            </button>
            <WorkDetail
                data={props.data}
                closeEvent={closeWork}
            ></WorkDetail>
        </>
    );
}

function WorkDetail(props: React.PropsWithChildren<{ data: WorkData, closeEvent: React.MouseEventHandler<HTMLButtonElement> }>): JSX.Element {
    return (
        <div id={props.data.name} className="work-detail">
            <div className="offcanvas-header flex-row-reverse">
                <button type="button" className="btn-close" onClick={props.closeEvent}>&times;</button>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <div id={"carouselWork-" + props.data.name} className="carousel slide w-100 h-auto" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {
                            props.data.img.map((d, i) => {
                                return (
                                    <div className="carousel-item" key={i}>
                                        <img src={d as unknown as string} className="d-block w-100"></img>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={"#carouselWork-" + props.data.name} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#carouselWork-" + props.data.name} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="work-info">
                    <h1 className="work-name">{props.data.name}</h1>
                    <ul className="member-list">
                        {
                            props.data.member.map((d, i) => {
                                return (
                                    <WorkMember
                                        key={i}
                                        name={d["member-name"]}
                                        position={d.position}
                                    ></WorkMember>
                                );
                            })
                        }
                    </ul>
                    <hr></hr>
                    <p className="work-describe">{props.data.describe}</p>
                </div>
            </div>
        </div>
    );
}

function WorkMember(props: React.PropsWithChildren<{ name: string, position: string }>): JSX.Element {
    return (
        <li className="member-item">
            <span className="member-name">{props.name}</span>
            <span className="member-position">{props.position}</span>
        </li>
    );
}