import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

// Styled components
const Heading = styled.p`
    text-align: center;
    margin-bottom: 20px;
    color: #353534;
    font-size: 2rem;
    text-decoration: underline;
    text-underline-offset: 10px;
    text-transform: capitalize;
`
const DataContainer = styled.div`
  position: relative;
  padding: 5px;
  border: 1px solid black;
  margin: 7px;
  width: 22.5%;

  // @media only screen and (max-width: 1200px) {
  //   width: 30%;
  // }

 

  // @media only screen and (max-width: 570px) {
  //   width: 90%;
  // }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;

  &:hover {
    background-color: #f0f0f0; /* change to desired hover background color */
  }
`;
const UserProfile = styled.img`
   position: absolute;
   top: -10px;
   left: -10px;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   z-index:1;

  ${Container}:hover & {
    
    transform: scale(1.1); /* adjust the scale factor as desired */
  }
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: transform 0.3s ease;
`;
const Tagcontainer = styled.div`
  background-color: #ff8111a6;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  ${Container}:hover & {
    display: block;
  }
`;

const PTag = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
`;
const DetailConataier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px;

  &:hover{
    
    background: #e28a2ced;
    color: white;
}
@media only screen and (max-width: 853px) {
  display: block;
  }
`;
const ContainerDetail = styled.div`
   font-size: 1.5rem;
   font-weight: 400;
 `;
const Button = styled.button`
  background-color: #e6e4e2;
  color: rgb(56 52 52);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color:rgb(56 52 52);
    color:  #e6e4e2;
  }

  &:active {
    transform: translateY(2px);
  }
`
// export default function Copatner() {
//   const [Feeds, setFeeds] = useState([]);
//   useEffect(() => {
//     // axios.get("http://localhost:4000/coBuddyData")
//     axios.get("https://co-buddy-6sgq.onrender.com/coBuddyData")
//       .then(response => {
//         setFeeds(response.data.data);
//         console.log("SS", response.data.data)
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div style={{ margin: "5%" }}>
//       <Heading>Co-Patners</Heading>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {Feeds.map((feed, index) => (
//           <DataContainer key={index}>
//             <UserProfile src={`https://source.unsplash.com/random/?${feed.name}`} alt="user image " />
//             <Container>
//               <Image src={`https://source.unsplash.com/random/?${feed.destination}`} alt="Goa" />
//               <Tagcontainer>
//                 <PTag><i className="uil uil-location-point"></i>{feed.destination}</PTag>
//               </Tagcontainer>
//             </Container>
//             <DetailConataier>
//               <div>
//                 <ContainerDetail>{feed.name}</ContainerDetail>
//                 <p style={{ color: "#707070" }}><i class="uil uil-calling"> </i>{feed.number}</p>

//               </div>
//               <div>
//                 <p style={{ color: "#707070" }}>{feed.date.slice(0, 10)}</p>
//                 <Button>Sss</Button>
//               </div>
//             </DetailConataier>
//           </DataContainer>

//         ))}

//       </div>
//     </div>
//   );
// }

export default function Copatner() {
  const [Feeds, setFeeds] = useState([]);
  useEffect(() => {
    // axios.get("http://localhost:4000/coBuddyData")
    axios.get("https://co-buddy-6sgq.onrender.com/coBuddyData")
      .then(response => {
         console.log("Sonu",response.data.data);
        setFeeds(response.data.data);
        console.log("SS", response.data.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ margin: "5%" }}>
      <Heading>Co-Patners</Heading>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Feeds.map((feed, index) => (
          <DataContainer key={index}>
            <UserProfile src={`https://source.unsplash.com/random/?${feed.name}`} alt="user image " />
            <Container>
              <Image src={`https://source.unsplash.com/random/?${feed.destination}`} alt="Goa" />
              <Tagcontainer>
                <PTag><i className="uil uil-location-point"></i>{feed.destination}</PTag>
              </Tagcontainer>
            </Container>
            <DetailConataier>
              <div>
                <ContainerDetail>{feed.name}</ContainerDetail>
                <p style={{ color: "#707070" }}><i class="uil uil-calling"> </i>{feed.number}</p>

              </div>
              <div>
                <p style={{ color: "#707070" }}>{feed.date.slice(0, 10)}</p>
                <Button>Sss</Button>
              </div>
            </DetailConataier>
          </DataContainer>

        ))}

      </div>
    </div>
  );
}

