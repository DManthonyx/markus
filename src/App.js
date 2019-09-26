import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import { routes } from './Const';
import Portfolio from './Portfolio';

const My404 = () => {
  return (
    <div>
      Your lost body
    </div>
  )
};

class App extends Component {
  
  render () {

    return (
      <main>
        <NavBar routes={ routes } />
      <Switch>
        <Route exact path='/' render={() => <Home /> }  />
        <Route exact path='/home' render={() => <Home /> }  />
        <Route exact path='/about' render={() => <About />}  />
        <Route exact path='/skills' render={() => <Skills />} />
        <Route exact path='/portfolio' render={() => <Portfolio />} />
        <Route component={ My404 } />
      </Switch>
    </main>
    );
  }
}
export default App;


