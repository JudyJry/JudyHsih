/// <reference types="react-scripts" />
import React from "react";
import "bootstrap/js/dist/carousel"
import about_1 from "../img/about-1.jpg";
import about_2 from "../img/about-2.png";

export default function PageAbout(): JSX.Element {
    return (
        <div className="PageAbout position-absolute top-50 start-50 translate-middle page">
            <div className="PageAbout-flex d-flex flex-lg-row flex-column justify-content-center">
                <div id="carouselAbout" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={about_1} className="d-block w-100"></img>
                        </div>
                        <div className="carousel-item">
                            <img src={about_2} className="d-block w-100"></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselAbout" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselAbout" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="introduce">
                    <h1 className="title">Judy Hsih</h1>
                    <p>　　我是施宛伶，今年22歲，我的個性是一個標準的水瓶座，興趣為畫圖、聽音樂、看小說和玩電腦遊戲。</p>
                    <p>　　我在2018年進入大同大學媒體設計學系就讀，這些日子以來，每天都相當的充實快樂，可以說是一段很值得、很愉悅的歷程。因為家人認為我有網頁設計的相關天賦，因此在學期間選修網頁設計相關課程，為將來成為網頁設計等相關職務做準備。</p>
                </div>
            </div>
        </div>
    );
}