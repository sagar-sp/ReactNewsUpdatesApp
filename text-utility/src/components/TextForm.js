import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // setText("new Text"); //Way To change The State

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppecase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
      </div>
      <div className="container my-2">
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").length === " " ? text.split(" ").length-1 : text.split(" ").length} words, {text.length} characters</p>
          <p>{0.008 * text.split(" ").length}Minutes read</p>
          <h3>Preview</h3>
          <p>{text}</p>
      </div>
    </>
  );
}
