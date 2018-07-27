import $ from "jquery"
window.$ = $

export const renderHtmlToContainer = (htmlTemplate, containerKey) => {
    const container = document.querySelector(containerKey)
    container.appendChild(htmlTemplate)

}

export const show_hideElement = (containerKey, isShow = true) => {
    if (isShow) {
        $(containerKey).show()
    } else {
        $(containerKey).hide()
    }
}

export const registerEvent = (containerKey, method) => {
    $(containerKey).click((event) => {
        method(event)
    })
}
export const createHtmlTemplate = (htmlStr, multiple = false) => {
    const temp = document.createElement("template")
    temp.innerHTML = htmlStr
    if (multiple) {
        return temp.content
    } else {
        return temp.content.firstElementChild
    }
}