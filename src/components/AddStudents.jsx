import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddStudents = () => {
    var[input,setInput]=useState({
        name:'',
        grade:''
    })
    const inputHandler = (e)=>{
        const{name,value}=e.target
        setInput({...input,[name]:value})
    }
    const readValues= ()=>{
        console.log("clicked")
        axios.post("http://localhost:3005/students",input)
        .then(response=>{
            alert("Successfully added")
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>
   <p></p> <TextField id="outlined-basic" label="Name" variant="outlined" name='name' value={input.name}onChange={inputHandler} />
    <Typography>{input.name}</Typography><br></br>
    <TextField id="outlined-basic" label="Grade" variant="outlined" name='grade' value={input.grade}onChange={inputHandler} />
    <Typography>{input.grade}</Typography><br></br>
    <Button variant="contained" onClick={readValues} >Submit</Button>
    </div>
  )
}

export default AddStudents
