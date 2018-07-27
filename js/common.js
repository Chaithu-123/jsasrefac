export const renderHtmlToContainer = (htmlTemplate, containerKey) => {
    const container = document.querySelector(containerKey)
    container.appendChild(htmlTemplate)

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