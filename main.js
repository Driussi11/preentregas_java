function register() {
    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;

    if (localStorage.getItem(regUsername)) {
        alert("El nombre ya esta en uso. Elige otro o intenta iniciar sesion");
    } else {
        localStorage.setItem(regUsername, regPassword);
        alert("Registrado correctamente, procede a iniciar sesion");
        
        window.location.href = "login.html";
    }
}

function login() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    if (localStorage.getItem(loginUsername) === loginPassword) {
        alert("Iniciaste sesion correctamente");

        window.location.href = "final.html";
    } else {
        alert("Usuario o contraseña incorrecto");
    }
}