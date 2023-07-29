import React, { useEffect, useState } from 'react';
import AllMovies from '../sources/movies.json';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Pagination from './Pagination';


const SectionMovieGenerator = (props) => {
    const navigate = useNavigate();
    const movie = {
        Title: props.title,
        Year: props.year,
        imdbID: props.imdbID,
        Type: props.Type,
        Poster: props.Poster
    }

    const selectMovie = () => {
        let path = `/film`
        navigate(path, {state:movie});
    }

    return(
        <div className='film' onClick={selectMovie}>
            <p>{movie.Title}</p>
            <img src={movie.Poster} alt={movie.Title}/>
        </div>
    );
}

const TypeSection = () => {
    let { type } = useParams();
    const [moviesData, setMoviesData] = useState([]);
    const [dataReady, setDataReady] = useState(false);
    const [moviesList, setMoviesList] = useState([]);

    // For Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(24);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchMovies();
                setMoviesData(response);
                setDataReady(true);
            } catch (error) {
                console.log("Error While Fetching: " + error);
            }
        };
        fetchData();
    }, []);

    const fetchMovies = () => {
        return Promise.resolve(AllMovies);
    };

    useEffect(() => {
        const fetchMoviesData = async () => {
            if (dataReady) {
                let movietype;
                let movietypelist = [];
                let moviesOfType;

                for (movietype in moviesData) {
                    movietypelist.push(Object.keys(moviesData[movietype])[0]);
                }

                if (movietypelist.includes(type)) {
                    for (movietype in moviesData) {
                        if (Object.keys(moviesData[movietype])[0] === type) {
                            moviesOfType = Object.values(moviesData[movietype]);
                        }
                    }

                    const updatedMoviesList = [];
                    try {
                        const responses = await Promise.all(
                            moviesOfType[0].map(movie => axios.get(`https://www.omdbapi.com/?apikey=fdf07fc0&s=${movie}`))
                        );

                        responses.forEach(response => {
                            if (response.data && response.data.Search && Array.isArray(response.data.Search)) {
                                updatedMoviesList.push(...response.data.Search);
                            }
                        });

                        setMoviesList(updatedMoviesList);
                    } catch (error) {
                        console.log("Error Occurred While Searching/Fetching " + error);
                    }
                }
            }
        };

        fetchMoviesData();
    }, [dataReady, moviesData, type]);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = moviesList.slice(firstPostIndex, lastPostIndex);

    return (
        <>
            <div className='container filmsection'>
                <div className='films-container'>
                    <h3>{type}</h3>
                    {currentPosts.map((movie, index) => <SectionMovieGenerator 
                                                            key={index}
                                                            title={movie.Title} 
                                                            Poster={movie.Poster}
                                                            year={movie.Year}
                                                            imdbID={movie.imdbID}
                                                            Type={movie.Type}/>)}
                </div>
            </div>
            <div className='container container-pagination'>
                <Pagination totalPosts={moviesList.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        </>
    );
};

export default TypeSection;