import React, { useState } from 'react';
import styled from 'styled-components';
import cityName from '../../../Data/CityName';

const Heading = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: #353534;
  font-size: 2rem;
  text-decoration: underline;
  text-underline-offset: 10px;
  text-transform: capitalize;
`;

const DataContainer = styled.div`
  margin: 5%;
  max-height: 600px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide the scrollbar for Firefox */
  scrollbar-width: none;
  -ms-overflow-style: none;

  @media only screen and (max-width: 1200px) {
    width: 30%;
  }

  @media only screen and (max-width: 853px) {
    width: 45%;
  }

  @media only screen and (max-width: 570px) {
    width: 90%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  grid-auto-rows: 150px;
  grid-auto-flow: dense;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* ensure the image fills the container */
  transition: transform 0.3s ease;
  
`;

const TagContainer = styled.div`
  background-color: #ff8111a6;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: ${({ isHovered }) => (isHovered ? 'block' : 'none')};
`;

const PTag = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
`;

const EvenItem = styled.div`
  border: 2px solid black;
  position: relative;
`;

const OddItem = styled.div`
  border: 2px solid black;
  grid-row: span 2;
  position: relative;
`;

export default function Destination() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <DataContainer>
      <Heading>Top Destinations</Heading>
      <Container>
        {cityName.data.map((city, index) => (
          <>
            {index % 2 === 0 ? (
              <EvenItem
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Image src={`https://source.unsplash.com/random/?${city.city}`} alt={city.city} />
                <TagContainer isHovered={hoveredIndex === index}>
                  <PTag>
                    <i className="uil uil-location-point"></i>
                    {city.city}
                  </PTag>
                </TagContainer>
              </EvenItem>
            ) : (
              <OddItem
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Image src={`https://source.unsplash.com/random/?${city.city}`} alt={city.city} />
                <TagContainer isHovered={hoveredIndex === index}>
                  <PTag>
                    <i className="uil uil-location-point"></i>
                    {city.city}
                  </PTag>
                </TagContainer>
              </OddItem>
            )}
          </>
        ))}
      </Container>
    </DataContainer>
  );
}

