function correr(){
    let nombre = prompt("Cual es su nombre?")
    if (nombre == ""){
        alert("Dale, pone un nombre");
        return;
    }
    if (nombre == "Jorge")
    alert("Ay, hola tutor c:")

    if (nombre == "jorge")
    alert("Ay, hola tutor c:")


    let apellido = prompt("Cual es su apellido?")
    if (apellido == ""){
        alert("Eu, apellido");
        return;
    }

    alert("Hola " + nombre + " " + apellido + "!");

    let edad = prompt("Cuantos años tenes?")
    if (edad>=18)
    alert("Sos mayor capo");
    else(
        alert("Sos menor")
    )
}