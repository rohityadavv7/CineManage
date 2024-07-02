import { createSlice } from "@reduxjs/toolkit";

const initialState={
    NowPlaying:[],
    allMovies:[],
    MoviesByGenre:{},
    TopMovies:{}
}

const movieSlice = createSlice({
    name:"movieSlice",
    initialState:initialState,
    reducers:{
        setAllMovies(state,value){
            state.allMovies = value.payload
        },
        setMoviesByGenre(state,value){
            state.MoviesByGenre = value.payload
        },
        setTopMovies(state,value){
            state.TopMovies = value.payload
        },
        setNowPlaying(state,value){
            state.NowPlaying = value.payload
        }
    }
})

export const {setNowPlaying, setAllMovies, setMoviesByGenre, setTopMovies } = movieSlice.actions
export default movieSlice.reducer