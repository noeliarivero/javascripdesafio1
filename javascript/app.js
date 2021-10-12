function tomarDatos(){
    let nombreCompleto = prompt("Ingresá tu nombre completo.");
    let lugar = prompt("En que ciudad vivís?");
    let mostrarDatos = `Tu nombre es ${nombreCompleto} y residís en ${lugar}`;
    confirm(`Tu nombre es ${nombreCompleto} y tenes residís en ${lugar}`);
    console.log(`Tu nombre es ${nombreCompleto} y tenes residís en ${lugar}`);
    return mostrarDatos;
}
tomarDatos()

/* function precio (nombre) {
    let conjunto = nombre.toLowerCase()
    if(conjunto == "hanna"){
        console.log("El precio del conjunto Hanna es $2700");
    }else if(conjunto == "frida"){
        console.log("El precio del conjunto Frida es $2500");
    }else if(conjunto == "greta"){
        console.log("Lo sentimos, este producto no está disponible por el momento.");
    }else{
        console.log("El nombre ingresado no existe, vuelve a intentarlo.");
    }
}

precio("nombre") */

/* listaConjuntos.sort((a,b) => {
    if (a.precio > b.precio){
        return 1
    }
    if (a.precio < b.precio){
        return -1
    }
    return 0
})

for (let i=0; i < listaConjuntos.length; i++){
    console.log(listaConjuntos[i]);
}
*/
function pedirConjuntos() {
    let conjunto1 = Number(prompt("Insertá el precio del primer conjunto"));
    let conjunto2 = Number(prompt("Insertá el precio del segundo conjunto"));
    let sumar= (conjunto1 + conjunto2);
    mostrarResultado(sumar);
    return mostrarResultado;
}
pedirConjuntos();

function mostrarResultado(a){
    alert(`El total de ambos conjuntos es ${a}`);
    console.log(`El total de ambos conjuntos es ${a}`);
}