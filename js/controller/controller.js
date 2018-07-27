import { appConfig } from "../appConfig"
import { onClickMovieCard } from "../popularmovies/popularMoviecontroller"


export const onPopularMovieClick = (event) => {
    let currentEle = event.currentTarget;
    let apiurl = baseURL + 'movie/' + currentEle.id.substr(5) + '?api_key=' + APIKEY;
    fetch(apiurl)
        .then(result => result.json())
        .then((data) => {
            //process the returned data
            appendMovieInfo(data, '#movie_details');
        })

};

// Opening Movie Details
export const appendMovieInfo = (data, containerid) => {
    $('#whole_content').hide();
    $('#' + containerid).show();
    $('#' + containerid).html(``);

    let htmlElements = $(`<div class="custom_bg">
        <div class="single_column">
            <section class="images_inner">
                <div class="poster">
                    <div class="image_content"><img class="movie-info" src="` + appConfig.baseImgURL + `w185` + data.poster_path + `" alt="` + data.title + `" />
                    </div>
                </div>
                <div class="header_poster_wrapper">
                    <section class="header_poster">
                        <div class="title" dir="auto">
                            <span><h2 class="30">` + data.title + `</h2> ` + data.release_date + `  </span>    
                        </div>
                        <ul class="auto_actions">    
                            <li class="chart">
                                <div class="c100 p34 center">
                                    ` + data.popularity + `
                                    <div class="slice">
                                        <div class="bar"></div>
                                        <div class="fill"></div>
                                    </div>
                                </div>
                                <div class="text">User Score</div>
                            </li>    
                            <li>                               
                                <button type="button" id="actionsave" class="btn btn-primary">Add To Collection</button>
                            </li>
                            <li>
                                Votes
                            </li>
                            <li >
                                Rate Movie
                            </li>
                            </ul>

                        <div class="header_info">
                            <h3 dir="auto">Overview</h3>
                            <div class="overview" dir="auto">
                                        ` + data.overview + `
                            </div>
                            <h3 class="featured" dir="auto" style="font-size:  2rem;">Featured Crew</h3>
                            <ol class="people_no_image">
                                <li class="profile">
                                <p>Derek Connolly</p>
                                <p class="character">Writer</p>
                                </li>

                                <li class="profile">
                                    <p>Colin Trevorrow</p>
                                    <p class="character">Writer</p>
                                </li>

                                <li class="profile">
                                    <p>Juan Antonio Bayona</p>
                                    <p class="character">Director</p>
                                </li>

                                <li class="profile">
                                    <p>Michael Crichton</p>
                                    <p class="character">Characters</p>
                                </li>
                                </ol>
                        </div>
                    </section>
                </div>    
            </section>    
        </div>
    </div>`);
    htmlElements.appendTo($('#' + containerid));



}