import React,{useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const onUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        // setText(text.toUpperCase());
        props.showAlert("Converted to uppercase","success");
    }
    const onLwClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClear=()=>{
        let newText="";
        setText(newText);
        props.showAlert("Text cleared","success");
    }
    const handleTextCopy=()=>{
      let text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard","success");
    }
    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed","success");
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'rgb(5 11 84 / 90%)'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary mx-2 my-2" onClick={onUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={onLwClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2"onClick={handleClear}>Clear all</button>
        <button className="btn btn-primary mx-2"onClick={handleTextCopy}>Text copy</button>
        <button className="btn btn-primary mx-2"onClick={handleExtraSpace}>Remove extra spaces</button>
      </div>
    </div>
    <div className="container " style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text summary</h2>
        <p>The text has {text === ''  ? 0 : text.split(" ").length} word and {text.trim().length } characters</p> 
        <p>{text.split(" ").length*0.008} minutes reading time</p>
        <h2>Preview</h2> 
        <p>{text.length>0?text:"Enter text in the textbox above to preview here"}</p>
    </div>
    </>
  );
}
