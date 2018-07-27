import '../scss/styles.scss';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./search";

import { renderCollection, saveMovieCollection, deleteMovieCollection } from './modal'
import { createPopularMovieContainer, createPopularMovieCards } from "./popularmovies/popularMoviecontroller"
import { getMovieDetailsTemplate } from './moviewDetails/movieDetailsView'
import { registerEvent } from './common'
import { onSaveCard } from "./userCollection/userCollectionController"




createPopularMovieContainer()
createPopularMovieCards()
$("#save").click((event) => {
    onSaveCard(event, $("#myModal input[id='myModalLabel']").val(), $("#myModal input[id='myModalbody']").val())
})

renderCollection.getmovie(renderCollection.showMovieCollection)
    //saveMovieCollection.savemovie()

// registerEvent("#save", onSaveCard($("#myModal input[id='myModalLabel']").val(), $("#myModal input[id='myModalbody']").val()))