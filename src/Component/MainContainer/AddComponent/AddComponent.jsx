import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
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
    display:flex
`;

const LeftContainer = styled.div`
//   text-align: left;
  margin-right: 20px;
  color:white;
  width: 50%;
`;

const RightContainer = styled.div`
  text-align: right;
  width: 50%;
`;

const Heading = styled.h1`
//   color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
//   color: #555
  font-size: 16px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
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
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZ3KUJBqpbi9pHwj9-s8oHd-i7qJGoORMfw" alt="Image" />
                        //These all contain show above img
            <div>
              <Heading>Second</Heading>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magni iste minima commodi quia distinctio repellendus fuga placeat a nobis?
              </Paragraph>
              <Button>Submit</Button>
            </div>
          </div>

        </RightContainer>
      </DetailContainer>
    </Container>
  );
}
