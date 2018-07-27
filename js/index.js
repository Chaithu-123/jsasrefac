import '../scss/styles.scss';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./search";


import { createPopularMovieContainer, createPopularMovieCards } from "./popularmovies/popularMoviecontroller"
import { onPopularMovieClick, appendMovieInfo } from "./controller/controller"
console.log(appendMovieInfo)



createPopularMovieContainer()
createPopularMovieCards()
onPopularMovieClick()
appendMovieInfo()