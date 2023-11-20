// Local Storage Config
let users = localStorage.getItem("userinfo") 
? JSON.parse(localStorage.getItem("userinfo")) 
: [];

console.log(users);

let result = document.getElementById('result');

// to print the data from the local storage
function printUser(){
    result.innerHTML += `
    <img src=${users.profile} alt="">
    <p><b>USER ID :</b> <span>${users.id}</span></p>
            <p><b>NAME : </b> <span>${users.name}</span></p>
            <p><b>EMAIL : </b> <span>${users.email}</span></p>
            <p><a href="/update.html" class="btn">EDIT</a> <a href="#" class="btn" onclick='deleteUser(${users.id})'>DELETE</a></p>
    `
}
printUser();

function deleteUser(id){
    alert(id)

    if (confirm(`Are you sure to delete an user id = ${id}`)) {
        if (id === users.id) {
            localStorage.removeItem("userinfo");
            alert("User deleted Successfully.");
            result.style.display = "none"
        } 
    } else {
        alert("Delete Operation cancelled");
    }
}