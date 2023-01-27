import React, { useState, useEffect } from "react";
import boxes from "../data";

const UpdateTest = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [filterTerm, setFilterTerm] = useState("");

  const [filterResults, setFilterResults] = React.useState([]);


  useEffect(() => {
    const results = boxes.filter((theBox) =>
      theBox.name.toString().toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  useEffect(() => {
    const results = boxes.filter((theBox) =>
      theBox.type.toString().includes(filterTerm)
    );
    setFilterResults(results);
  }, [filterTerm]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 600, height: "90vh" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <select id="id" onChange={(event)=>setFilterTerm(event.target.value)} style={{ width: 70, marginRight: 10 }}>
            <option value="">all</option>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <input
            value={searchTerm}
            type="text"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button>search</button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "70vh",
              width: "90%",
              marginTop: "50px",
              display: "flex",
            }}
          >
            {filterResults.map((item, id) => (
              <div
                key={id}
                style={{
                  textAlign: "center",
                  width: 100,
                  height: 100,
                  backgroundColor: "teal",
                  margin: "20px 20px ",
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTest;
