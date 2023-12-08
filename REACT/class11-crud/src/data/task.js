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

// Get All Tasks
const readAllTask = () =>{
    return tasks;
}

// Delete single task
const deleteTask = (id) => {
    try {
        const taskIndex = tasks.findIndex((item) => item.id === id);
        console.log("indext",taskIndex)
        tasks.splice(taskIndex,1)
        saveTask(tasks);
        toast.success(`${id} Deleted Successfully`);
        window.location.href = "/";
    } catch (error) {
        toast.error(error.message)
    }
}

// Get Single Task
const readSingleTask = (id) => {
    const data = tasks.find((item) => item.id == id);
    return data;
}

// Update Task
const updateTask = (id,task) => {
    try {
        const taskIndex = tasks.findIndex((item) => item.id == id);
        tasks.splice(taskIndex,1,task);
        saveTask(tasks);
        toast.success("Updated Successfull");
        window.location.href = "/";
    } catch (error) {
        toast.error(error.message);
    }
}

export {createTask,readAllTask,deleteTask,readSingleTask,updateTask};