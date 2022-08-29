import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";


const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }
    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}])
    
    }
    return(
        <form onSubmit={addMovie}>
            <label>Movie: </label>
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={updateName} />
            <br/>
            <br/>
            <label>Price: </label>            
            <input 
                type="text" 
                name="price" 
                // pattern="[0-9] +"
                value={price} 
                onChange={updatePrice} />
            <br/>
            <br/>            
            <button>Submit</button>            
        </form>
    )
}

export default AddMovie;