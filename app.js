(function () {
    // Seleciona todos os elementos com a classe "formulario"
    const input = document.querySelectorAll(".formulario");
    // Seleciona o formulário na página
    const form = document.querySelector("form");
    // Seleciona o checkbox com o ID "check"
    const checkbox = document.querySelector("#check");
    // Seleciona o elemento com a classe "sendFormulary"
    const sendFormulary = document.querySelector(".sendFormulary");

    // Adiciona um ouvinte de evento para o clique no checkbox
    checkbox.addEventListener("click", function () {
        // Desativa o botão de envio se o checkbox não estiver marcado
        sendFormulary.disabled = !checkbox.checked;
    });

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener("submit", function (e) {
        // Impede o comportamento padrão de envio do formulário
        e.preventDefault();
        
        // Flag para verificar se o formulário é válido
        let formIsValid = true;

        // Itera sobre cada campo de entrada no formulário
        input.forEach(campo => {
            // Se o campo estiver vazio, adiciona uma borda vermelha e marca o formulário como inválido
            if (campo.value.trim() === "") {
                campo.style.border = "2px red solid";
                formIsValid = false;
            } else {
                // Se o campo estiver preenchido, remove a borda vermelha
                campo.style.border = "";
            }
        });

        // Se o formulário for válido, exibe um alerta indicando que foi enviado
        if (formIsValid) {
            alert("Formulário enviado");
        }
    });
})();
