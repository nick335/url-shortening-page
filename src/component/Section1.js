import React, { useCallback } from "react";
import InputDiv from "./InputDiv";
import { useUpdateEffect } from "react-use";
import { nanoid } from "nanoid";
import OutputDiv from "./OutputDiv";


export default function Section1(){
  const [input, setInput]= React.useState('')
  const [error, setError] = React.useState(false)
  const [url, setUrl] = React.useState('')
  const [success, setSuccess] = React.useState(false)
  const [errormessage, setErrorMessage] = React.useState('')
  const [loading, setLoading] = React.useState(false);
  const [output, setOutput] = React.useState(JSON.parse(localStorage.getItem('shortenedUrl')))
  
  const urlRef = React.useRef('')


 React.useEffect(()=>{
  localStorage.setItem('shortenedUrl', JSON.stringify(output))
 }, [output])

  const fetchData = useCallback( () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((data) => data.json())
    .then((actualData) => {
      if(!actualData.ok){
        setLoading(false)
        setError(true)
        setErrorMessage(actualData.error)
        setInput('')
      }else{
        setLoading(false)
        setSuccess(true)
        setErrorMessage('successful')
        const resultObject = {
          prevurl:actualData.result.original_link,
          shorturl :actualData.result.full_short_link,
          copied : false,
          id: nanoid()
        }
        setOutput(prevItems => [resultObject, ...prevItems])
        setInput('')
      }
    })
  }, [url]) 

  useUpdateEffect(() => {
      fetchData()
  }, [fetchData])

  
  function handleChange(event){
    if(input === ''){
      setError(false)
      setLoading(false)
      setSuccess(false)
      setInput(event.target.value)
    }else{
      setInput(event.target.value)
    }
      
  }
   function handleClick(){

    if(!input.length){
      setError(true)
      setErrorMessage('please add a link')
    }else{
      setUrl(urlRef.current.value)
      setLoading(true);
      setErrorMessage('loading...')
    }
      
    
  }
  function handleInputClick(){
    setError(false)
    setLoading(false)
    setSuccess(false)
  }
  function handleDelete(id){
    const newState = output.filter(each => {
      return each.id !== id
  })
  setOutput(newState)
  }
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const handleCopy = async (id) =>{
    const newState = output.map(each => {
      if(each.id !== id){
        return {
          ...each,
          copied : false
        }
      }else{
        return{
          ...each,
          copied: true
        }
      }
    })
    setOutput(newState)
    await delay(5000);

    const resetState = output.map(each => {
      if(each.id === id){
        return{
          ...each,
          copied : false
        }
      }else{
        return {
          ...each,
          copied: false
        }
      }
    })
    setOutput(resetState)
  }

  return(
    <section className="section1">
      <InputDiv 
        onchange ={handleChange}
        onclick = {handleClick}
        oninputclick = {handleInputClick}
        error = {error}
        errormessage = {errormessage}
        value = {input}
        url={urlRef}
        loading = {loading}
        success = {success}
      />
      <OutputDiv 
        output = {output}
        delete = {handleDelete}
        copy = {handleCopy}
      />
    </section>
  )
}