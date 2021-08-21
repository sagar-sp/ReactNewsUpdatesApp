import React, {useState}  from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted To Upper Case','success')
    }
    const handleOnChange = (event) =>{
        console.log('handleOnChange');
        setText(event.target.value); 
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText); 
        props.showAlert('Converted To Lower Case','success')
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#08334b'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} 
            style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#08334b'}}></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert To Uppercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert To Uppercase</button>
        </div>
        <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#08334b'}}>
            <h1>Your Text Summary</h1>
            <p><b>{text.split(" ").length-1}</b>words and <b>{text.length}</b> Characters</p>
            <p><b>{0.008 * text.split(" ").length}</b> Minutes To Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to preview it here"}</p>
        </div>
        </>
    );
}

