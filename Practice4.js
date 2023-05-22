const myArray = [98,35,25,0,13,17,6]

const searchSeven = (array) =>{
    let MyString=array.toString(array);
    let indice = MyString.indexOf(7);
    if (indice != -1){
        console.log("Boom!!!");
    }
    else{
        console.log("There is no 7 in the array");
    }
    }
searchSeven(myArray)

const searchSeven1 = (array) =>{
    let verdadero= null
    for (const numero of array){
        let arr= numero.toString().split('');
        for (const numero of arr){
            if (numero == "7"){
                verdadero=true;
                break;
            }
        }
    }
    }
searchSeven1(myArray)