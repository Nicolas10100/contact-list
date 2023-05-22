const perro={
    nombre: "Loki",
    edad: 8,
    ladrar: function(){
        console.log('Guau guau!!!')
    }
}

//Para que la funcion funcione debe tener los parentesis, sin ellos no la lee
perro.ladrar()
//Para la lista de contactos se deben manejar los objetos dentro de un array

const object={a:1,b:2,c:3}

for (const key in object){
    console.log(key + ': ' + object[key])
}

const nombres ='{"nombre": "Juan","edad": 23}';

//JSON a objeto
const obj= JSON.parse(nombres);
console.log(obj);

//Objeto a JSON
const json = JSON.stringify(obj);
console.log(json);

//Eliminar un elemento del array
const myArray = [1,2,3,4,5,6,7,8];
let indice = myArray.indexOf(5);
console.log(indice)
myArray.splice(indice,1);
console.log(myArray)