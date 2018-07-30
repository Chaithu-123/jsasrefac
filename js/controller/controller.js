let showMovieCollection = (e) => {
    let curElement = e.currentTarget;
    let curColId = curElement.id.substr(4);

    $.getJSON("http://localhost:3000/MovieData/",
        function(data, status) {
            curCol = jQuery.extend(true, {}, data.filter(function(i) {
                return i.id == curColId
            })[0]);
            $(".modal-body #col_mName").val(curCol.Name);
            let m_ul = $('#col_movielist');
            m_ul.html('');
            let col_Movies = curCol.Movies.trim() == "" ? [] : JSON.parse(curCol.Movies);
            if (col_Movies.length > 0) {
                for (let i of col_Movies) {
                    m_ul.append(`<li id="mli` + i.id + `">` + i.title + `<button type="button" id="del` + i.id + `" value="Reset"> Del </button>
                        </li>`);
                    $("#del" + i.id).click(deletecollection);
                }
            } else {
                m_ul.append(`<li>No Movies</li>`)
            }

            $("#showCol").modal('show');


        });
}




// Deleting Movies In Collection

let deletecollection = (e) => {
    let delElement = e.currentTarget;
    let delId = delElement.id.substr(3);
    let curCol_Movies = curCol.Movies.trim() == "" ? [] : JSON.parse(curCol.Movies);
    let mIndex = curCol_Movies.findIndex(x => x.id == delId);
    curCol_Movies.splice(mIndex, 1);
    $('#mli' + delId).remove();

    $.ajax({
        url: "http://localhost:3000/MovieData/" + curCol.id,
        method: "PUT",
        data: {
            "Name": curCol.Name,
            "Desc": curCol.Desc,
            "Movies": JSON.stringify(curCol_Movies)
        },
        success: function(result) {
            alert("submitted");
        }
    });

}