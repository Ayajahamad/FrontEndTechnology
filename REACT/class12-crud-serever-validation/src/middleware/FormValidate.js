import React, {useState} from "react";

const initState = {
    name : "",
    email : "",
    image : "",
    mobile : "",
    address  : ""
};

// useForm = > form validate custom hook
function UserForm(){
    const [contact, setContact] = useState(initState);
    const [errors, setError] = useState({});

    // Error Printing
    const errPrint = (prop,msg) => {
        setError({...errors , [prop]:msg});
    }

    const validate = (event,name,value) => {
        switch (name) {
            case "name":
                if (value.length === 0) {
                    errPrint(name,"Email field must be filled");
                }
                break;
        
            default:
                break;
        }
    };

    const readValue = (e) => {
        // console.log("Input Value = ", e.target.name + "-" + e.target.value)
        const  {name,value} = e.target;
        validate(e, name,value);
        setContact({...contact, [name]:value});
    };

    // For Submit The value
    const submitHandler = (e) => {
        e.preventDefault(); // avoide page refresh
        console.log("New Contact = ",contact);
    }

    return {
        contact,
        errors,
        readValue,
        submitHandler,
        setContact
    }
}

export default UserForm;