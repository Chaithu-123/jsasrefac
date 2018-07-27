import { renderHtmlToContainer } from "../common"
import { getPopularMovieContainer, getPopularMovieCards } from "./popularMovieView"
import { dataService } from "../services/dataService"
import { createMovieDetail } from "../moviewDetails/movieDetailscontroller"



export const createPopularMovieContainer = () => {
    const pMoviehtmlTemp = getPopularMovieContainer()
    renderHtmlToContainer(pMoviehtmlTemp, "main")
}

export const createPopularMovieCards = () => {
    dataService.getPopularMovieData().then((data) => {
        if (data) {
            const pMovieCardsTemplate = getPopularMovieCards(data.results)
            const mcardlist = pMovieCardsTemplate.querySelectorAll(".moviecard")
            mcardlist.forEach((item) => {
                item.addEventListener("click", (event) => {
                    onClickMovieCard(event)
                })
            });
            renderHtmlToContainer(pMovieCardsTemplate, "#movie_list")
        }
    })

}

export const onClickMovieCard = (event) => {
    const curEle = event.currentTarget
    const curMovieImgId = curEle.getElementsByTagName("img")[0].id
    const mId = curMovieImgId.substr(5)
    console.log(mId)
    createMovieDetail(mId, "#movie_details")
}