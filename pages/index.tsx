import type { NextPage } from 'next'
import Movie from "../Components/Movie";
import { useEffect, useState } from 'react';
import Link from "next/link";
import { Nav} from 'react-bootstrap'
const FEA_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"; 
const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const Home: NextPage = () => {

  const [movies,setMovies]=useState<any[]>([]);
  const [searchTerm,searchEl]=useState("");
  useEffect( () =>{
    fetch(FEA_API)
    .then((res)=>{ return res.json()})
    .then((data)=>{
    //console.log(data.results);
    return setMovies(data.results)});
  },[]);

 
  const Handler=(e:any)=>{
    searchEl(e.target.value);
  }
  const Go=(e:any)=>{
      e.preventDefault();
      if(searchEl){
        console.log(searchTerm)
      fetch(SEARCH_API+searchTerm).then((res)=>res.json()).then((data)=>{setMovies(data.results)});
      searchEl("");
      }
  }

  return (
    <>
    <Nav className="navbar">
    <div className="container">
    <Link href="/">
      <h2 className="navbar-brand">IMDB RATINGS</h2>
    </Link>
    
    <form onSubmit={Go}>
    <input onChange={Handler} type="text" placeholder="Search . . . . . ." className="search" value={searchTerm} />
    </form>  
  </div>
</Nav>
    <div className="movie_container container">
      {movies.length>0 && movies.map((movie)=>{
      return ( <Movie key={movie.id} data={movie}/>)
      })}
      <div className='not_found'>
      {
        (movies.length==0)&&<h1 style={{color:"white"}}>No movies Found</h1>
      }
      </div>
    </div>
    </>
  
  )
}

export default Home
