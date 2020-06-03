/* document
    .querySelector("select[name=uf]")
    .addEventListener("change", () => {
        console.log("mudei")
    })//arrow function */


    /** Parte dos dados da entidade/ Formulario */

    function populateUFs(){
        const ufSelect = document.querySelector("select[name=uf]")
        
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then( res => res.json() )
        .then( states => {

            for( const state of states){
                ufSelect.innerHTML += `<option value="  ${state.id}">${state.nome}</option>`
            }

           
        } )
    
    }

    populateUFs()


    function getCities(event){
        
        const citySelect = document.querySelector("select[name=city]")
        const stateInput = document.querySelector("input[name=state]")
        
        
        const ufValue = event.target.value
        const indexOfSelectedState = event.target.selectedIndex
        stateInput.value = event.target.options[indexOfSelectedState].text

        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
        //campo para limpar os valores
        citySelect.innerHTML = "<option value>Selecione a cidade</option>"
        citySelect.disabled = true
        //**** */
        fetch(url)
        .then( res => res.json() )
        .then( cities => {
            
            for( const city of cities ){
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false

        } )
    }

    document
        .querySelector("select[name=uf]")
        .addEventListener("change", getCities)


/** ítens de coleta/ as 6 li */

//pegando todos os li
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")


let selectedItems = []


function handleSelectedItem(event){

    const itemLi = event.target
    
    //adicionar ou remorver uma class com js

    //itemLi.classList.remove("selected") -> remove
    //itemLi.classList.add("selected") -> add
    //add ou remove
    itemLi.classList.toggle("selected")


    //joganddo o id do click na variavel itemId
    const itemId = itemLi.dataset.id

   

    //verificar se existem items selecionados, se sim, pegar os items selecionado

    const alreadySelected = selectedItems.findIndex(item =>{
        const itemFound = item == itemId //isso sera true ou false
        return itemFound
    })

    // se ja tiver selecionado, tirar da seleção

    if(alreadySelected >=0 ){

        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })
        selectedItems = filteredItems
        
    }else{
        //se nao tiver selecionado, adicionar a seleção
        selectedItems.push(itemId)
    }


    //atuallizar o campo escondido com os items selecionados

    collectedItems.value = selectedItems
}

