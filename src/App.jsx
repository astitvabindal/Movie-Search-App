import { useEffect, useState } from 'react';
import Result from './components/Result'
import Search from './search.png'
import './App.css'
import  axios from 'axios';
const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`;
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
    const [movies,setMovies] = useState([1])
    const [search,setSearch] = useState("")

    const changeTheSearch = (event) =>{
        setSearch(event.target.value)
    }

    const getSearchMovies=()=>{
        axios.get(SEARCHAPI+search)
        .then(
            (response)=>{
                setMovies(response.data.results)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    const getAllMovies = () =>{
        axios.get(APIURL)
        .then(
            (response)=>{
                setMovies(response.data.results)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    useEffect(
        () =>{
            setMovies([])
            if(search === ""){
                getAllMovies()
            }
            else{
                getSearchMovies()
            }
            // eslint-disable-next-line
        },[search]
    )
  return (
    <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
      <div className="search-bar">
        <input type="text" placeholder='Enter movie name' value={search} onChange={changeTheSearch}/>
        <button type='submit' id="butt"><img id='image' src={Search} alt="" /></button>
      </div>
      
      {
        movies.length === 0
        ?
        <div className='text-3xl text-center mt-2'>Loading....</div>
        :
      <Result movies={movies} />
      }
    </div>
  );
}

export default App;