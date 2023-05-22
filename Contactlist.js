//Creo la lista de contactos
const contactos = [
    {
        id: 1,
        nombres: "Nicolas", 
        apellidos: "Trujillo",
        telefono: 1111111111,
        ciudad: "Medellin",
        direccion: "Direccion 1"
    },
    {
        id: 2,
        nombres: "Samuel", 
        apellidos: "Rivas",
        telefono: 2222222222,
        ciudad: "Cali",
        direccion: "Direccion 2"
    },
    {
        id: 3,
        nombres: "Pablo", 
        apellidos: "Isaza",
        telefono: 3333333333,
        ciudad: "Bogota",
        direccion: "Direccion 3"
    },
    {
        id: 4,
        nombres: "Julian", 
        apellidos: "Buritica",
        telefono: 4444444444,
        ciudad: "Cartagena",
        direccion: "Direccion 4"
    }
]

//Esta funcion agrega contactos a la lista de contactos por el metodo push
var agregarcontacto = function(nombre1, apellido1, telefono1, ciudad1, direccion1){
    let idarray =[]
    for (i = 0; i < contactos.length; i++) {
    idarray[i]=contactos[i].id;
    } ;
    idasignado =Math.max(...idarray)+1;
    let ingreso={
        id: idasignado,
        nombres: nombre1, 
        apellidos: apellido1,
        telefono: telefono1,
        ciudad: ciudad1,
        direccion: direccion1
    }
    contactos.push(ingreso)
    console.log("El Contacto " + nombre1 + " " + apellido1 + " ha sido añadido exitosamente.")
}

//Prueba de agregar contacto
agregarcontacto("Martha","Hernandez",5555555555,"Girardot","Direccion 5")

//Esta funcion elimina contactos de la lista por su id
var eliminarcontacto = function(idaeliminar){
    let indice = contactos.findIndex((contacto) => contacto.id==idaeliminar);
    if (indice != -1){
        contactos.splice(indice,1);
        console.log("El Contacto "+ contactos[indice].nombres + " " + contactos[indice].apellidos +" ha sido eliminado exitosamente.")
    }
    else{
        console.log("Error al eliminar contacto, este contacto no existe en la lista.")
    }
}

//Prueba de eliminar contacto
eliminarcontacto(2)

//Esta funcion imprime en consola los contactos de la lista
var mostrarlista = function(){
    console.log("Esta es su lista de contactos:");
    console.log(contactos)
}

//Prueba de mostar lista
mostrarlista()