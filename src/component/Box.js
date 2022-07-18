import React from "react";


export default function Box(props){
  const boxClass3 = props.id === 3 ? 'box-3' : ''
  const boxClass2 = props.id === 2 ? 'box-2' : ''
  return(
    <div className={`box ${boxClass3} ${boxClass2}`} >
      <div className="img-div">
        <img className="box-img" alt={props.header} src={props.img} />
      </div>
      <h3 className="box-header">{props.header}</h3>
      <p className="box-para">{props.para}</p>
    </div>
  )
}