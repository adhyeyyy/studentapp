import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import AddStudents from './AddStudents'

const View = () => {
    var[update,setUpdate]= useState(false)
    var[selected,setSelected]= useState([])
    var[students,setStudents]= useState([])
    useEffect(()=>{
     axios.get("http://localhost:3005/students")
      .then(response=>{setStudents(students=response.data)
      console.log(students)
    })
      .catch(error=>console.log(error))   
    },[])
    const deleteValue=(id)=>{
      console.log(id)
      axios.delete("http://localhost:3005/students/"+id)
      .then(response=>{
        alert("Succesfully Deleted")
        window.location.reload(false)
      })
      .catch(error=>console.log(error))
    }
    const updateValue=(value)=>{
      setSelected(value)
      setUpdate(true)
    }
    var finalJSX = <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Grade</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {students.map((value,index)=>{
            return <TableRow>
              <TableCell>{value.id}</TableCell>
              <TableCell>{value.name}</TableCell>
              <TableCell>{value.grade}</TableCell>
              <TableCell>
                <Button  variant="contained" onClick={()=>deleteValue(value.id)}>Delete </Button> 
               
                </TableCell>
                <TableCell> <Button variant="contained" color='error' onClick={()=>updateValue(value)} >Update</Button></TableCell>
            </TableRow>
          })}
        </TableBody>
    </Table>
  </TableContainer>

 if(update)
  finalJSX=<AddStudents data={selected} method ="put" />
  return (
  
  finalJSX )

 
}

export default View
