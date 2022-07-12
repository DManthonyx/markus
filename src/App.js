import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import { routes } from './Const';
import Portfolio from './Pages/Portfolio';

import { 
  Wrapper,
  Main
} from './style';

const My404 = () => {
 if(true) {
   return  <Redirect to="/home" />
 }
};

function App({ location }) {
  return (
    <Main className='main'>
      <NavBar routes={ routes } />
      <Wrapper className='wrapper'>
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
    </Main>
  );
}
export default withRouter(App);


