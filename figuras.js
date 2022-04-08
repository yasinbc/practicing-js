//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm^2");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: "+perimetroCuadrado+"cm^2");

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El área del cuadrado es: "+ areaCuadrado+"cm^2");
console.groupEnd();


//Codigo del triangulo
 console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 6;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: "
// + ladoTriangulo1+"cm, "+baseTriangulo+"cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: "+alturaTriangulo+"cm")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}

console.groupEnd();

//Codigo del circulo
console.group("Circulos");

// function radioCirculo = 4;
// console.log("El radio del circulo es: "+radioCirculo+"cm")


function diametroCirculo(radio){
    return radio * 2;
}
// console.log("El diametro del circulo es: "+diametroCirculo);

// const PI = Math.PI;
// console.log("PI es: "+PI);

function perimetroCirculo(diametro){
    return diametro * Math.PI;
}
//console.log("El perimetro del Circulo es: "+perimetroCirculo);

function areaCirculo(radio){
    return (radio*radio) * Math.PI;
}
//console.log("El area del circulo es: "+areaCirculo)

console.groupEnd();


// Interaccion con el DOM HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;//Obtiene valor de escritura

    const perimetro = perimetroCuadrado(value);
    return alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;//Obtiene valor de escritura

    const area = areaCuadrado(value);
    return alert(area)
}