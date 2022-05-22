import React,{useState} from 'react';
const FromText =  (props) => {
    const [text,setText] = useState("Lets Chenge the Text");
    const heandleUpClick = () => setText("you have some click" + text);
    const handleOnChange = (event) => setText(event.target.value);
    return(
        <div>
            <h3>{props.head}</h3>
            <div className="form-floating">
            <textarea className="form-control0" value={text} onChange={handleOnChange} placeholder="Leave a comment here" id="lbl"></textarea>
            <label htmlFor="lbl">Comments</label>
            </div>
            <button className="btn btn-success mt-2" onClick={heandleUpClick}>chenge</button>
        </div>
    );
}
export default FromText;