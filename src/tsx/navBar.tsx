/// <reference types="react-scripts" />

import React from 'react';
import "bootstrap/js/dist/offcanvas"
import { Link } from "react-router-dom";
import logo from "../img/logo-white.png";

export default NavBar;
function NavBar(props: React.PropsWithChildren<{}>): JSX.Element {

    const [navBg, setNavBg] = React.useState(false);

    const changeNavBg = () => {
        window.scrollY >= 48 ? setNavBg(true) : setNavBg(false);
    }
    React.useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }
    }, [])


    return (
        <nav className={navBg ? "navbar fixed-top navbar-dark bg-logo-purple" : "navbar fixed-top navbar-dark"}>
            <div className="container-fluid">
                <NavBrand></NavBrand>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start bg-logo-red" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header flex-row-reverse">
                        <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close">&times;</button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                            <NavLink link="about">關於我</NavLink>
                            <NavLink link="works">作品們</NavLink>
                            <NavLink link="contact">想聯絡</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}


function NavBrand(props: React.PropsWithChildren<{}>): JSX.Element {
    const brand = "JudyHsih's Profile Website";
    return (
        <Link className="navbar-brand position-absolute top-50 start-50 translate-middle" to="/">
            <span>{brand}</span>
            <img src={logo} alt="" />
        </Link>
    );
}

function NavLink(props: React.PropsWithChildren<{ link: string }>): JSX.Element {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={props.link}>{props.children}</Link>
        </li>
    );
}