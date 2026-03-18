/*
    Arquivo: script.js
    Função: habilitar scroll suave para links internos (#ancoras) na página principal.
*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
console.log("Site da SEEE Unicamp carregado com sucesso!");