import '../scss/styles.scss';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./search";
import "./services/services";
import "./controller/controller1";


// import { deleteMovieCollection } from './services/renderCollection'
import { saveMovieCollection, editMovieCollection, addMovieToCollection } from './services/renderCollection'
import { renderCollection } from './services/renderCollection'
import { editCollection } from './store';
// import { popularMovies } from './view/view'



// saving movie to collection
saveMovieCollection.savemovie();



// rendering collection
renderCollection.getmovie(renderCollection.showMovieCollection);

// document.addEventListener('DOMContentLoaded', popularMovies.getConfig);

// edit movie collection
// editMovieCollection.onEditMovieCollection();



// add movies to collection
// addMovieToCollection.movieToCollection();