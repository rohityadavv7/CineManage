import { createSlice } from "@reduxjs/toolkit"

const initialStata = {
    theme : localStorage.getItem('theme')?(localStorage.getItem('theme')):"autumn"
}

const themeSlice = createSlice({
    name:"theme",
    initialState:initialStata,
    reducers:{
        setTheme(state,value){
            state.theme = value.payload
        }
    }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer