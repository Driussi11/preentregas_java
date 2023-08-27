let users = []

if(localStorage.getItem("user")){
    let usersArray = JSON.parse(localStorage.getItem("user")) || []
    
    console.log(typeof usersArray)
}

let form = document.getElementById("form")

if(localStorage.getItem("username") && localStorage.getItem("password")){
    document.getElementById("username").value = localStorage.getItem("username")
    document.getElementById("password").value = localStorage.getItem("password")
}



form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    let user = {
        username:username,
        password:password,
    }
    // storage

    localStorage.setItem("user",JSON.stringify(user))

    localStorage.setItem("username", username)
    localStorage.setItem("password", password)

    alert("Detalles guardados en los archivos")
})