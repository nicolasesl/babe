$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });

    function open() {
        envelope.addClass("open")
               .removeClass("close");
        
        // Espera 8 segundos antes de redirigir a otra página
        setTimeout(function() {
            window.location.href = "love.html";
        }, 6300); // 8000 milisegundos = 8 segundos
    }
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}