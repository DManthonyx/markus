import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import { routes } from './Const';
import Portfolio from './Portfolio';

const My404 = () => {
 if(true) {
   return  <Redirect to="/home" />
 }
};

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .fade-exit {
    opacity: 0;
  }

  .fade-exit.fade-exit-active {
    /* opacity: 0.00;
    transition: opacity 500ms ease-in; */
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 78px;
    left: 0;
    @media (max-width: 950px) {
    top: 40px;
  }
  }
`;

function App({ location }) {
  return (
    <main>
      <NavBar routes={ routes } />
    <Wrapper>
    <TransitionGroup className="transition-group">
    <CSSTransition key={location.key} timeout={{ enter: 300, exit: 300 }} classNames="fade">
    <section className="route-section">
    <Switch>
      <Route exact path='/' render={() => <Home /> }  />
      <Route exact path='/home' render={() => <Home /> }  />
      <Route exact path='/about' render={() => <About />}  />
      <Route exact path='/skills' render={() => <Skills />} />
      <Route exact path='/portfolio' render={() => <Portfolio />} />
      <Route component={ My404 } />
    </Switch>
    </section>
    </CSSTransition>
    </TransitionGroup>
    </Wrapper>
  </main>
  );
}
export default withRouter(App);


