import React, { useState } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "./Button";
export default function Home() {
  const NN = useContext(noteContext);
  const [ttl ,setTtl] =useState("Add title here");
  const [desc ,setDesc] =useState("Description");
  const handleOnChangettl = (e)=>{
    setTtl(e.target.value);
  }
  const handleOnChangedesc= (e)=>{
    setDesc(e.target.value);
  }
  const onClick=(e)=>{
    e.preventDefault();
    NN.addNotes(ttl,desc);
    setTtl('Add title here');
    setDesc('Description');
  }
  return (
    <div className="container my-3">
      <h1>ADD A NOTE</h1>
      <form className="my-3">
        <div class="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Title
        </label>
        <textarea
          
          onChange={handleOnChangettl}
          value={ttl}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="1"
          // style={style}
        ></textarea>
        </div>
        <div class="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          
          onChange={handleOnChangedesc}
          value={desc}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
          // style={style}
        ></textarea>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={onClick} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <Notes />
    </div>
  );
}
