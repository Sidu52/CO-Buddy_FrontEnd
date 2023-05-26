import React from 'react';
import styled from 'styled-components';
import video from "../../Video/footervideo.mp4"
import logo from '../../image//logo.png'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #222;
  color: #fff;
  border-radius: 75px 75px 0 0;
  overflow: hidden;
}
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  opacity: 0.3;
  padding-bottom: 16.67%;
}
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ExtraContainer= styled.div`
  position: absolute;
  width: 100%;  
`

const BoxContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom:30px;
}
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  width:30%
`;

const Logo = styled.img`
   width:50%
`;

const Details = styled.div`
  margin-left: 20px;
  font-size: 1rem;
`;
const ListContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  align-items: center;
`
const Lists = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = styled.li`
  margin-bottom: 8px;
  font-size: 1rem;
`;

const EmailInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`
const Button = styled.button`
  background-color: orange;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }

  &:active {
    transform: translateY(2px);
  }
`;


const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
  align-items: center;
  margin-right: 20px;
`;

const IconContainer = styled.a`
  
  margin-left: 10px;
  font-size: 1.5rem;
  color: #cebfbf;
  background: #282113;
  border-radius: 50%;
  padding: 10px;

  &:hover{
  color:  #282113;
  background: #cebfbf;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <VideoContainer>
        <Video src={video} autoPlay loop muted />
      </VideoContainer>
      <ExtraContainer>
      <BoxContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
        <Details>Your company details here</Details>
      </LogoContainer>
      <ListContainer>
      <Lists>
        <h3>OUR SERVICES</h3>
        <List>Co-Traveler</List>
        <List>Hotel</List>
        <List>TripAdvisor</List>
        <List>Transport</List>
      </Lists>
      <Lists>
        <h3>PARTNERS</h3>
        <List>Booking</List>
        <List>HostelWorld</List>
        <List>Trivago</List>
        <List>Rental-Car</List>
      </Lists>
      </ListContainer>
      <div style={{width:"30%"}}>
      <EmailInput type="email" placeholder="Enter Email" />
      <Button>Submit</Button>
      <ContactContainer>
        <IconContainer href="#">
        <i className="uil uil-github-alt"></i>
        </IconContainer>
        <IconContainer href="#">
        <i className="uil uil-linkedin-alt"></i>
        </IconContainer>
        <IconContainer href="#">
        <i className="uil uil-instagram"></i>
        </IconContainer>
        <IconContainer href="#">
        <i className="uil uil-telegram-alt"></i>
        </IconContainer>
        <IconContainer href="#">
        <i className="uil uil-twitter-alt"></i>
        </IconContainer>
      </ContactContainer>
      </div>
      </BoxContainer>
      <hr style={{width:'92%'}} />
      <div style={{textAlign:'center'}}>
        <p>Co-Buddy c 2023 - All Rights Reserved</p>
      </div>
      </ExtraContainer>
    </FooterContainer>
  );
};

export default Footer;