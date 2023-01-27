import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  width: 40vw;
  height: 70vh;
  background-color: #539690;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  height: 60px;
  width: 80%;
  margin-bottom: 20px;
`;
const Button = styled.button`
  height: 60px;
  width: 80%;
  background-color: #0088ff;
  border: none;
  cursor: pointer;
  color: white;
`;
const P = styled.p`
  color: #ff0000;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emptyUsername, setEmptyUsername] = useState("");
  const [emptyPassword, setEmptyPassword] = useState("");

  const navigate = useNavigate();

  const onLogin = () => {
    if (username !== "" && password !== "") {
      localStorage.setItem("Username", username);
      localStorage.setItem("Password", password);
    }

    if (username === "") {
      setEmptyUsername("Enter your username");
    } else {
      setEmptyUsername("");
    }
    if (password === "") {
      setEmptyPassword("Enter your Password");
    } else {
      setEmptyPassword("");
    }

    if (username !== "" && password !== "") {
      navigate("/news");
    }
  };

  return (
    <Container>
      <Form>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="User name"
        ></Input>
        <P>{emptyUsername}</P>

        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        ></Input>
        <P>{emptyPassword}</P>
        <Button onClick={() => onLogin()}>Log in</Button>
      </Form>
    </Container>
  );
}

export default Login;
