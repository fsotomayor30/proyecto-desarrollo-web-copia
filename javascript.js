//DECLARACION
var nombre;
//ASIGNACION
nombre = "Felipe";

var edad = 20;

var precio = 617.16;

console.log("Nombre: "+nombre);
console.log("Edad: "+edad);
console.log("Precio: "+precio);

canal = "Youtube";
console.log("Canal: "+canal);

edad = edad / 15;
console.log("Edad dividido en 20: "+edad);

var numero1 = 4;
var numero2 = 3;

console.log("Modulo: "+numero1%numero2);

console.log("Numero de euler: "+Math.E);
console.log("Valor absoluto de 9: "+Math.abs(-9));

var nombre = "Felipe";
var apellido = "Sotomayor";
var nombreCompleto = nombre+" "+apellido;
console.log("Nombre completo: "+nombreCompleto);
console.log("Largo del nombre completo: "+nombreCompleto.length);
console.log("Primer caracter del nombre completo: "+nombreCompleto.charAt(0));
console.log("Primer caracter del nombre completo: "+nombreCompleto[0]);

console.log("Texto no encontrado: "+nombreCompleto.indexOf("dhasjkhdajk"));

var variableUno = false;
var variableDos = true;


var numeroUno = 30;
var numeroDos = "30";

if(numeroUno == numeroDos){
    console.log("IGUAL CON ==");
}

if(numeroUno === numeroDos){
    console.log("IGUAL CON ===");
}

if(numeroUno != numeroDos){
    console.log("DIFERENTE CON !=");
}

if(numeroUno !== numeroDos){
    console.log("DIFERENTE CON !==");
}


var meGustaElCafe = false;

if(meGustaElCafe == true){
    console.log("SI ME GUSTA EL CAFE");
}else{
    console.log("NO ME GUSTA EL CAFE");
}



if(numeroUno){
    console.log("EL NUMERO UNO ESTA DEFINIDO");
}
// if(!variableDos){
//     console.log("ENTRO A LAS LLAVES CONDICIONALES");
// }

// // 23 > 30
// if(numeroUno < numeroDos){
//     console.log("NUMERO UNO ES MENOR QUE NUMERO DOS");
// }

// var contador = 0;
// while(contador<11){
//     contador = contador + 1; // contador = 11
//     if(contador % 2 == 0 ){
//         console.log(contador); // 2 4 6 8 10
//     }
// }

// var contador = 0;
// do{
//     contador = contador + 1; // 5
//     console.log(contador); // 1 2 3 4 5
// }while(contador < 5);

// for(var contador = 0; contador<10; contador = contador+2 ){
//     console.log(contador);
// }

var numeroTypeOf = null;
// console.log(numeroTypeOf);
console.log(typeof numeroTypeOf);

document.addEventListener('DOMContentLoaded', function(event){
    document.getElementById('divpadre').addEventListener('click', alertaPadre.bind(event, "soy el padre"), false);
    document.getElementById('button').addEventListener('click', alerta, true);
});


function alerta(){
    alert("Quieres hacer un comentario?");
}

function alertaPadre(padre){
    console.log(padre)
}

//ARREGLO
var arreglo = [20, "Hola a todos", []];
console.log("Arreglo con distintos tipos de datos: ");
console.log(arreglo);

console.log("Posición 0 del arreglo: "+ arreglo[0]);
console.log("Posición 1 del arreglo: "+ arreglo[1]);
console.log("Cantidad de elementos del arreglo: "+ arreglo.length);
arreglo.push(10);
console.log("Nuevo arreglo: ");
console.log(arreglo);
arreglo.unshift(5);
console.log("Nuevo arreglo: ");
console.log(arreglo);
arreglo.shift();
console.log("Nuevo arreglo: ");
console.log(arreglo);
arreglo.pop();
console.log("Nuevo arreglo: ");
console.log(arreglo);
console.log("Recorrer el arreglo con un for: ");
for(var indice = 0; indice < arreglo.length; indice=indice+1){
    console.log(arreglo[indice]); //20     Hola a todos     []
                                  //0           1            2
}

for(var indice = arreglo.length-1 ; indice >=0; indice = indice-1){
    console.log(arreglo[indice]);
}

function suma (valor1, valor2){
    return valor1 + valor2;
}

console.log(suma(5, 10));

function ordenacion(a, b){
    if(a>b){
        return 1;
    }else{
        if(b>a){
            return -1;
        }else{
            if(a==b){
                return 0;
            }
        }
    }
}

var numerosDesordenados = [2, 5, 1, 10, 20];
console.log("Numeros desordenados: ")
console.log(numerosDesordenados);
numerosDesordenados.sort(ordenacion);
console.log("Numero despues del ordenamiento: ");
console.log(numerosDesordenados);
numerosDesordenados.reverse();
console.log("Numeros despues del reverse: ");
console.log(numerosDesordenados);

console.log("Nombre completo en cadena de texto separado por ,");
var nombres = "Pedro,Andres,Gonzalez,Contreras";
console.log(nombres);
var nombreConSplit = nombres.split(",");
console.log("Arreglo de nombre completo dividido por ,");
console.log(nombreConSplit);
var arreglounido = nombreConSplit.join(",");
console.log("Arreglo unido");
console.log(arreglounido);

var frutas = ["Manzana", "Banana", "Kiwi", "Uva"];
frutas.push("Fresa");

// MANZANA, BANANA, KIWI, UVA, FRESA
//    0        1      2    3     4
var posicionFrutaABuscar = frutas.indexOf("Banana");
console.log(posicionFrutaABuscar);

// if(posicionFrutaABuscar === -1){
//     alert("Elemento no esta en el arreglo");
// }else{
//     alert("Elemento si esta en el arreglo");

// }

var elementoEliminado = frutas.splice(1, 3);
console.log("Elementos eliminados:");
console.log(elementoEliminado);
console.log("Arreglo con las frutas:");
console.log(frutas);
var copiaArreglo = frutas.slice();
console.log("Arreglo copiado: ");
console.log(copiaArreglo);


var arregloFilter = [10, 2, 3, 5, 9, 20, 22];
var numerosPares = [];

//OBTENER LOS NUMEROS PARES SIN FILTER (6 LINEAS)
for(var indice = arreglo.length - 1; indice >=0; indice = indice -1){
    var numeroActual = arregloFilter[indice];
    if(numeroActual % 2 == 0){
        numerosPares.push(numeroActual);
    }
}

//OBTENER LOS NUMEROS PARES CON FILTER (3 LINEAS)
var numerosPares = arregloFilter.filter(function(numero){
    return numero % 2 == 0;
})

var arregloMap = [1, 5, 6, ,8];
var cuadrados = [];

//ELEVAR A DOS LOS NUMEROS DEL ARREGLO SIN MAP (4 LINEAS)
for(var indice = arregloMap.length-1; indice>=0; indice = indice -1){
    var numeroActual = arregloMap[indice];
    // cuadrados.push(Math.pow(numeroActual, 2));
    cuadrados.push(numeroActual * numeroActual);
}

cuadrados = arregloMap.map(function(numero){
    return numero*numero;
});

arregloMap.forEach(function(elemento, indice, arregloFilter){
    console.log(elemento);
})

var hola = ["H", "O", "L", "A"];
console.log("HOLA antes de reduce");
var saludo = hola.reduce(function(valorAnterior, valorActual, indice, arreglo){
    return valorAnterior + valorActual;
});
console.log("HOLA despues de reduce");
console.log(saludo);

var arregloASumar = [1, 2, 3, 4, 5, 6, 7];
var resultado = arregloASumar.reduce(function(valorAnterior, valorActual, indice, arreglo){
    return valorAnterior + valorActual;
});

console.log("Numeros antes de sumar con reducer");
console.log(arregloASumar);
console.log("Numeros despues de sumar con reducer");
console.log(resultado);

var animales = ["PERRO", "GATO", "HAMSTER"];
console.log("ANIMALES");
console.log(animales);
console.log("Esta el animal?");
console.log(animales.includes("CONEJO"));

console.log("Arreglo Some");
var arregloSome = [1,2,3,4,5,6];
console.log(arregloSome);

var test = arregloSome.some(function(elemento){
    return elemento>6;
})
console.log("Hay algun elemento > 6");
console.log(test);

console.log("Arreglo Every");
var arregloEvery = [1,2,3,4,5,6];
console.log(arregloEvery);

var test = arregloEvery.every(function(elemento){
    return elemento>0;
})
console.log("Todos los elementos son > 0");
console.log(test);

function devolverNombre(nombre, apellido){
    return nombre+" "+apellido;
}

var variableConSalto = `Hola ${devolverNombre("Felipe", "Sotomayor")} quiero
estar en otra linea`;

console.log(variableConSalto);

var miAuto = new Object();
miAuto.marca = 'Ford';
miAuto.modelo = 'Mustang';
miAuto.anio = 2010;
miAuto.nroPuertas = 4;
miAuto['-color'] = 'Azul';
console.log(miAuto);