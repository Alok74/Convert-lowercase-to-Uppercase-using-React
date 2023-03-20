import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpcase=()=>{
    console.log("Uppercase was clicked")
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const [text,setText]=useState("Enter text here");
  //setText("Enter text");
  return (
<div>
  <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn primary" onClick={handleUpcase}>Convert to Uppercase</button>
</div>
  )
}
