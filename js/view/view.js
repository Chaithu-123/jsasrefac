// const baseURL = "https://api.themoviedb.org/3/";
// const APIKEY = "0857f3bcecfb71367f56290556a3e85c";
// let configData = null;
// let baseImgURL = null;
// const maxPopularTiles = 12;
// let pMovieCardClasses = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9", "tile10", "tile11", "tile12"];
// let pMovieclassIndex = 0;
// let searchtext = "";
// let currentmovie = null;
// let demoData = {
//     "images": {
//         "base_url": "http://image.tmdb.org/t/p/",
//         "secure_base_url": "https://image.tmdb.org/t/p/",
//         "backdrop_sizes": ["w300", "w780", "w1280", "original"],
//         "logo_sizes": ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
//         "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
//         "profile_sizes": ["w45", "w185", "h632", "original"],
//         "still_sizes": ["w92", "w185", "w300", "original"]
//     },
//     "change_keys": ["adult", "air_date", "also_known_as", "alternative_titles", "biography", "birthday", "budget", "cast", "certifications", "character_names", "created_by", "crew", "deathday", "episode", "episode_number", "episode_run_time", "freebase_id", "freebase_mid", "general", "genres", "guest_stars", "homepage", "images", "imdb_id", "languages", "name", "network", "origin_country", "original_name", "original_title", "overview", "parts", "place_of_birth", "plot_titles", "production_code", "production_companies", "production_countries", "releases", "revenue", "runtime", "season", "season_number", "season_regular", "spoken_languages", "status", "tagline", "title", "translations", "tvdb_id", "tvrage_id", "type", "video", "videos"]
// }



// export const popularMovies = {

//     getConfig: () => {

//         let apiurl = baseURL + 'configuration?api_key=' + APIKEY;
//         fetch(apiurl)
//             .then((result) => {
//                 return result.json();
//             })
//             .then((data) => {
//                 baseImgURL = data.images.secure_base_url;
//                 configData = data.images;
//                 console.log('config:', data);
//                 console.log('config fetched');
//                 // let searchtext = $('#search_txt').val().trim();
//                 if (searchtext.length > 0) {
//                     searchByKey('movie', title);
//                 } else {
//                     getPopularDataListByCategory('movie');
//                 }
//             })
//             .catch(err => {
//                 alert(err);
//             });
//     },
//     // init: () => {
//     //     getConfig();
//     // },

//     getPopularDataListByCategory: (mediaType, pageNo = 1) => {
//         let apiurl = baseURL + mediaType + '/popular?api_key=' + APIKEY + '&language=en-US&page=' + pageNo;
//         fetch(apiurl)
//             .then(result => result.json())
//             .then((data) => {
//                 generatePopularList(data.results, mediaType);
//             })


//     },

//     // Generating The Popular Movie List On Home Page

//     generatePopularList: (datalist, mediaType) => {
//         if (mediaType.toLowerCase() == 'tv') {

//         } else if (mediaType.toLowerCase() == 'movie') {
//             appendpopularlist(datalist, 'movie_list');
//         }
//     },

//     appendpopularlist: (datalist, containerid) => {
//         let appendContainer = $('#' + containerid);
//         appendContainer.html('');
//         pMovieclassIndex = 0;
//         if (datalist.length > 0) {
//             let popularTileItems = datalist.slice(0, maxPopularTiles);
//             for (let i of popularTileItems) {
//                 let htmlcontent = $(`<div class="` + pMovieCardClasses[pMovieclassIndex] + ` card-content col-lg-4">
//                                 <a class = "movie-info" href = "#">
//                                     <img id="pimg_` + i.id + `" src="` + baseImgURL + `w185/` + i.poster_path + `" alt="` + i.title + `">
//                                     <div class="info">
//                                         <span class="info-name d-block text-light">` + i.title + `</span>
//                                     </div>
//                                 </a>
//                           </div>`);

//                 htmlcontent.appendTo(appendContainer);
//                 $('#pimg_' + i.id).click(onPopularMovieClick);
//                 pMovieclassIndex = pMovieclassIndex == (pMovieCardClasses.length - 1) ? 0 : pMovieclassIndex + 1;
//             }
//         } else {
//             let htmlcontent = $(`<div class="big_1  ">
//                           <h3>No Movies Available</h3>
//                         </div>`);
//             htmlcontent.appendTo(appendContainer);
//         }
//     }
// }