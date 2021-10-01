/* function tomarDatos(){
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
        console.log("El nombre ingresado no existe, vuelve a intentarlo.");
    }
}

precio("nombre")
*/

class Conjuntos{
    constructor(nombre, precio, cantidad, corpiño,bombacha,disponibilidad) {
        this.nombre = nombre;
            this.precio = precio;
            this.cantidad = cantidad;
            this.corpiño = corpiño;
            this.bombacha = bombacha;
            this.disponibilidad = disponibilidad;
    }
    comprar(cantidad){
        if(this.cantidad <= 0){
            console.log("Este producto se encuentra agotado.");
            this.cantidad= false;
        } else{
            this.cantidad= this.cantidad - cantidad;
            console.log(`Compraste ${this.nombre}, el  total es ${this.precio * cantidad}`);
            
        }
        
    }
    talleCorpiño(){
            let corpiño;
            this.corpiño = corpiño;
            this.corpiño= Number(prompt("Ingresá tu talle del 1 al 8"));
            if( this.corpiño >=0 && this.corpiño <=8 ){
                console.log(`El talle del corpiño que compraste es ${this.corpiño}`);
            }else{
                console.log("El talle ingresado no está disponible");
            }
            return corpiño;
        }
    talleBombacha(){
            let bombacha;
            this.bombacha = bombacha;
            this.bombacha = Number(prompt("Ingresá tu talle del 1 al 8"));
            if( this.bombacha >=0 && this.bombacha <=8 ){
                console.log(`El talle de la bombacha que compraste es ${this.bombacha}`);
            }else{
                console.log("El talle ingresado no está disponible");
            }
            return bombacha;
        }       

    
}
    

const conjuntoHanna = new Conjuntos("Conjunto Hanna",2370,2,1,1,true);
const conjuntoFrida = new Conjuntos("Conjunto Frida",2700,5,2,3,true);
const conjuntoEmma = new Conjuntos("Conjunto Emma",2780,25,3,5,true);
const conjuntoAstrid = new Conjuntos("Conjunto Astrid",2590,2,1,1,true);
const conjuntoGreta = new Conjuntos("Conjunto Greta",2880,2,1,1,true);
