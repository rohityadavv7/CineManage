import React from 'react'
import { setTopMovies } from '../../Slices/movieSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function TopMovies() {
    const {TopMovies} = useSelector((state) => state.movie)
    const {allMovies} = useSelector((state)=> state.movie);
    console.log("all movies in top movies-> ", allMovies)

    const dispatch = useDispatch();

    async function getMovies(){
        const options = {
        method: 'GET',
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        headers: {
            'x-rapidapi-key': 'a211301ae5msh5bd025961a8e47dp119d16jsn301392564ce5',
            'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
        };

        try {
            const response = await axios.request(options);
            const fetchedAllMovies = response.data;
            var setFetchedMovies = [];

            for(let i = 0;i < fetchedAllMovies.length-90;i++) {
                setFetchedMovies.push(fetchedAllMovies[i])
            }
            dispatch(setTopMovies(setFetchedMovies));
            console.log("all movies-> ",TopMovies)
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        
        getMovies()

    },[])

  return (
    <div>TopMovies</div>
  )
}

export default TopMovies