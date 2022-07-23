import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./PageHome";
import PageAbout from './PageAbout';
import PageContact from './PageContact';
import PageWorks from './PageWorks';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Router(): JSX.Element {
    const location = useLocation();
    return (
        <TransitionGroup>
            <CSSTransition
                timeout={10}
                classNames={'fade'}
                key={location.pathname}
            >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="/works" element={<PageWorks />} />
                    <Route path="/contact" element={<PageContact />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    )
}