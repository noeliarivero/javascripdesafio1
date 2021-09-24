let dato = Number(prompt("Ingresa el número de tu comisión"));
let comision = 22405;
let intentos = 3;

while(dato != comision && intentos > 0){
    alert(` El numero de comisión que ingresaste es inválido, te quedan ${intentos} intentos. `);
    intentos--;
    dato = Number(prompt("Ingresa el número de tu comisión"));
} 
if (dato === comision){
    alert(`Ingresaste al curso Javascript.`);
}
