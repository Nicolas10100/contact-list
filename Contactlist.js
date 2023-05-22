//Creo la lista de contactos
const contactos = ["Nicolas Trujillo","Lucas Restrepo","Martha Hernandez","Rocio Trujillo"]

//Esta funcion agrega contactos a la lista de contactos por el metodo push
var agregarcontacto = function(nombre1){
    contactos.push(nombre1)
    console.log("El contacto " + nombre1 + " ha sido añadido exitosamente.")
}

//Prueba añadiendo un contacto
agregarcontacto("Jose David")

//Esta funcion elimina contactos de la lista por su nombre
var eliminarcontacto = function(nombreaeliminar){
    let indice = contactos.indexOf(nombreaeliminar);
    if (indice != -1){
        contactos.splice(indice,1);
        console.log("El contacto " + nombreaeliminar + " ha sido eliminado exitosamente.")
    }
    else{
        console.log("Error al eliminar contacto, este contacto no existe en la lista.")
    }
}

//Prueba eliminando un contacto
eliminarcontacto("Lucas Restrepo")

//Esta funcion imprime en consola los contactos de la lista
var mostrarlista = function(){
    console.log("Esta es su lista de contactos:");
    console.log(contactos)
}

//Prueba mostrando la lista en consola
mostrarlista()