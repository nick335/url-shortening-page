import React, { useCallback } from "react";
import InputDiv from "./InputDiv";
import axios from "axios";


export default function Section1(){
  const [input, setInput]= React.useState('')
  const [error, setError] = React.useState(false)
  const [url, setUrl] = React.useState('')
  const [result, setResult] = React.useState()
  const [errormessage, setErrorMessage] = React.useState('')
  // const [output, setOutput] = React.useState([])
  
  const urlRef = React.useRef('')
  const fetchData = useCallback( async () => {
    try {
      // setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`);
      setResult(res.data.result);
      console.log(res)
      console.log(res.data.result)
    } catch(err) {
      // setError(err);
      console.log('error')
    } finally {
      // setLoading(false);
      console.log('loading')
    }
  }, [url]) 


  React.useEffect(() => {

  fetchData()

  }, [fetchData])

  
  function handleChange(event){
    setInput(event.target.value)
  }
   function handleClick(){
      setUrl(urlRef.current.value)
      setInput('')
      console.log(result)
      if(result){
        if(result.ok){
          const object = {
            prevurl: result.result.original_link,
            shorturl : result.result.full_short_link
          }
          
          console.log(object)
        }else{
          setError(true)
          setErrorMessage(result.error)
          setResult('')

        }
      }
    
  }
  function handleInputClick(){
    setError(false)
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
      />
    </section>
  )
}