import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./components/NasaPhoto";
import styled from "styled-components";

const dummyData = {
  date: "2022-03-23",
  explanation:
    "Massive stars can blow bubbles.  The featured image shows perhaps the most famous of all star-bubbles, NGC 7635, also known simply as The Bubble Nebula. Although it looks delicate, the 7-light-year diameter bubble offers evidence of violent processes at work. Above and left of the Bubble's center is a hot, O-type star, several hundred thousand times more luminous and some 45-times more massive than the Sun. A fierce stellar wind and intense radiation from that star has blasted out the structure of glowing gas against denser material in a surrounding molecular cloud. The intriguing Bubble Nebula and associated cloud complex lie a mere 7,100 light-years away toward the boastful constellation Cassiopeia. This sharp, tantalizing view of the cosmic bubble is a reprocessed composite of previously acquired Hubble Space Telescope image data.   Birthday Surprise: What picture did APOD feature on your birthday? (post 1995)",
  hdurl: "https://apod.nasa.gov/apod/image/2203/Bubble_HubbleOzsarac_1952.jpg",
  title: "The Bubble Nebula from Hubble",
};

const StyledPhoto = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 2px solid blue;

  //grab some data!
`;

function App() {
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then((response) => {
        //console.log(response.data)
        setData(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <StyledPhoto className="App">
      {data && <NasaPhoto photo={data} />}
    </StyledPhoto>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
