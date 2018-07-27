import { createHtmlTemplate } from "../common"



export const userCollection = {
    addCollectionDetailsModalTemplate: (data) => {
        const colTemp = `<div class="card" id="card_cont">
    <header class="container" id="title_cont">
      <h2> ` + data.Name + ` </h2>
    </header>
    <div class="container" id="body_cont">
     ` + data.Desc + `</div>
     <button type = "button"> Edit Collection </button>
     </div>`


        return createHtmlTemplate(colTemp)
    },
    addCollectionlistTemplate: (datalist) => {
        let colTemp = ""
        datalist.forEach(item => {
            colTemp += `<div class="card" id="card_cont">
    <header class="container" id="title_cont">
      <h2> ` + item.Name + ` </h2>
    </header>
    <div class="container" id="body_cont">
     ` + item.Desc + ` </div>
     <button type = "button"> Edit Collection </button>
     </div>`
        })
        return createHtmlTemplate(colTemp)
    }

}