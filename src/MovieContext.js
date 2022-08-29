import React,{useState, createContext} from "react";
import MovieList from "./MovieList";

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState ([{        
        name: 'Inception',
        price: '$10',
        id: 2566124
    },
    {
        name: 'Harry Potter',
        price: '$10',
        id: 23124
    },
    {
        name: 'Avatar',
        price: '$10',
        id: 23524
    },
    {
        name: 'Spartians',
        price: '$10',
        id: 25243
    }
]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );

}