const descripcionText = "Soluciones rápidas y efectivas para tus instalaciones";
    let tituloText;

document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('NombreUsuario');

    if (token) {
        tituloText = `Bienvenido ${userName} a nuestro Servicio de Soporte Técnico`;
    } else {
        tituloText = "Bienvenido a nuestro Servicio de Soporte Técnico";
    }


    startSequence();
});

function typeEffect(element, text, delay = 100, callback = null) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay);
        } else if (callback) {
            setTimeout(callback, 1000);
        }
    }
    type();
}

function eraseEffect(element, delay = 50, callback = null) {
    function erase() {
        if (element.innerHTML.length > 0) {
            element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length - 1);
            setTimeout(erase, delay);
        } else if (callback) {
            setTimeout(callback, 500);
        }
    }
    erase();
}

function startSequence() {
    const tituloElement = document.getElementById('titulo');
    tituloElement.innerHTML = '';
    typeEffect(tituloElement, tituloText, 100, () => {
        const descripcionElement = document.getElementById('descripcion');
        descripcionElement.innerHTML = '';
        typeEffect(descripcionElement, descripcionText, 100, () => {
            eraseEffect(tituloElement, 50, () => {
                eraseEffect(descripcionElement, 50, startSequence);
            });
        });
    });
}