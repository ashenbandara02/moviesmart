import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PerMovie = () => {
    let navigate = useNavigate; 
    let data = useLocation()
    if(data.state != null){
        return(
            <div className="container selectedmovie">
                <h1>{data.state.Title}</h1>
                <div className="smovie">
                    <img src={data.state.Poster}/>
                    <div className="movie-content">
                        <h4>Genre : <span id="ss">{data.state.Type}</span></h4>
                        <h4>imdbID : <span id="ss">{data.state.imdbID}</span></h4>
                        <h4><Link to={`https://www.imdb.com/title/${data.state.imdbID}`} target="_blank">View in IMDB</Link></h4>
                    </div>
                </div>
            </div>
        );

    }else{
        navigate("404");
    }
}

export default PerMovie;