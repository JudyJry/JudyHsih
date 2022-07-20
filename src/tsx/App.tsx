import React from 'react';
import NavBar from './navBar';

function App() {

  function wheel(e: React.WheelEvent) {
    console.info('x' + e.deltaX);
    console.info('y' + e.deltaY);
    console.info('z' + e.deltaZ);
    console.info('mode' + e.deltaMode);
  }

  return (
    <div className="App" onWheel={(e) => wheel(e)}>
      <NavBar></NavBar>
      <div className="homepage">
        <HomePageLinkList></HomePageLinkList>
      </div>
    </div>
  );
}

function HomePageLinkList(props: React.PropsWithChildren<{}>) {
  return (
    <div className="homepage-link-list d-flex flex-row position-absolute top-50 start-50 translate-middle">
      <HomePageLink link="">關於我</HomePageLink>
      <HomePageLink link="">作品們</HomePageLink>
      <HomePageLink link="">想聯絡</HomePageLink>
    </div>
  );
}

function HomePageLink(props: React.PropsWithChildren<{ link: string }>) {
  return (
    <a className="homepage-link" href={props.link}>
      <div>{props.children}</div>
    </a>
  );
}

export default App;
