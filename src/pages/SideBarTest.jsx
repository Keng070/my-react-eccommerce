import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import boxes from "../data";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #055834;
  border-radius: 8px;
`;

const SideBarTest = () => {
  const [slideIndex, setSlideIndex] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Button onClick={() => setSlideIndex(!slideIndex)}>:::</Button>

        <motion.div
          initial="hidden"
          animate={{
            x: slideIndex === false ? 0 : 300,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 0.2 }}
          style={{
            width: "300px",
            height: "100vh",
            backgroundColor: "teal",
            position: " absolute",
            left: "-300px",
          }}
        >
          <Button onClick={() => setSlideIndex(!slideIndex)}>X</Button>
          {boxes?.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default SideBarTest;
