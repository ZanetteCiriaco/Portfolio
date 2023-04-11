var inputName = document.getElementById("input-name");
var inputEmail = document.getElementById("input-email");
var inputMessage = document.getElementById("textarea-message");


function inputValue(dataInput) {
    return dataInput.value.trim();
}

function validateEmail(){

    const isEmptyEmail = validationResult(inputEmail)

    if (isEmptyEmail) {
        return false
    } 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(inputValue(inputEmail))) {
        return true
    } else {
        return false
    }
    
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

function validationResult(field) {
    var value = inputValue(field)

    return(isVoid(value))
}


function checkFormInputs() {

    var isValidName = validationResult(inputName);

    if (isValidName) {
        setError(inputName, "Campo obrigatório")
    }

    var isValidMessage = validationResult(inputMessage);

    if (isValidMessage) {
        setError(inputMessage, "Campo obrigatório")
    }

    var isValidEmail = validateEmail()

    if (!isValidEmail) {
        setError(inputEmail, "Email inválido")
        console.log("email invalido")
    }

    if (isValidEmail && !isValidMessage && !isValidName) {
        var form = document.getElementById("contact-form")
        form.submit();
        alert("Mensagem enviada!")
    }

}

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    checkFormInputs()
})

