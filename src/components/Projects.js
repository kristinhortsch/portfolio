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
    flex-wrap: wrap;
    justify-content: center;
  }
`;


export default function Projects() {
  return (
    <Wrapper>
      <Section>
        <h1>Projects</h1>
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
          <div className="project">
            <h2>Warble (Twitter Clone)</h2>
            <img src="https://res.cloudinary.com/khortsch/image/upload/v1552866563/Screenshot_2019-03-17_16.49.05_NQM53t.png" />
            <p>Twitter-esque social media app built in React/Redux. Users must sign up for an account and login before they can access the site. Then they are free to browse popular chirps (posts), search through them by filtering with a search term, and post new chirps.</p>
            <p><a href="https://naughty-snyder-e0a800.netlify.com/" target="_blank" >Deployed</a> | <a href="https://github.com/kristinhortsch/react-tic-tac-toe" target="_blank">GitHub</a></p>
          </div>
          <div className="project">
            <h2>Last Airbender Notes App</h2>
            <img src="https://res.cloudinary.com/khortsch/image/upload/v1552875720/Screenshot_2019-03-17_19.21.33_Soear8.png" />
            <p></p>
            <p><a href="https://priceless-northcutt-91452f.netlify.com/" target="_blank" >Deployed</a> | <a href="https://github.com/two-time-fool/expert-fiesta" target="_blank">GitHub</a></p>
          </div>
        </div>
      </Section>

    </Wrapper>
  );
}

