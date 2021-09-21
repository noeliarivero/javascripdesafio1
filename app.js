let nota = Number(prompt("Ingresá la nota que obtuviste en el examen de Ingreso"));
const turno1 = "mañana";
const turno2 = "tarde";
const turno3 = "noche";    

if(nota <= 5) {
    alert("Lo sentimos no lograste aprobar el ingreso 2022 a UNL, te esperamos el próximo año!");
} else if(nota >= 6) {
    alert("Felicitaciones aprobaste el examen, ingresaste a la UNL.")
    let turno = prompt("En que turno deseas cursar? Podes elegir entre los siguientes: mañana, tarde y noche");
    turno = turno.toLowerCase()
    if(turno === turno2 || turno === turno3) {
        alert("Haz reservado tu turno")
    } else if(turno = turno1) {
        alert("Lo sentimos, no hay más cupo para el turno mañana")
    }
}
