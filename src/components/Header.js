import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import styled from 'styled-components';
import 'normalize.css';

const Section = styled.section`
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.section`
  font-family: 'Titillium Web';
  background: black;
  text-align: center;
  height: 80px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .link {
    font-weight: 200;
    color: white;
    margin-right: 15px;
    text-decoration: none;
    font-size: 1.2em;
    :hover {
      color: red;
    }
  }
`;

export default function Header() {
  return (
    <Section>
      <Router>
        <Wrapper>
          <Link to='/' className="link">Home</Link>
          <Link to='/about' className="link">About</Link>
          <Link to='/projects' className="link">Projects</Link>
          <Link to='/resume' className="link">Resume</Link>
        </Wrapper>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/resume' component={Resume}/>
        </Switch>
      </Router>
    </Section>
  );
}
  
