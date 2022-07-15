import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Output(props){
  const copyText = props.copied ? 'Copied' : 'Copy'
  const copiedStyle = props.copied ? 'copied' : ''

  return(
    <div className="output">
      <div className='left-side'>
        <p className="output_prevurl">{props.prevurl}</p>
      </div>
      

      <div className='right-side'>
        <p className="output_currenturl">{props.shorturl}</p>
        <div className='btn-div'>
            <CopyToClipboard text={props.shorturl} >
            <button className={`output_btn ${copiedStyle}`} onClick={(event) => props.copy(props.id) }>{copyText}</button>
          </CopyToClipboard>
          <span className="output_delbtn"><FontAwesomeIcon icon={faTrashCan}  className="trash" onClick={(event) => props.delete(props.id)}/></span>
        </div>
        
      </div>
  </div>
  )
}