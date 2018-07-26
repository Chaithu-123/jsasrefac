let curCol = null;
let currentmovie = null;
let state;
import { store } from '../store'

// Rendering Movie

export const renderCollection = {
    getmovie: (_showMovieCollection) => {

        $.getJSON("http://localhost:3000/MovieData/",
            (data, status) => {
                console.log(data);
                $("#container").html("");
                for (let i of data) {
                    $("#container").append(`
  <div class="card" id="card_cont" >
    <header class="container" id="title_cont">
      <h2> ` + i.Name + ` </h2>
    </header>
    <div class="container" id="body_cont">` + i.Desc + `</div>
    <button name ="subject" id="edit` + i.id + `" type="submit" value="edit">Edit
    </button>
  </div>`);
                    $("#edit" + i.id).click(_showMovieCollection);
                }

            });
    },
    showMovieCollection: (e) => {
        let curElement = e.currentTarget;
        let curColId = curElement.id.substr(4);

        $.getJSON("http://localhost:3000/MovieData/",
            (data, status) => {
                curCol = jQuery.extend(true, {}, data.filter(i => i.id == curColId)[0]);
                $(".modal-body #col_mName").val(curCol.Name);
                let m_ul = $("#col_movielist");
                m_ul.html("");
                let col_Movies = curCol.Movies.trim() == "" ? [] : JSON.parse(curCol.Movies);
                if (col_Movies.length > 0) {
                    for (let i of col_Movies) {
                        m_ul.append(`<li id="mli` + i.id + `">` + i.title + `<button type="button" id="del` + i.id + `" value="Reset"> Del </button>
                        </li>`);
                        $("#del" + i.id).click((event) => {
                            deleteMovieCollection.deletecollection(event)
                        });
                    }
                } else {
                    m_ul.append(`<li>No Movies</li>`)
                }

                $("#showCol").modal("show");


            });
    }

}

// Save Movie To Collection

export const saveMovieCollection = {
    savemovie: () => {
        $("#save").click(() => {
            let modaltitle = $("#myModal input[id='myModalLabel']").val();
            let modalbody = $("#myModal input[id='myModalbody']").val();
            let moviesdata = [];

            $.post("http://localhost:3000/MovieData/", {
                    Name: modaltitle,
                    Desc: modalbody,
                    Movies: JSON.stringify(moviesdata)
                },
                (data, status) => {

                    $("#container").append(`<div class="card" id="card_cont">
    <header class="container" id="title_cont">
      <h2> ` + data.Name + ` </h2>
    </header>
    <div class="container" id="body_cont">
     ` + data.Desc + `</div></div>`);
                });
        });
    }

}




// Delete Movie From Collection

export const deleteMovieCollection = {

    deletecollection: (e) => {
        let delElement = e.currentTarget;
        console.log(e)
        let delId = delElement.id.substr(3);
        let curCol_Movies = curCol.Movies.trim() == "" ? [] : JSON.parse(curCol.Movies);
        let mIndex = curCol_Movies.findIndex(x => x.id == delId);
        curCol_Movies.splice(mIndex, 1);
        $("#mli" + delId).remove();



        $.ajax({
            url: "http://localhost:3000/MovieData/" + curCol.id,
            method: "PUT",
            data: {
                "Name": curCol.Name,
                "Desc": curCol.Desc,
                "Movies": JSON.stringify(curCol_Movies)
            },
            success: function(result) {
                alert("Movie Successfully Deleted From Collection");
            }
        });

    }



}


// // edit collection
// export const editMovieCollection = {
//     onEditMovieCollection: (e) => {
//         $(".form-row #lbl_mName").text(currentmovie.title);
//         $.getJSON("http://localhost:3000/MovieData/",
//             (data, status) => {
//                 let collectionDataList = data;
//                 let modalColComboBox = $(".form-row #selcolletion");
//                 modalColComboBox.html('');
//                 for (let i of collectionDataList) {
//                     modalColComboBox.append(`<option id="copt` + i.id + `">
//                                        ` + i.Name + `
//                                    </option>`);
//                 }

//                 $("#addMovieToCollectionModal").modal('show');
//                 $("#btn-addmovie").click(e => {
//                     let form = $('#addmovieform')[0];
//                     let selectedOptionId = $('.form-row #selcolletion option:selected')[0].id;
//                     if (form.checkValidity() === false) {
//                         e.preventDefault();
//                         e.stopPropagation();
//                     }
//                     form.classList.add('was-validated');
//                     addMovieToCollection(selectedOptionId.substr(4), currentmovie, collectionDataList);
//                 });
//             });


//     }
// }

// Adding Movie To User Collection

export const addMovieToCollection = {

    movieToCollection: (cId, mdata, colDataList) => {
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


            $.ajax({
                url: "http://localhost:3000/MovieData/" + colDataList[cindex].id,
                method: "PUT",
                data: {
                    "Name": colDataList[cindex].Name,
                    "Desc": colDataList[cindex].Desc,
                    "Movies": movieStrData,
                },
                success(result) {
                    alert("Movie successfully added");
                }
            });

        }
    }
}
store.subscribe(() => {
        state = store.getState();
        console.log("State", state);
    }

)