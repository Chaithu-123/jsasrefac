import { resolve } from "url";
import { rejects } from "assert";
import { appConfig } from "../appConfig"


export const dataService = {
    getPopularMovieData: () => {
        return new Promise((resolve, reject) => {
            const pageNo = 1
            let apiurl = appConfig.baseURL + appConfig.mediaType + '/popular?api_key=' + appConfig.APIKEY + '&language=en-US&page=';
            $.ajax({
                url: apiurl,
                type: "GET",
                dataType: "json",
                success: (data) => {
                    resolve(data)
                },
                error: (err) => {
                    reject(err)
                }
            })
        })
    },
    getData(_url) {
        return this.apiPromiseCall(_url, {}, "GET")
    },
    postData(_url, _data) {
        return this.apiPromiseCall(_url, _data, "POST")
    },
    putData(_url, _data) {
        return this.apiPromiseCall(_url, _data, "PUT")
    },
    deleteData(_url, _id) {
        return this.apiPromiseCall(_url, {}, "DELETE")
    }
}