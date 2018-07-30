import { dataService } from '../services/dataService'
import { userCollection } from './userCollectionView'
import { appConfig } from "../appConfig"
import { renderHtmlToContainer } from "../common"
import { store } from '../store'
import { movietoCollec } from './userCollectionView'
import { currentMovieDetails } from "../moviewDetails/movieDetailscontroller"
import { bootstrap } from "bootstrap"
window.bootstrap = bootstrap


export const createCard = (data, containerid) => {
    console.log("hello")
    const movieDetailsTemplate = userCollection.addCollectionDetailsModalTemplate(data, appConfig.baseImgURL)
    renderHtmlToContainer(movieDetailsTemplate, containerid)

}
export const onSaveCard = (event, name, desc) => {

    const cardData = {
        Name: name,
        Desc: desc,
        Movies: ''
    }

    dataService.postData("http://localhost:3000/MovieData/", cardData).then((data) => {
        if (data) {
            console.log(data)
            store.dispatch({ type: 'ADD_COLLECTION', details: data });
            //createCard(data, "#container")
        }
    })
}

export const renderCard = (data) => {
    console.log("hello")
    const movieDetailsTemplate = userCollection.addCollectionlistTemplate(data, appConfig.baseImgURL)
    if ($("#container").length > 0) {
        $("#container").html("")
        renderHtmlToContainer(movieDetailsTemplate, "#container")
    }
}


export const addMovieToCollection = (event) => {
    $(".form-row #lbl_mName").text(currentMovieDetails.title)
    const userColList = store.getState()
    const modalColComboBox = $(".form-row #selcolletion");
    modalColComboBox.html('');
    for (const i of userColList) {
        modalColComboBox.append(`<option id="copt` + i.id + `">
                                    ` + i.Name + `
                                </option>`);
    }

    $("#addMovieToCollectionModal").modal('show');
    $("#btn-addmovie").click(e => {
        let form = $('#btn-addmovie')[0];
        let selectedOptionId = $('.form-row #selcolletion option:selected')[0].id;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        form.classList.add('was-validated');
        addMovieClick(selectedOptionId.substr(4), currentMovieDetails, userColList);
    });
}

export const addMovieClick = (cId, mdata, colDataList) => {
    let cindex = colDataList.findIndex(x => x.id == cId);
    let movieData;
    let existMovieIndex;
    if (cindex != -1) {
        if (!(colDataList[cindex].Movies == "")) {
            movieData = JSON.parse(colDataList[cindex].Movies);
            existMovieIndex = movieData.findIndex(x => x.id == mdata.id);
            if (existMovieIndex == -1) {
                movieData.push(mdata);

            }
        } else {
            movieData = [];
            movieData.push(mdata);
        }
        let movieStrData = JSON.stringify(movieData);
        const putMovieData = {
            "Name": colDataList[cindex].Name,
            "Desc": colDataList[cindex].Desc,
            "Movies": movieStrData,
        }
        dataService.putData("http://localhost:3000/MovieData/" + colDataList[cindex].id, putMovieData).then((data) => {
            if (data) {
                console.log(data)
                store.dispatch({
                    type: 'ADD_MOVIE',
                    details: data
                })
                console.log("Movie successfully updated")
            }
        })
    }
}