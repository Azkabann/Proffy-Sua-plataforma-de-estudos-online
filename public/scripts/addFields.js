// procurar o botão
document.querySelector("#add-time")
//ao clicar no botão
.addEventListener('click', cloneField)
//execute a ação
function cloneField(){
    //duplicar os campos, que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos: que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada campo limpar 
    fields.forEach(function(fields){
        fields.value = ""
    })


    //colocar na página? onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}