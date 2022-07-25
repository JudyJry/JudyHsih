/// <reference types="react-scripts" />
import React from "react";
import data from "../json/works";
import "bootstrap/js/dist/modal";

interface WorkData {
    name: string;
    tag: string;
    cover: typeof import("*.png") | string;
    describe: string | string[];
    member: {
        "member-name": string;
        position: string;
    }[];
    img: (typeof import("*.jpg") | typeof import("*.png"))[];
}

export default function PageWorks(): JSX.Element {
    return (
        <>
            <div className="PageWorks position-absolute top-50 start-50 translate-middle page">
                <div className="PageWorks-flex d-flex flex-column">
                    <h1 className="title">Project</h1>
                    <div className="work-list d-flex flex-lg-row flex-column">
                        {
                            data.map((d, i) => {
                                return (
                                    <WorkListItem2
                                        key={i}
                                        data={d}
                                    ></WorkListItem2>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            {
                data.map((d, i) => {
                    return (
                        <WorkDetail2
                            key={i}
                            data={d}
                        ></WorkDetail2>
                    );
                })
            }
        </>
    );
}

function WorkListItem(props: React.PropsWithChildren<{ data: WorkData }>): JSX.Element {
    let workDetail: HTMLElement;
    const showWork = () => {
        workDetail = document.getElementById(props.data.name) as HTMLElement;
        workDetail.classList.add("show");
    }
    return (
        <button className="work-list-item" onClick={showWork}>
            <div className="item-img">
                <img src={props.data.cover as unknown as string} alt="" />
            </div>
            <div className="item-info">
                <h2 className="item-name">{props.data.name}</h2>
                <p className="item-tag">{props.data.tag}</p>
            </div>
        </button>
    );
}

function WorkDetail(props: React.PropsWithChildren<{ data: WorkData }>): JSX.Element {
    let workDetail: HTMLElement;
    const closeWork = () => {
        workDetail = document.getElementById(props.data.name) as HTMLElement;
        workDetail.classList.remove("show");
    }
    return (
        <div id={props.data.name} className="work-container flex-column">
            <div className="offcanvas-header flex-row-reverse">
                <button type="button" className="close" onClick={closeWork}>&times;</button>
            </div>
            <div className="work-detail d-flex flex-lg-row flex-column justify-content-end align-items-center">
                <div id={"carouselWork-" + props.data.name} className="carouselWork carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {
                            props.data.img.map((d, i) => {
                                return (
                                    <button
                                        key={i}
                                        type="button"
                                        data-bs-target={"#carouselWork-" + props.data.name}
                                        data-bs-slide-to={i}
                                        className={i == 0 ? "active" : ""}
                                        //aria-current={i == 0 ? "true" : "false"}
                                        aria-label={"Slide " + i}
                                    ></button>
                                );
                            })
                        }
                    </div>
                    <div className="carousel-inner">
                        {
                            props.data.img.map((d, i) => {
                                return (
                                    <div className={i == 0 ? "carousel-item active" : "carousel-item"} key={i}>
                                        <img src={d as unknown as string} className="img-fluid d-block"></img>
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
                    <div className="work-describe">
                        {typeof props.data.describe == "string" ?
                            <p>{props.data.describe}</p>
                            :
                            props.data.describe.map((d, i) => {
                                return (<p>{d}</p>);
                            })
                        }
                    </div>
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

function WorkListItem2(props: React.PropsWithChildren<{ data: WorkData }>): JSX.Element {
    return (
        <button className="work-list-item" data-bs-toggle="modal" data-bs-target={"#" + props.data.name}>
            <div className="item-img">
                <img src={props.data.cover as unknown as string} alt="" />
            </div>
            <div className="item-info">
                <h2 className="item-name">{props.data.name}</h2>
                <p className="item-tag">{props.data.tag}</p>
            </div>
        </button>
    );
}

function WorkDetail2(props: React.PropsWithChildren<{ data: WorkData }>): JSX.Element {
    return (
        <div className="work-modal modal fade" id={props.data.name} tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="work-detail d-flex flex-lg-row flex-column justify-content-end align-items-start">
                            <div id={"carouselWork-" + props.data.name} className="carouselWork carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    {
                                        props.data.img.map((d, i) => {
                                            return (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    data-bs-target={"#carouselWork-" + props.data.name}
                                                    data-bs-slide-to={i}
                                                    className={i == 0 ? "active" : ""}
                                                    //aria-current={i == 0 ? "true" : "false"}
                                                    aria-label={"Slide " + i}
                                                ></button>
                                            );
                                        })
                                    }
                                </div>
                                <div className="carousel-inner">
                                    {
                                        props.data.img.map((d, i) => {
                                            return (
                                                <div className={i == 0 ? "carousel-item active" : "carousel-item"} key={i}>
                                                    <img src={d as unknown as string} className="img-fluid d-block"></img>
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
                                <div className="work-describe">
                                    {typeof props.data.describe == "string" ?
                                        <p>{props.data.describe}</p>
                                        :
                                        props.data.describe.map((d, i) => {
                                            return (<p>{d}</p>);
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}