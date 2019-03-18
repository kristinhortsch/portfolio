import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  .first {
    font-size: 1.2em;
    line-height: 1.3em;
    font-weight: 300;

  }
  p {
    font-size: 1.5em;
    line-height: 1.3em;
    font-weight: 300;
    margin: 10px 50px 10px 50px;
    color: red;
  }
  img {
    height: 90%;
    width: 75%;
    border: 2px solid black;
    box-shadow: 2px 2px 4px black;
  }
`;

const Wrapper = styled.section`
  font-family: 'Titillium Web';
`;

const ParagraphContainer = styled.section`
  h1 {
    text-align: center;
    font-size: 4em;
    margin: 0 0 20px 0;
    padding: 0;
  }
  width: 60%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ImgContainer = styled.section`
  width: 40%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function About() {
  return (
    <Wrapper>
      <Div>
        <ImgContainer>
          <img src="https://res.cloudinary.com/khortsch/image/upload/v1552877166/me.jpg" />
        </ImgContainer>
        <ParagraphContainer>
          <h1>About Me</h1>
          <p><span className="first">I'm a fullstack JavaScript software developer with a deep love of learning and a passion for problem-solving.<br /><br />As a former first-grade teacher, I learned the importance of collaborative teamwork, the art of remaining calm when everything is falling to pieces, and how to think outside the box. That skillset led me to a pivot into the world of programming, and I’ve never looked back.<br /><br />I’m enthusiastic, self-motivated, and driven by my own curiosity and desire to learn more. I love taking on new challenges and finding different solutions to solve them!</span></p>
        </ParagraphContainer>
      </Div>
    </Wrapper>
  );
}
