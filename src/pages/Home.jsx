import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import boxes from "../data";
const Home = () => {
  const [arr, setArr] = useState(boxes);
  const [emptyId, setEmptyId] = useState("");
  const [emptyText, setEmptyText] = useState("");
  const [getText, setGetText] = useState("");
  const [getId, setGetId] = useState("");
  const [eidtObject, setEditObject] = useState(null);
  const numberToBeAdded = {
    id: getId,
    name: getText,
  };
  const HandleClick1= ()=> {
      Swal.fire({  
        title: 'Are you sure?',  
        text: 'User will have Admin Privileges',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonColor: '#3085d6',  
        cancelButtonColor: '#d33',  
        confirmButtonText: 'Yes!'  
      });  
    
  }
  const setEmpty = () => {
    if (numberToBeAdded.id !== "") {
      setEmptyId("");
    } else {
      setEmptyId("Please enter your id");
    }
    if (numberToBeAdded.name !== "") {
      setEmptyText("");
    } else {
      setEmptyText("Please enter your text");
    }
  };
  const add = () => {
    if (numberToBeAdded.id !== "" && numberToBeAdded.name !== "") {
      setArr((arr) => [...arr, numberToBeAdded]);
      setGetId("");
      setGetText("");
    } else {
      setEmpty();
    }
  };

  function onEditValueOnChange(event) {
    const { name, value } = event.target;
    setEditObject((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  const theAmount = arr.length;

  function OnEditUpdate() {
    setArr((prevAllNote) => {
      return prevAllNote.map((elem) => {
        if (elem.id !== eidtObject.id) return elem;
        return eidtObject;
      });
    });
    setEditObject(null);
  }

  function removeItem(id) {
    const deleteItem = arr.filter((any) => any.id !== id);
    setArr(deleteItem);
    HandleClick1()
  }
  
  let editNoteElement = null;
  if (!!eidtObject) {
    editNoteElement = (
      <div
        style={{
          marginTop: 12,
          height: 200,
          width: 245,
          backgroundColor: "#cf6e6e",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 55,
          left: "50vw",
        }}
      >
        <p>
          <input
            value={eidtObject.name}
            onChange={onEditValueOnChange}
            type="text"
            name="name"
          />
        </p>
        <button onClick={OnEditUpdate}>update</button>
      </div>
    );
    
  }
  return (
    <div>
      <input
        value={getId}
        type={"text"}
        placeholder="id.."
        onChange={(event) => setGetId(event.target.value)}
      />
      <input
        value={getText}
        type={"text"}
        placeholder="texts.."
        onChange={(event) => setGetText(event.target.value)}
      />
      <button onClick={() => add()}>add</button>
      <p>{emptyId}</p>
      <p>{emptyText}</p>
      <span
        style={{
          marginLeft: 20,
          color: "blue",
          display: theAmount === 0 ? "none" : "flex",
        }}
      >
        {theAmount}
      </span>
      {arr?.map((elem) => (
        <div
          style={{
            width: 500,
            height: 60,
            backgroundColor: "green",
            border: "1px solid black",
            display: "flex",
            justifyContent: "space-between",
          }}
          key={elem.id}
        >
          <p>{elem.name}</p>
          <button onClick={() => setEditObject(elem)}>edit</button>
          <button onClick={() => removeItem(elem.id)}>remove</button>
          
        </div>
      ))}
      {editNoteElement}
    </div>
  );
};

export default Home;
