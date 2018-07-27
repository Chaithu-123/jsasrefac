import { createHtmlTemplate } from "../common"
import { appConfig } from "../appConfig"

const pMovieCardClasses = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9", "tile10", "tile11", "tile12"]

export const getPopularMovieContainer = () => {

    const pMovieTemp = `<div id="whole_content">
        <div id="pop_mov">
            <h4>Popular Movies</h4>
        </div>
        <div class="container">
            <div id="movie_list" class="row">
            </div>
        </div>
        </div>`
    return createHtmlTemplate(pMovieTemp)
}

export const getPopularMovieCards = (pdata) => {
    let pMovieCardTempStr = ""
    pdata.forEach((i) => {
        pMovieCardTempStr += `<div class="${pMovieCardClasses[0]} card-content col-lg-4 moviecard">
                            <a class = "movie-info" href = "#">
                                <img id ="pimg_${i.id}"
                                src = "${appConfig.baseImgURL}/w185${i.poster_path}"
                                alt = "${i.title}" >
                                <div class="info">
                                    <span class="info-name d-block text-light">${i.title}</span>
                                </div>
                            </a>
                        </div>`
    })
    return createHtmlTemplate(pMovieCardTempStr, true)
}