let Operacion=prompt("Qué operación desea realizar (suma o resta)?")
while(Operacion !== "suma" && Operacion !== "resta"){
    alert("Operacion invalida por favor digite suma o resta")
    Operacion=prompt("Qué operación desea realizar (suma o resta)?")
}
let Numero1= parseInt(prompt("Ingrese el primer numero de la operacion"))
let Numero2= parseInt(prompt("Ingrese el segundo numero de la operacion"))
let resultado
if (Operacion==="suma"){
  resultado=Numero1+Numero2;
  alert("Su resultado es igual a " + resultado);
  }
else if (Operacion==="resta"){
  resultado=Numero1-Numero2;
  alert("Su resultado es igual a " + resultado);
  }
