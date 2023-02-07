window.addEventListener('load', ()=> { /**Escucha cuando se carga todo el documento */

    /**Se crean dos constantes para guardar los elementos necesarios */
    const display = document.querySelector('.calculator-display');
    const keyPadButtons = document.getElementsByClassName('keypad-button'); // Crea un HTMLCollection

    /**Se crea un constante para convertir el HTMLCollection a Array*/
    const keyPadButtonsArray = Array.from(keyPadButtons);

    /**Itera el Array recién creado */
    keyPadButtonsArray.forEach((button) => {
        
        /**Agrega un listener a cada botón */
        button.addEventListener('click', () => {
            //console.log(button.innerHTML); //Muestra el caracter que tenga el botón presionado
            calculadora(button, display);
        });
    });
});


function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) /**Toma el string, lo resuelve y lo guarda en el innerHTML de display*/
}

function actualizar (display, button) {
    if(display.innerHTML == 0) {
        display.innerHTML = ''
    }
    display.innerHTML += button.innerHTML;
}

function borrar (display) {
    display.innerHTML = 0;
}


