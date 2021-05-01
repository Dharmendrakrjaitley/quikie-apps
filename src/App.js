import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/pages/home';

import Header from './components/layout/header';
import View from './components/pages/view';
import Logo from './components/layout/logo';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
      <Logo />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/view" component={View}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
