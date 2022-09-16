import { Container, Paper } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function MoviePage() {
    const paperStyle={
        padding:"50px, 20px",
        width:600,
        height: "auto",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"30px"
    }
    interface Movie {
        id:number;
        name: string;
        rating: number;
    }

    const [movies,setMovies]=useState([]);

    //this should auto refresh the component if it sees any changes 
    useEffect(()=>{
        fetch("http://localhost:8080/api/all")
        .then(response => response.json())
        .then(res => setMovies(res))
        .catch(err=> console.log(err.message))
    },[])

    return (
        <Container>
            <Paper elevation={4} style={paperStyle}>
        <h1>Movies</h1>
        
      {movies.map((mov:Movie) => (<Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={mov.id}>
        Id:{mov.id}<br></br>
        Name:{mov.name}<br></br>
        Rating:{mov.rating}
      </Paper>))}
        
            </Paper>
        </Container>
    )
        
    
}