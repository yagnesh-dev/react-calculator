import React from 'react';
import './outputRow.css';

const OutputRow = props =>{
    return <div>
        <input type ="text" className = "screen" readOnly style={props.textSize} value={props.value}></input>
    </div>
};
export default OutputRow;