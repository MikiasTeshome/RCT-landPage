import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import Home1 from './pages/home1';
import Home2 from './pages/home2';
import About from './pages/about';
import Team from './pages/team';
import Price from './pages/price';
import Portofolio from './pages/portofolio';
import Contact from './pages/contact';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0, delay: 300, beforeChildren: 300 }
});

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup primary={false}>
        <RouteContainer key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

export default () => (
  <div className="wraper">
    <Header/>
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/home" />
        </Home>
        <Home1 path="/home1" />
        <Home2 path="/home2" />
        <About path="/about" />
        <Team path="/team" />
        <Price path="/price" />
        <Portofolio path="/portofolio" />
        <Contact path="/contact" />
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
  </div>
);
