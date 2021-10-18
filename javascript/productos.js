class Conjuntos{
    constructor({nombre, precio,descripcion,img}) {
        this.nombre = nombre;
            this.precio = precio;
            this.descripcion = descripcion;
            this.img = img;
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
/*class carrito{
    constructor({talleCorpiño,talleBombacha,cantidad}) {
    this.talleCorpiño= talleCorpiño;
    this.talleBombacha= talleBombacha;
    this.cantidad= cantidad;
    }
}
const boton     =document.getElementById("btn");

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
};
boton.addEventListener("click", (e) => {
    e.preventDefault()
    guardarTalles()
})
boton.addEventListener("keydown", (e) => {
    e.preventDefault()
    guardarTalles()
})*/

const imprimirDatos =document.getElementById("printCardProducts");

const conjuntoHanna = new Conjuntos("Conjunto Hanna",2370,"hola");
const conjuntoFrida = new Conjuntos("Conjunto Frida",2700,"hola");
const conjuntoEmma = new Conjuntos("Conjunto Emma",2780,"hola");
const conjuntoAstrid = new Conjuntos("Conjunto Astrid",2590,"hola");
const conjuntoGreta = new Conjuntos("Conjunto Greta",2880,"hola");

let listaConjuntos = [];

listaConjuntos.push({ 'nombre': 'Conjunto Hanna', 'precio': 2370, 'descripcion': "hola", 'img': "../media/conjunto_hanna.jpg"}),
listaConjuntos.push({ 'nombre': 'Conjunto Frida', 'precio': 2370, 'descripcion': "hola", 'img': "../media/conjunto_hanna.jpg"}),
listaConjuntos.push({ 'nombre': 'Conjunto Emma', 'precio': 2370, 'descripcion': "hola", 'img': "../media/conjunto_hanna.jpg"}),
listaConjuntos.push({ 'nombre': 'Conjunto Astrid', 'precio': 2370, 'descripcion': "hola", 'img': "../media/conjunto_hanna.jpg"}),
listaConjuntos.push({ 'nombre': 'Conjunto Greta', 'precio': 2370, 'descripcion': "hola", 'img': "../media/conjunto_hanna.jpg" }),

localStorage.setItem('listaConjuntos', JSON.stringify(listaConjuntos));
let listaStorage = JSON.parse(localStorage.getItem('session'));

listaConjuntos.forEach (element => {
    imprimirDatos.innerHTML += `
        <div class="card col-4" style="width: 10rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element.nombre}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${element.precio}</h6>
        <p class="card-text">${element.descripcion}</p>
        <button>Comprar</button>
        </div>
        </div>
    `});

/*function pedirConjuntos() {
    let conjunto1 = Number(prompt("Insertá el precio del primer conjunto"));
    let conjunto2 = Number(prompt("Insertá el precio del segundo conjunto"));
    let sumar= (conjunto1 + conjunto2);
    mostrarResultado(sumar);
    return mostrarResultado;
}
pedirConjuntos();

 function mostrarResultado(a){
    alert(`El total de ambos conjuntos es ${a}`),
    console.log(`El total de ambos conjuntos es ${a}`),*/
