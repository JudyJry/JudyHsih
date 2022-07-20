import React from 'react';
import "bootstrap/js/dist/offcanvas"

export default NavBar;
function NavBar(props: React.PropsWithChildren<{}>) {
    return (
        <nav className="navbar navbar-dark">
            <div className="container-fluid">
                <NavBrand></NavBrand>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start bg-logo-red" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header flex-row-reverse">
                        <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                            <NavLink link="#">關於我</NavLink>
                            <NavLink link="#">作品們</NavLink>
                            <NavLink link="#">想聯絡</NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}


function NavBrand(props: React.PropsWithChildren<{}>) {
    const brand = "JudyHsih's Profile Website";
    return (
        <a className="navbar-brand position-absolute top-50 start-50 translate-middle" href="./index.html">{brand}</a>
    );
}

function NavLink(props: React.PropsWithChildren<{ link: string }>) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.link}>{props.children}</a>
        </li>
    );
}