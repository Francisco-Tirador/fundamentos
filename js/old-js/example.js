// Crea una función que reciba un arreglo con N cantidad de elementos y siempre encuentre el último elemento
// si el último número es 1 lo imprimes
// si no es 1 imprimes un arreglo con los dos últimos números
/*function x(array) {
    const lastNumber = array[array.length -1];
    if(lastNumber === 1) {
        console.log(lastNumber);
    } else {
        const newArray = [
            array[array.length - 2],
            lastNumber
        ];
        console.log(newArray);
    }
}*/

/*x([1, 2]);
x([2, 3, 1]);
x([2, 3, 1, 23, 2, 4]);*/
// const array = [1, 3, 4];

// El segundo argumento que pasamos a splice indica cuántos elementos se van a eliminar
/* array.splice(1, 1, 2, 5, 4, 5, 6);
console.log(array);*/


// El usuario puede ingresar n cantidad de números

// const finished = false;
// while(!finished) {
//     const input = prompt('Ingresa un número para terminar presiona x')
//     if(input === 'x') {
//         finished = true;
//     }
// }

function x(text) {
    const space = text.indexOf(' ');
    //console.log(space);
    const space2 = text.indexOf(' ');
    console.log(space2);
}

x('Hola, me llamo de Erik');