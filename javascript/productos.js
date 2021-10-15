class Conjuntos{
    constructor({nombre, precio, cantidad, corpiño,bombacha,disponibilidad}) {
        this.nombre = nombre;
            this.precio = precio;
            this.cantidad = cantidad;
            this.corpiño = corpiño;
            this.bombacha = bombacha;
            this.disponibilidad = disponibilidad;
    }
    /*talleCorpiño(){
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
    comprar(cantidad){
        if(this.cantidad <= 0){
            console.log("Este producto se encuentra agotado.");
            this.cantidad= false;
        } else{
            this.cantidad= this.cantidad - cantidad;
            console.log(`Compraste ${this.nombre}, el  total es ${this.precio * cantidad}`);
            
        }
        
    }*/
    
}
class carrito{
    constructor({talleCorpiño,talleBombacha,cantidad}) {
    this.talleCorpiño= talleCorpiño;
    this.talleBombacha= talleBombacha;
    this.cantidad= cantidad;
    }
}
const boton     =document.getElementById("btn")
const guardarTalles = () => {

    const infoCarrito = new carrito({
    talleCorpiño: document.getElementById("talleCorpiño").value,
    talleBombacha: document.getElementById("talleBombacha").value,
    cantidad: document.getElementById("cantidad").value,
    })

    document.getElementById("infoCarrito").innerHTML += `
    <p>El talle de corpiño que elegiste es ${infoCarrito.talleCorpiño}</p>
    <p>El talle de bombacha que elegiste es ${infoCarrito.talleBombacha}</p>
    <p>La cantidad que vas a comprar es ${infoCarrito.cantidad}</p>
    `
    return infoCarrito;
}
boton.addEventListener("click", (e) => {
    e.preventDefault()
    guardarTalles()
})
boton.addEventListener("keydown", (e) => {
    e.preventDefault()
    guardarTalles()
})


const conjuntoHanna = new Conjuntos("Conjunto Hanna",2370,2,1,1,true);
const conjuntoFrida = new Conjuntos("Conjunto Frida",2700,5,2,3,true);
const conjuntoEmma = new Conjuntos("Conjunto Emma",2780,25,3,5,true);
const conjuntoAstrid = new Conjuntos("Conjunto Astrid",2590,2,1,1,true);
const conjuntoGreta = new Conjuntos("Conjunto Greta",2880,2,1,1,true);

let listaConjuntos = [];

listaConjuntos.push(new Conjuntos("Conjunto Hanna",2370,2,1,1,true));
listaConjuntos.push(new Conjuntos("Conjunto Frida",2700,5,2,3,true));
listaConjuntos.push(new Conjuntos("Conjunto Emma",2780,25,3,5,true));
listaConjuntos.push(new Conjuntos("Conjunto Astrid",2590,2,1,1,true));
listaConjuntos.push(new Conjuntos("Conjunto Greta",2880,2,1,1,true));

/*function pedirConjuntos() {
    let conjunto1 = Number(prompt("Insertá el precio del primer conjunto"));
    let conjunto2 = Number(prompt("Insertá el precio del segundo conjunto"));
    let sumar= (conjunto1 + conjunto2);
    mostrarResultado(sumar);
    return mostrarResultado;
}
pedirConjuntos();

 function mostrarResultado(a){
    alert(`El total de ambos conjuntos es ${a}`);
    console.log(`El total de ambos conjuntos es ${a}`);*/