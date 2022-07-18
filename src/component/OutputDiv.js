import React from "react";
import Output from "./Output";
import { nanoid } from "nanoid";

export default function OutputDiv(props){
  const ouputData= props.output
  const elements = ouputData.map(each => {
    
    return <Output 
             prevurl = {each.prevurl}
             shorturl  = {each.shorturl}
             copied = {each.copied}
             delete = {props.delete}
             id = {each.id}
             key = {nanoid()}
             copy = {props.copy}
            />
  })
  return(
    <div className="outputs">
     {elements}
    </div>
  )
}