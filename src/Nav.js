import React, {useContext} from "react";
import { MovieContext } from "./MovieContext";


const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>       
            <h3>Onur's Best Movie Collection</h3>      
            <p>List of Movies: {movies.length}</p>
        </div>        
    );
};

export default Nav;