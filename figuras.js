//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm^2");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: "+perimetroCuadrado+"cm^2");

const areaCuadrado = ladoCuadrado ** 2;
console.log("El área del cuadrado es: "+ areaCuadrado+"cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 6;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: "
+ ladoTriangulo1+"cm, "+baseTriangulo+"cm");

//const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: "+alturaTriangulo+"cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 +baseTriangulo;
console.log("El perimetro del triangulo es:"+perimetroTriangulo+"cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El area del triangulo es: "+areaTriangulo+"cm")

console.groupEnd();

//Codigo del circulo
console.group("Circulos");

const radioCirculo = 4;
console.log("El radio del circulo es: "+radioCirculo+"cm")


const diametroCirculo = radioCirculo*2;
console.log("El diametro del circulo es: "+diametroCirculo);

const PI = Math.PI;
console.log("PI es: "+PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Circulo es: "+perimetroCirculo);

const areaCirculo = (radioCirculo**2)*PI;
console.log("El area del circulo es: "+areaCirculo)

console.groupEnd();