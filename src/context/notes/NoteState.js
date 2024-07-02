import React, { useEffect, useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  let host = "https://cloudnotes-backend-2.onrender.com"
  
  const [notes, setNotes] = useState([]);
  const getNotes = async()=>{
    const response = await fetch("https://cloudnotes-backend-2.onrender.com/api/notes/fetchallnotes",{
      method: "GET",
      headers:{
        "Content-Type" : "application/json",
        "auth-token": localStorage.getItem('token')
      },
      
    })
    const json = await response.json();
    // console.log(json);
    setNotes(json);
    
  }


  const addNotes = async (title, description) => {
    const response = await fetch("https://cloudnotes-backend-2.onrender.com/api/notes/addnotes",{
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description})
    })  
    // console.log(response.json);
      


    // let note = {
    //   _id: "659ff6d7753c4fc0c8f10f7e",
    //   user: "659ff19d735757123f5ade84",
    //   title: title,
    //   description: description,
    //   date: "1704982231133",
    //   __v: 0,
    // };
    // setNotes(notes.concat(note));
    // console.log(notes);
  };
  const deleteNotes = async(id) => {
    const response = await fetch(`https://cloudnotes-backend-2.onrender.com/api/notes/deleteNote/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type" : "application/json",
        "auth-token": localStorage.getItem('token')
      },
      
    })  
    // console.log(response.json);
    // const newn = [];

    // notes.map((note, index) => {
    //   if (note._id !== id) {
    //     newn.push(note);
    //   }
    // });

    // setNotes(newn);
    // console.log(notes);
    // console.log("Deleting the note with id: ");
    // console.log(id);
  };

  const editNotes = async(id, title, description) => {
    const response = await fetch(`https://cloudnotes-backend-2.onrender.com/api/notes/updatenotes/${id}`,{
      method: "PUT",
      headers:{
        "Content-Type" : "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title,description})
    })  
    // console.log(title,description);
    
  };
  return (
    <NoteContext.Provider value={{ notes, addNotes, editNotes, deleteNotes , getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
