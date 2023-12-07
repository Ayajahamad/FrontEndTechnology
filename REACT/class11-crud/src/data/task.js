import { toast } from "react-toastify";

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// console.log("TASK ARRAY = ",tasks);

// RAND ID() Generator
 const randTd = () => {
    return Math.floor(Math.random()*1000);
 }
// console.log("Rand ID" , randTd());


// Save the Task
const saveTask = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
}

// Store the tasks
const createTask = async (task) => {
    // console.log("TASK.JS = ", task);

    try {
        const extTask = tasks.find((item)=>item.title === task.title);
        if (extTask) {
            toast.warning(`Task is already exists`)
        } else {
            const newTask = {
                id: randTd(),
                ...task,
            };
            tasks.push(newTask);
            saveTask(tasks);
            toast.success("New task created successfully");
            window.location.href = "/";
        }
        }
        catch (error) {
        toast.error(error.message);
    }
}


export {createTask};