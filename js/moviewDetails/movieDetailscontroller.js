import { getMovieDetailsTemplate } from '../moviewDetails/movieDetailsView'
import { dataService } from '../services/dataService'
import { renderHtmlToContainer, show_hideElement } from '../common'
import { appConfig } from '../appConfig'
import { addMovieToCollection } from "../userCollection/userCollectionController"

export let movieClickDetails = null
export let currentMovieDetails = null
export const createMovieDetail = (movieId, containerid) => {
    const movie_URL = appConfig.baseURL + appConfig.mediaType + '/' + movieId + '?api_key=' + appConfig.APIKEY
    dataService.getData(movie_URL).then((data) => {
        if (data) {
            currentMovieDetails = data
            const movieDetailsTemplate = getMovieDetailsTemplate(data, appConfig.baseImgURL)
                // const moviedetail = movieDetailsTemplate.querySelector(".moviede")
                // moviedetail.addEventListener("click", (event) => {
                //     this.onAddToCollection(event)
                // });
            show_hideElement('#whole_content', false)
            show_hideElement(containerid)
            $(containerid).html(``);
            renderHtmlToContainer(movieDetailsTemplate, containerid)
            $("#actionsave").click((event) => {
                addMovieToCollection(event)
            });
        }
    })
}