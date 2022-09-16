import { Paper } from "@mui/material";
import MovieForm from "../form/MovieForm";
import MoviePage from "../movielist/MoviePage";
import NavBar from "../navbar/NavBar";

export default function LandingPage(){
    // const m={
    //     marginLeft:"40%",
    //     marginTop:"100px"
    // }
    return <div>
        <header>
            <NavBar/>
        </header>
            <MovieForm/>
            <MoviePage/>
    
    </div>
}