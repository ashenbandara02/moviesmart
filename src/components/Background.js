import bgpic1 from "../sources/bgpic1.jpg"
import AboutUs from "./AboutPage";
import { Slide } from 'react-slideshow-image';
import axios from 'axios';

const slideImages = [
    {
        url: 'https://www.hollywoodreporter.com/wp-content/uploads/2018/12/spiderverse_mkt_mkp148_publicity_still_final_ykassai-h_2018.jpg?w=1296',
    },
    {
        url: 'https://i0.wp.com/batman-news.com/wp-content/uploads/2023/04/The-Flash-Movie-Poster-01.jpeg?fit=1638%2C2048&quality=80&strip=info&ssl=1',
    },
    {
        url: 'https://posterspy.com/wp-content/uploads/2023/03/Mario-movie-poster.jpg',
    },
];
const somemovies = [];
axios.get("https://www.omdbapi.com/?apikey=fdf07fc0&s=batman")
    .then(response => {
        for(let i=0; i<4; i++){
            somemovies.push(response.data.Search[i]);
        }
    })
    .catch(error => {
        console.log("Error: " + error);
    })


const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}
const SampleMoviesGenerator = (props) => {
    return(
        <div id="sample-movie">
            <img src={props.poster_url}/>
            <div class="image-overlay">
                <h4 class="overlay-text">{props.title}</h4>
            </div>
        </div>
    );
}

const PictureOne = () => {
    return (
        <div className="parent-container">
            <div className="container">
                <img src={bgpic1} />
                <h2 id="alt-bg1">The Movie that's <br />Best for you</h2>
            </div>
            <div className="container">
                <div className="slide-container">
                    <Slide>
                        {slideImages.map((slideImage, index) => (
                            <div key={index}>
                                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                </div>
                            </div>
                        ))}
                    </Slide>
                </div>
                <h2 id="alt-bg2">Some of Our Trending <br></br>Movies Reviewed...</h2>
            </div>
            <div className="container light">
                <h3>New Arrivals..</h3>
            </div>
            <div className="container small">
                <div className="sample-rated">
                    {somemovies.map(movie => 
                        <SampleMoviesGenerator key={somemovies.indexOf(movie)} poster_url={movie.Poster} title={movie.Title}/>)}
                </div>
            </div>
            <div className="container about">
                <AboutUs/>
            </div>
        </div>
    );
}



export default PictureOne;