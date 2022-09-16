import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button, Paper } from '@mui/material';
import { type } from 'os';

export default function MovieForm() {

    const[name,setName]=React.useState("");
    const[rating,setRating]=React.useState(0);
    const id=0;
    const paperStyle={
        padding:"50px, 20px",
        width:600,
        height:300,
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"30px"
    }

   const handleClick= ()=>{
    const movie={id,name,rating};

    fetch("http://localhost:8080/api/add", {

        method:"POST",
        headers: {"Content-Type":"application/json"},

        body: JSON.stringify(movie)})
        .then((response)=>{
    if(!response.ok){
        throw Error("could not fetch the data");
    }
    console.log(movie);
}).catch(err => {
    console.log(err.message);
})
   }

  return (

    <Container>
    <Paper elevation={4} style={paperStyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
        <br></br>
        <h2 style={{marginLeft:"20%"}} >Here you can add another movie</h2>
        <br></br>
      <TextField style={{marginLeft:"35%"}} id="outlined-basic" label="Movie Name" variant="outlined" value={name}  onChange={(e)=>{setName(e.target.value)}}/>
      <br></br>
      <TextField type="number" style={{marginLeft:"35%"}} id="outlined-basic" label="Movie Rating" variant="outlined" value={rating} onChange={(e)=>{setRating(Number(e.target.value))}} />
      <br></br>
      <Button variant="contained" style={{marginLeft:"44%"}} type="button"
      onClick={handleClick}>Submit</Button>

      
    </Box>
    </Paper>
    </Container>
  )
}

