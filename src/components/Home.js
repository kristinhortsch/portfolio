import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

const Wrapper = styled.section`
  background: white;
  color: red;
  font-family: 'Titillium Web';
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  h1 {
    font-size: 6em;
    font-weight: 400;
    margin-bottom: 30px;
    padding: 0;
  }  
  h2 {
    font-size: 3em;
    font-weight: 200;
    margin: 0;
    padding: 0;

  }
`;

const Div = styled.div`
  margin-top: 40px;
  display: flex;
  img {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <h1>Kristin Hortsch</h1>
      <h2>FullStack Software Developer</h2>
      <Div>
        <a href="https://github.com/kristinhortsch" target="_blank"><img src="https://res.cloudinary.com/khortsch/image/upload/v1552876340/Github.png" /></a>
        <a href="https://linkedin.com/in/kristinhortsch" target="_blank"><img src="https://res.cloudinary.com/khortsch/image/upload/v1552876340/Linkedin.png" /></a>
        <a href="https://twitter.com/kristinhortsch" target="_blank"><img src="https://res.cloudinary.com/khortsch/image/upload/v1552876340/Twitter.png" /></a>
        <a href="mailto:kristinhortsch@gmail.com" target="_blank"><img src="https://res.cloudinary.com/khortsch/image/upload/v1552876379/Gmail.png" /></a>
      </Div>
    </Wrapper>
  );
}
