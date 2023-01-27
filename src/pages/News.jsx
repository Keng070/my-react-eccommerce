import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import boxes from "../data";

const News = () => {
  const lorem = boxes;
  const [selected, setSelected] = useState(0);
  const [modal, setmodal] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <motion.div
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          top: -400,
          left: 60,
          backgroundColor: "red",
          width: 600,
          height: 400,
          zIndex: 100,
          display: "flex",
           justifyContent:"space-around",
          transition: "all 0.2s ease",
          transform:
            modal === false
              ? "none"
              : "translateY(480px) translateX(0px) scale(1) rotate(0deg) translateZ(0px)",
        }}
      >
        
          <button
            style={{ width: 80, height: 50 }}
            onClick={() => navigate("/sidebar")}
          >
            Go to the sidebar-test page
          </button>
          <button
            style={{ width: 80, height: 50 }}
            onClick={() => navigate("/amount")}
          >
            Go to the amount-test
          </button>
          <button
            style={{ width: 80, height: 50 }}
            onClick={() => navigate("/home")}
          >
            Go to the Home
          </button>
          <button
            style={{ width: 80, height: 50 }}
            onClick={() => navigate("/update")}
          >
            Go to the Update
          </button>
       
        <button
          style={{ width: 50, height: 50,color:"red" }}
          onClick={() => setmodal(!modal)}
        >
          close
        </button>
      </motion.div>
      <button onClick={() => setmodal(!modal)}>click</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {lorem?.map((item, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelected(index)}
            key={index}
            style={{
              width: "200px",
              height: 100,
              backgroundColor: selected === index ? "yellow" : "",
              marginLeft: 50,
            }}
          >
            {item.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default News;
