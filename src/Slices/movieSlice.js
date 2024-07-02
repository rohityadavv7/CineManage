import { createSlice } from "@reduxjs/toolkit";

const initialState={
    NowPlaying:[],
    allMovies:[],
    MoviesByGenre:{},
    watchlist:[]
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
        setWatchlist(state,value){
            state.watchlist = value.payload
        },
        setNowPlaying(state,value){
            state.NowPlaying = value.payload
        }
    }
})

export const {setNowPlaying, setAllMovies, setMoviesByGenre, setWatchlist } = movieSlice.actions
export default movieSlice.reducer