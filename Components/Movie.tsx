import Image from "next/image";
import imageLoader from "../imageLoader";
const IMG_API="https://image.tmdb.org/t/p/w1280";

const Movie=(props: { key: number,data: any })=>{
    return (<div className="movie">
        <Image src={IMG_API+props.data.poster_path} alt={props.data.title} width="280px" height="300px"  unoptimized/>
        <div className="movie_info">
        <h5>{props.data.title}</h5>
        <span>{props.data.vote_average}</span> 
        </div>
        <div className="movie_over">
        <h3>Overview: </h3>
        <p>{props.data.overview}</p>    
        </div>
        </div>)
}

export default Movie;