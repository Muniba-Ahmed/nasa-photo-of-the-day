import React from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(360deg);
  }`;

const Wrapper = styled.div`
  margin: 0 100px;
  background-color: navy;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPhoto = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border-bottom: 2px solid blue;
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: purple;
  }

  transform: scale(2); // start of the animation!
  opacity: 0; // start of the animation!
  animation: ${kf} 0.3s ease-in-out forwards;
  //grab some data!
`;

const NasaPhoto = (props) => {
  return (
    <Wrapper>
      <StyledPhoto className="photoContainer">
        <h1>Nasa Photo of the Day</h1>
        <p>{props.photo.date}</p>
        <img src={props.photo.hdurl} />
        <h3>{props.photo.title}</h3>
        <p>{props.photo.explanation}</p>
      </StyledPhoto>
    </Wrapper>
  );
};

export default NasaPhoto;

// date: "2022-03-23",
// explanation:
//   "Massive stars can blow bubbles.  The featured image shows perhaps the most famous of all star-bubbles, NGC 7635, also known simply as The Bubble Nebula. Although it looks delicate, the 7-light-year diameter bubble offers evidence of violent processes at work. Above and left of the Bubble's center is a hot, O-type star, several hundred thousand times more luminous and some 45-times more massive than the Sun. A fierce stellar wind and intense radiation from that star has blasted out the structure of glowing gas against denser material in a surrounding molecular cloud. The intriguing Bubble Nebula and associated cloud complex lie a mere 7,100 light-years away toward the boastful constellation Cassiopeia. This sharp, tantalizing view of the cosmic bubble is a reprocessed composite of previously acquired Hubble Space Telescope image data.   Birthday Surprise: What picture did APOD feature on your birthday? (post 1995)",
// hdurl: "https://apod.nasa.gov/apod/image/2203/Bubble_HubbleOzsarac_1952.jpg",
// title: "The Bubble Nebula from Hubble",
