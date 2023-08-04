var cuentas = [ 
    {
        username: "Martin",
        password: "12345"
    },
    {
        username: "Jorge",
        password: "123" 
    },
    {
        username: "Julieta",
        password: "mas123"
    },
    {
        username: "Mauro",
        password: "sheros"
    },
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < cuentas.length; i++){
        if(username == cuentas[i].username && password == cuentas[i].password){
            window.location.href = "home.html"
        return
    }
  }
  alert("Contraseña y/o usuario incorrecto")
}