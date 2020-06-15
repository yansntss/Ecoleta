/**pegar o botao */
const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

const removeLogo =  document.querySelector("#page-home header img")





buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide") 
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})

function newFunction() {
    if (removeLogo == 0)
        console.log("imagem removida");
}
