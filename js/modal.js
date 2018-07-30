import { onClickMovieCard } from './popularmovies/popularMoviecontroller'
import { store } from "./store"


let curCol = null;

// Rendering Movie
export const renderCollection = {

        getmovie: (_showMovieCollection) => {
            $.getJSON("http://localhost:3000/MovieData/",
                (data, status) => {
                    console.log(data);
                    store.dispatch({ type: 'GET_COLLECTION', details: data })
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
                        // $("#edit" + i.id).click(_showMovieCollection);
                        $("#edit" + i.id).click((event) => {
                            _showMovieCollection(event)
                        });
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




                });
        }

    }
    // export const saveMovieCollection = {
    //     savemovie: () => {
    //         $("#save").click(() => {
    //             let modaltitle = $("#myModal input[id='myModalLabel']").val();
    //             let modalbody = $("#myModal input[id='myModalbody']").val();
    //             let moviesdata = [];

//             $.post("http://localhost:3000/MovieData/", {
//                     Name: modaltitle,
//                     Desc: modalbody,
//                     Movies: JSON.stringify(moviesdata)
//                 },
//                 (data, status) => {

//                     $("#container").append(`<div class="card" id="card_cont">
//     <header class="container" id="title_cont">
//       <h2> ` + data.Name + ` </h2>
//     </header>
//     <div class="container" id="body_cont">
//      ` + data.Desc + `</div></div>`);
//                 });
//         });
//     }

// }




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