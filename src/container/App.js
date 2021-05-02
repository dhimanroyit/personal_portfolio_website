import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import SideBarNav from '../components/SideBarNav/SideBarNav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="">
        <SideBarNav />
        <div className="ml-72">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/project">
              <h1>project</h1>
            </Route>
            <Route path="/resume">
              <h1>resume</h1>
            </Route>
            <Route path="/blog">
              <h1>blog</h1>
            </Route>
            <Route path="/contact">
              <h1>contact</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
