import React, { useEffect, useState, useRef } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();
  const nn = useContext(noteContext);
  const [showModal, setShowModal] = useState(false);
  const [id , setId] = useState();
  const [ttl, setTtl] = useState('');
  const [desc ,setDesc] = useState('');
  useEffect(() => {
    if(localStorage.getItem('token')){
    nn.getNotes();}
    else{
      navigate("/Login");

    }
  }, [nn.notes]);

  const handleShowModal = () => {
    setShowModal(true);
   
    
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  let ref = useRef('');
  const updateNote= (note)=>{
    ref.current.click();
    setId(note);
    setTtl(note.title);
    setDesc(note.description);
  }
  const handleOnChangettl = (e)=>{
    setTtl(e.target.value);
  }
  const handleOnChangedesc = (e)=>{
    setDesc(e.target.value);
  }
  const edittt = ()=>{
    nn.editNotes(id._id,ttl,desc);
    // console.log(ttl, desc);
    setTtl('');
    setDesc('');
    handleCloseModal();
  }
  
  return (
    <>
      <h1>YOUR NOTES</h1>

      <Button style={{display: "none"}} ref={ref} variant="primary" onClick={handleShowModal}>
        Launch demo modal
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <div className="container">
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
        {/* <button onClick={onClick} type="submit" class="btn btn-dark"> */}
          {/* Submit */}
        {/* </button> */}
      </form>
      </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          
          <Button variant="primary" onClick={()=>{edittt()}}>Save changes</Button>
        </Modal.Footer>
      </Modal>

      <div className="row">
        <p>
        {nn.notes.length==0?'No notes here':''}
        </p>
        {nn.notes.map((note, index) => (
          // <div  >
            <div key={note._id} className="card col-md-3 my-3 mx-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <i
                  onClick={() => {
                    nn.deleteNotes(note._id);
                  }}
                  className="fa-solid fa-trash mx-2"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fa-solid fa-file-pen mx-2"
                  style={{ cursor: "pointer" }}
                  onClick={()=>{updateNote(note)}}
                ></i>
              </div>
            </div>
          // </div>
        ))}
      </div>
    </>
  );
};

export default Notes;
