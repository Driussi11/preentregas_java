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
    if(edad<=17)
        alert("Sos menor");
        
    alert("Y, para la consigna, vos a hacer la tabla de edad por el numero que desees")
    alert("La cantidad de veces que desees c:")

    alert("Tienes " + edad)

    const hasta = prompt("Cuanta cantidad de tablas?")

    for(let i = 1; i <= hasta; i++) {
        const resultado = i * edad;
        alert(`${edad} * ${i} = ${resultado}`);}
    
}
