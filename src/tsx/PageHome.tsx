import React from "react";
import { Link } from "react-router-dom";


export default function HomePage(): JSX.Element {
    return (
        <div className="homepage">
            <HomePageLinkList></HomePageLinkList>
        </div>
    )
}

function HomePageLinkList(props: React.PropsWithChildren<{}>): JSX.Element {
    return (
        <div className="homepage-link-list d-flex flex-lg-row flex-column position-absolute top-50 start-50 translate-middle">
            <HomePageLink link="works" order={2}>作品們</HomePageLink>
            <HomePageLink link="about" order={1}>關於我</HomePageLink>
            <HomePageLink link="contact" order={3}>想聯絡</HomePageLink>
        </div>
    );
}

function HomePageLink(props: React.PropsWithChildren<{ link: string, order: number }>): JSX.Element {
    return (
        <Link className={"homepage-link order-" + props.order} to={props.link}>
            <div>{props.children}</div>
        </Link>
    );
}