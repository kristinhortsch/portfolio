import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin: 10px 40px 10px 40px;
  h1 {
      text-align: center;
      font-size: 4em;
      margin: 20px 0 0 0;
      padding: 0;
    }
`;

const Wrapper = styled.section`
  font-family: 'Titillium Web';
  p {
    font-weight: 600;
  }
  img {
    width: 300px;
  }
  a {
    text-decoration: none;
    color: black;
    font-weight: 600;

    :hover {
      color: red;
    }
  }
  .project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    padding: 20px;
    text-align: center;
    box-shadow: 2px 2px 4px black;
    margin: 20px;
  }
  .container {
    display: flex;
    justify-content: center;
  }
`;


export default function Projects() {
  return (
    <Wrapper>
      <Section>
        <h1>projects</h1>
        <div className="container">
          <div className="project">
            <h2>Marvel Character Finder</h2>
            <img src="https://res.cloudinary.com/khortsch/image/upload/v1552853462/Screenshot_2019-03-17_13.09.51_m5rnir.png" />
            <p>A fun React with Redux side project built with a friend using the Marvel API!</p>
            <p><a href="https://xenodochial-spence-f58fd4.netlify.com/" target="_blank">Deployed</a> | <a href="https://github.com/two-time-fool/urban-waffle" target="_blank">GitHub</a></p>
          </div>
          <div className="project">
            <h2>Tic Tac Toe</h2>
            <img src="https://res.cloudinary.com/khortsch/image/upload/v1552865933/Screenshot_2019-03-17_16.33.17_Vu4UKX.png" />
            <p>Fully functioning Tic Tac Toe game built in React!</p>
            <p><a href="https://naughty-snyder-e0a800.netlify.com/" target="_blank" >Deployed</a> | <a href="https://github.com/kristinhortsch/react-tic-tac-toe" target="_blank">GitHub</a></p>
          </div>
        </div>
      </Section>

    </Wrapper>
  );
}

