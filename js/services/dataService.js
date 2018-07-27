import { resolve } from "url";
import { rejects } from "assert";
import { appConfig } from "../appConfig"

export const apiPromiseCall = (_url, _data, _type) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: _url,
            type: _type,
            data: _data,
            dataType: "json",
            success: (data) => {
                resolve(data)
            },
            error: (err) => {
                reject(err)
            },
        })
    })
}
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
        return apiPromiseCall(_url, {}, "GET")
    },
    postData(_url, _data) {
        return apiPromiseCall(_url, _data, "POST")
    },
    putData(_url, _data) {
        return apiPromiseCall(_url, _data, "PUT")
    },
    deleteData(_url, _id) {
        return apiPromiseCall(_url, {}, "DELETE")
    }
}