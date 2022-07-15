import React from "react";
import Data from "./section2Data";
import Box from "./Box";
import { nanoid } from "nanoid";


export default function Section2(){
  const elements = Data.map(each => {
    return <Box 
             id= {each.id}
             img = {each.img}
             header = {each.head}
             para = {each.para} 
             key = {nanoid()}
            />
  })
  return(
    <section className="section2">
      <div className="section2-header-component">
        <h3 className="section2-header-component-header"> Advanced Statistics</h3>
        <p className="section2-header-component-para">  Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className="section2-body-component">
        <div className="boxes">
          {elements}
        </div>
        <div className="connecting-lines"></div>
      </div>
    </section>
  )
}