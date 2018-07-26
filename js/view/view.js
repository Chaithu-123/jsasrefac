import { appendMovieInfo } from "../controller/controller"

const baseURL = "https://api.themoviedb.org/3/";
const APIKEY = "0857f3bcecfb71367f56290556a3e85c";
export const onPopularMovieClick = (evt) => {
    let currentEle = evt.currentTarget;
    let apiurl = baseURL + 'movie/' + currentEle.id.substr(5) + '?api_key=' + APIKEY;
    fetch(apiurl)
        .then(result => result.json())
        .then((data) => {
            //process the returned data
            appendMovieInfo(data, 'movie_details');
        })

};