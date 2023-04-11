var inputName = document.getElementById("input-name");
var inputEmail = document.getElementById("input-email");
var inputMessage = document.getElementById("textarea-message");


function inputValue(dataInput) {
    return dataInput.value.trim();
}

function validateEmail(string){
    var validEmail = /\S+@\S+\.\S+/;
    return string.search(validEmail) == -1 ? true : false;
}

function isVoid(dataInput) {
    return dataInput == "" || dataInput == null
}

function setError(field, message) {
    var inputBox = field.parentElement;
    inputBox.className = "form-field"
    var span = inputBox.querySelector("span");
    span.innerText= message;
}

function validationResult(field, textError, textSucess) {
    var value = inputValue(field)

    return(isVoid(value) ? setError(field, textError) : setError(field, textSucess))
}


function checkFormInputs() {

    validationResult(inputName, "Campo obrigatório", "");

    validationResult(inputMessage, "Campo obrigatório", "");
    
    if(isVoid(inputValue(inputEmail))) {
        setError(inputEmail, "Campo Obrigatório");
    } else {
        validateEmail(inputValue(inputEmail)) ? setError(inputEmail, "Email inválido") : alert("email correto")
    }

    return false
}

document.getElementById("form-button").addEventListener("click", function(event){
    //event.preventDefault();
    checkFormInputs()
})

