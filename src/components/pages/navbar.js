import React from 'react';
import { Card, Nav, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './signUp';
import Login from './login';
import Subscribe from './subscribe';
import Home from './Home';

const Navbar = () => {
  return (
    <Router>
      <div>
        <div>
          <Nav variant="tabs" defaultActiveKey="#first" className="nav">
            <Nav.Item>
              <Nav.Link >
                <Link to="/signup" className="nav-links">Sign Up</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/login" className="nav-links">Login</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/subscribe" className="nav-links">Subscribe</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/signup" component={SignUp}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/subscribe" component={Subscribe}></Route>

        </Switch>
      </div>
    </Router>
  );
}
export default Navbar;