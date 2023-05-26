import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;  
  height: 600px;
  margin: 50px 0;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height:100%;
  margin-bottom: 20px;
`;
const DetailContainer = styled.div`
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: space-around;
`;

const LeftContainer = styled.div`
      margin: 20px;
    color: white;
    width: 30%;
`;

const RightContainer = styled.div`
  position: relative;
  width: 50%;
  
`;

const ImgageBox = styled.div`
  transform: translate(25vw, -50%);
  width: 40%;
  height: 500px;

  
`;
const Image2 = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 13%;
`;
const HeadingBox = styled.div`
    position: absolute;
    color: white;
    font-weight: 600;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    border-radius: 13%;
    &:hover{
      background: #ff8111a6;
    }
`;
const Headingbox2 = styled.div`
   position: absolute;
   bottom: 0;
   text-align: center;
   padding: 5px;
`

const Heading = styled.h1`
color: white;
font-weight: 600;
left: 10px;

`;

const Paragraph = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  cursor:pointer;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius:10%;
  &:hover{
    background: #fff;
    color:#333;
  }
`;

export default function AddComponent() {
  return (
    <Container>
      <Image src="https://images.unsplash.com/photo-1450213073073-ecc0ceb2f892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&w=1000&q=80" alt="Full-width Image" />
      <DetailContainer>
        <LeftContainer>
          <Heading>Hello</Heading>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eaque nulla tenetur unde quae dolores adipisci magnam praesentium dicta sint?
          </Paragraph>
          <Button>Submit</Button>
        </LeftContainer>
        <RightContainer>
          <ImgageBox>
            <Image2 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZ3KUJBqpbi9pHwj9-s8oHd-i7qJGoORMfw" alt="Image" />
            <HeadingBox>
              <Headingbox2>
                <Heading>Second</Heading>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magni iste minima commodi quia distinctio repellendus fuga placeat a nobis?
                </Paragraph>
                <Button>Submit</Button>
              </Headingbox2>

            </HeadingBox>
          </ImgageBox>

        </RightContainer>
      </DetailContainer>
    </Container>
  );
}
