/* Script para WEB de Curriculum Vitae */



var miImage = document.querySelector('img'); miImage.onclick = function () {
     var miSrc = miImage.getAttribute('src');
     if (miSrc === '/images/foto_carnet.jpg') {
         miImage.setAttribute('src', '/images/test.png');
     } else {
         miImage.setAttribute('src', '/images/foto_carnet.jpg');
     }
 }

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1')


// No consigo hacer funcionar el localStorage.
function nombreUsuario() {
    var miNombre = prompt('Por favor, ingrese su nombre.');
    miTitulo.textContent = '¡Bienvenido,' + ' ' + miNombre + '!';
    localStorage.setItem('nombre', miNombre);
}

miBoton.onclick = function() {
    nombreUsuario();
}
