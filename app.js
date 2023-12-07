(function (){
const input = document.querySelectorAll(".formulario");
const form = document.querySelector("form")
const checkbox = document.querySelector("#check");
const sendFormulary = document.querySelector(".sendFormulary");
checkbox.addEventListener("click", function(){
    sendFormulary.disabled = !checkbox.checked;
})

    form.addEventListener("submit", function(e){
    e.preventDefault();
    let formIsValid = true;
    input.forEach(campo => {
        if (campo.value.trim() === "") {
            campo.style.border = "2px red solid";
            formIsValid = false;
        } else {
            campo.style.border = "";
        }
    });

    if (formIsValid) {
        alert("Formulário enviado");
    }
});




})()