const BASE_URL = import.meta.env.VITE_API_URL

export const userAPIS = {
    LOGIN_API: BASE_URL+"/auth/login",
    SIGNUP_API:BASE_URL + "/auth/signup"
}

export const moviesAPIS = {
    GET_WATCHLIST_API: BASE_URL + "/movies/watchlist",
    ADD_TO_WATCHLIST_API: BASE_URL + "/movies/addToWatchlist",
    REMOVE_FROM_WATCHLIST_API: BASE_URL + "/movies/watchlist/remove",
    EDIT_MOVIE_API: BASE_URL + "/movies/edit",
    UPDATE_WATCHED_API: BASE_URL + "/movies/setwatched",
    DELETE_WATCHED_API: BASE_URL + "/movies/deletefromwatchlist",
    ADD_MOVIE_API: BASE_URL + "/movies/addMovie",
    GET_WATCHEDMOVIES_API: BASE_URL + "/movies/watchedmovies"
}