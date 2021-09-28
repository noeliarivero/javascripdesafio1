function tomarDatos(){
    let nombre = prompt("Ingresá tu nombre");
    let apellido = prompt("Ingresá tu apellido");
    let lugar = prompt("En que ciudad vivís?");
    let mostrarDatos = `Tu nombre es ${nombre} ${apellido} y tenes residís en ${lugar}`;
    confirm(`Tu nombre es ${nombre} ${apellido} y tenes residís en ${lugar}`);
    console.log(`Tu nombre es ${nombre} ${apellido} y tenes residís en ${lugar}`);
    return mostrarDatos;
}
tomarDatos()

function precio (nombre) {
    let conjunto = nombre.toLowerCase()
    if(conjunto == "hanna"){
        console.log("El precio del conjunto Hanna es $2700");
    }else if(conjunto == "frida"){
        console.log("El precio del conjunto Frida es $2500");
    }else if(conjunto == "greta"){
        console.log("Lo sentimos, este producto no está disponible por el momento.");
    }else{
        console.log("El nombre ingresando no existe, vuelve a intentarlo.");
    }
}

precio("nombre")