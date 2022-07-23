/// <reference types="react-scripts" />
import React from "react";
import logo from "../img/logo-white.png";

export default function PageContact(): JSX.Element {
    return (
        <div className="PageContact position-absolute top-50 start-50 translate-middle page">
            <div className="d-flex flex-lg-row flex-column-reverse align-items-center align-self-center justify-content-center h-100">
                <div><img className="logo" src={logo} alt="" /></div>
                <div className="context">
                    <h1 className="title">Contact</h1>
                    <p>Phone：0932-934-148</p>
                    <p>Line：puredark0127</p>
                    <p>Email：judyjry0127@gmail.com</p>
                </div>
            </div>
        </div>
    );
}