import { dataService } from "./dataService"
import { appConfig } from "../appConfig"


export const getMovieDetails = (movieid) => {
    const movie_URL = appConfig.baseURL + appConfig.mediaType + '/' + movieid + '?api_key=' + appConfig.APIKEY
    return dataService.getData(movie_URL);

}