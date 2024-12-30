
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  const [principle,setPrinciple]=useState(0)
  const [rate,setRate]=useState(0)
  const [year,setYear]=useState(0)
  const [interest,setInterest]=useState(0)

  const [invalidPriciple,setInvalidPrinciple]=useState(false)
  const [invalidRate,setInvalidRate]=useState(false)
  const [invalidYear,setInvalidYear]=useState(false)

  const validateInputs= (tag)=>{
    // console.log(tag);
    const {name ,value}=tag
    console.log(name,typeof value);
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    if(name=='principle'){
      setPrinciple(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidPrinciple(false)
      }else{
        setInvalidPrinciple(true)
      }
    }else if(name=='rate'){
      setRate(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidRate(false)
      }else{
        setInvalidRate(true)
      }
    }else{
      setYear(value)
      if(!!value.match(/^\d+(\.\d+)?$/)){
        setInvalidYear(false)
      }else{
        setInvalidYear(true)
      }
    }
    
    
  }
 
  const handleCalculate=(e)=>{
    // event handler of html
    e.preventDefault()
    if(year && rate && principle){
      setInterest(principle*rate*year/100)
    }else{
      alert("Please fill the form completely")
    }
  
  }

  const handleReset=()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }
  return (
    <>
      <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-cemter bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
        <h1 className='text-center'>Simple Interest Calculator</h1>
        <p className='text-center'>Calculate your simple interest easily!</p>
        <div className='bg-warning p-3 texy-light text-center rounded'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder' >Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          <div className='mb-3'>
            {/* principle amount */}
          <TextField name='principle' value={principle||"" } onChange={e=>validateInputs(e.target)} className='w-100' id="outlined-principle" label="Principle Amount" variant="outlined" />
          </div>
          {/* Invalid Principle */}
          {
           invalidPriciple && <div className='text-danger fw-bolder mb-3'>
            Invalid Principle Amount
          </div>
          }

          <div className='mb-3'>
            {/* Rate of interest  */}
          <TextField name='rate'  value={rate||"" }  onChange={e=>validateInputs(e.target)} className='w-100' id="outlined-rate" label="Rate of Interest" variant="outlined" />
          </div>
          {/* Invalid Rate */}
          {
           invalidRate&& <div className='text-danger fw-bolder mb-3'>
            Invalid Rate
          </div>
          }

          <div className='mb-3'>
            {/* number of year  */}
          <TextField name='year'  value={year||"" }   onChange={e=>validateInputs(e.target)} className='w-100' id="outlined-year" label="Year" variant="outlined" />
          </div>
          {/* Invalid Rate */}
          {
           invalidYear&& <div className='text-danger fw-bolder mb-3'>
            Invalid Year
          </div>
          }

          <Stack direction="row" spacing={2}>
          <Button type='submit' onClick={handleCalculate} disabled={invalidPriciple||invalidRate|| invalidYear} style={{width:'50%', height:'70px'}} className='bg-dark' variant="contained">Calculate</Button>
          <Button onClick={handleReset} style={{width:'50%', height:'70px'}} className='text-dark border-dark' variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
      </div>
    </>
  )
}

export default App
