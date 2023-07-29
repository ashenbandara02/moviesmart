import { useNavigate } from 'react-router-dom';
import movies from '../sources/movies.json';

const Categories = (props) => {
    const navigate = useNavigate();
    const categorytype = props.type;

    const Sendtothecatergory = () => {
        let path = `/categories/${categorytype}`;
        navigate(path);
    };

    return (
        <div className='category' onClick={Sendtothecatergory}>
            {categorytype}
        </div>
    );
};

const CategoriesList = () => {
    let movietype;
    let movielist = [];
    for (movietype in movies) {
        movielist.push(Object.keys(movies[movietype])[0]);
    }

    return (
        <div className='container movies'>
            <h3>Categories</h3>
            {movielist.map((movie) => (
                <Categories key={movielist.indexOf(movie)} type={movie} />
            ))}
        </div>
    );
};

export default CategoriesList;