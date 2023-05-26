import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';


// import { io } from 'socket.io-client';



const FormContainer = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  width: 75%;
  transform: translate(-50%, -50%);
  background: rgb(255, 255, 255);
  padding: 30px 5%;
  border-radius: 28px;

`;

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 5px;
`;

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
`

const UserDetailsForm = () => {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formJSON = JSON.stringify({
      name: name,
      destination: destination,
      date: new Date(date),
      number: Number(number)

    })
    // const socket = io('http://localhost:8000');
    axios.post("https://co-buddy-6sgq.onrender.com/coBuddyData", formJSON, {
      // axios.post("http://localhost:4000/coBuddyData", formJSON, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        // handle success
        console.log(response);
        setName('');
        setDestination('');
        setDate('');
        setNumber('');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  };
  return (
    <FormContainer>
      <h2>Share Your Journey</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="destination">Destination:</Label>
          <Input
            type="text"
            id="destination"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Date:</Label>
          <Input
            type="date"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="number">Number:</Label>
          <Input
            type="number"
            id="number"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default UserDetailsForm;
