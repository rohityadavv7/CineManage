const REACT_APP_BASE_URL = "http://localhost:4000"

export const userAPIS = {
    LOGIN_API: REACT_APP_BASE_URL+"/auth/login",
    SIGNUP_API:REACT_APP_BASE_URL + "/auth/signup"
}

export const moviesAPIS = {
    GET_WATCHLIST_API: REACT_APP_BASE_URL + "/movies/watchlist"
}