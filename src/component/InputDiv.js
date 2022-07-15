import React from "react";

export default function InputDiv(props){

  let inputError= props.error ? 'input-error' : ''
  let errorMessage = props.error || props.loading || props.success ? 'display-error-message' : ""
  let errorcolor = props.error ? 'error-color' : ''
  let successcolor = props.success ? 'success-color' : ''
  return(
    <div className="input-div">
      <div className="input-div-bg">
        <input 
          type='text'
          className={`input ${inputError}`}
          placeholder="Shorten a link here..."
          onChange={props.onchange}
          onClick = {props.oninputclick}
          value = {props.value}
          ref= {props.url}
          onKeyPress={(e) => e.key === 'Enter' && props.onclick}
        />
        <button className="input-btn" onClick={props.onclick}>Shorten It!</button>
        <p className={`error-message ${errorMessage} ${errorcolor} ${successcolor}`}>{props.errormessage}</p>
      </div>
    </div>
  )
}