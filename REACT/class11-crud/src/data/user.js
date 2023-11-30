import { toast } from "react-toastify";
// initial data
const users = JSON.parse(localStorage.getItem('users')) || [];
console.log("Users :",users);
console.log("Users.Email :",users.email);

// Register
const registerUser = async (user) => {
    console.log('Register =', user);

    const extEmail=()=>{
        return users.email === user.email;
    }
    const extMobile=()=>{
        return users.mobile === user.mobile;
    }

    if(extEmail){
        toast.warning(`${user.email} already Exists`)
    }else if(extMobile){
        toast.warning(`${user.mobie} already Exists`)
    }else{
        toast.success(`Hi, ${user.name} You have registered Successfully`);
        //window.location.href="/login";
    }

    saveUser(user)
};

// Save data
const saveUser=(data)=>{
    localStorage.setItem('users',JSON.stringify(data));
}

export {registerUser};