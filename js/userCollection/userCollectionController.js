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
        addMovieToCollection(selectedOptionId.substr(4), currentMovieDetails, collectionDataList);
    });
}