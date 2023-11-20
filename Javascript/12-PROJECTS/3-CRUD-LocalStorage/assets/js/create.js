let userForm = document.getElementById('userForm');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userProfile = document.getElementById('profile');
let userGender = document.getElementsByName('gender');
let selGender = "";

// Local Storage Config
let users = localStorage.getItem("userinfo") 
? JSON.parse(localStorage.getItem("userinfo")) : [];

// To generate random id - arrow function
const genRanId = () =>{
    let randId = Math.floor(Math.random());
    // console.log(randId);
    return randId;
}

// form submit handler
userForm.addEventListener('submit', function(e){
    e.preventDefault(); // to avoide page refresh

    for (let index = 0; index < userGender.length; index++) {
        if (userGender[index].checked) {
            selGender = userGender[index].value;
            console.log(selGender);
        }
    }
    // Object
    let data = {
        id:genRanId(),
        name:userName.value,
        email:userEmail.value,
        profile:userProfile.value,
        gender:selGender
    }
    console.log("new user = " ,data);

    createUser(data);
});

// To create new user
function createUser(user){
    // console.log(user);

    // console.log(users);
    if (user.email === users.email) {
        alert("user email already registered")
    }else{
        localStorage.setItem("userinfo",JSON.stringify(user));
        alert("new user is created");
        window.location.href = "/index.html"
    }
}

