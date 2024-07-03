import { createSlice } from "@reduxjs/toolkit";

const initialState={
    NowPlaying:[],
    allMovies:[],
    UpcomingMovies:{},
    watchlist:[],
    movieDetails:{},
    watchedMovies:[],
}

const movieSlice = createSlice({
    name:"movieSlice",
    initialState:initialState,
    reducers:{
        setAllMovies(state,value){
            state.allMovies = value.payload
        },
        setUpcomingMovies(state,value){
            state.UpcomingMovies = value.payload
        },
        setWatchlist(state,value){
            state.watchlist = value.payload
        },
        setNowPlaying(state,value){
            state.NowPlaying = value.payload
        },
        setMovieDetails(state,value){
            state.movieDetails = value.payload
        },
        setWatchedMovies(state,value){
            state.watchedMovies = value.payload
        },
    }
})

export const {setNowPlaying,setWatchedMovies, setAllMovies, setUpcomingMovies, setWatchlist ,setMovieDetails} = movieSlice.actions
export default movieSlice.reducer