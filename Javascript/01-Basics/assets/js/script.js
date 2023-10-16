//P3b.HTML CODE
function TestFun() {
    alert("Hi Test Function..!");
}

document.getElementById('btn').onclick = TestFun;

// // SCOPE
// var a = 12;
// const b = 33;
// let c = 44;
// var d = 50;

// document.write(`<p>a =${a}</p>`);
// document.write(`<p>b =${b}</p>`);
// document.write(`<p>c =${c}</p>`);
// document.write(`<p>d =${d}</p><hr>`);

// if(d > 20){
//     // Block
//     document.write(`<p>a =${a}</p>`);
//     document.write(`<p>b =${b}</p>`);
//     document.write(`<p>c =${c}</p>`);
//     document.write(`<p>d =${d}</p><hr>`);

//     var x = 100;
//     let y = 200;
//     const z = 300;

//     document.write(`<p>x =${x}</p>`);
//     document.write(`<p>y =${y}</p>`);
//     document.write(`<p>z =${z}</p>`);
// }
// document.write(`<p>x =${x}</p>`)
// //document.write(`<p>y =${y}</p>`)//p3.html: 42 Uncaut ReferenceError
// //document.write(`<p>z =${z}</p>`)//p3.html: 43 Uncaut ReferenceError

// var isAdmin =  false;
// document.write(`<p>isAdmin = ${typeof(isAdmin)}</p>`);
// document.write(`<p>isAdmin = ${isAdmin}</p>`);

// var title =  "Welcome to jS";
// document.write(`<p>title = ${typeof(title)}</p>`);
// document.write(`<p>title = ${title}</p>`);

// var xx =  1234;
// document.write(`<p>xx = ${typeof(xx)}</p>`);
// document.write(`<p>xx = ${xx}</p>`);

// var yy =  34.444; 
// document.write(`<p>yy = ${typeof(yy)}</p>`);
// document.write(`<p>yy = ${yy}</p> <hr>`);

// //Array
// var colors = ["orange","blue","red","green",100,true,500.5]
// document.write(`<p>colors = ${typeof(colors)}</p>`);
// document.write(`<p>colors = ${colors}</p> <hr>`);

// // Object
// var user = {
//     //key : value => property
//     name: "ramesh",
//     email: "ramesh@gmail.com"
// };
// document.write(`<p>user = ${typeof(user)}</p>`);
// document.write(`<p>user = ${user}</p> <hr>`);

// // function block = behaviours
// // function name (params)

// function defaultFun() // Function Declaration
// {
//     document.write(`<p>This is DEFAULT FUNCTION.</p><hr>`);
// }
// defaultFun(); // Function Calling

// function paramterFun(name, email){
//     document.write(`<p>This is PARAMETERIZED FUNCTION.</p>`);
//     document.write(`<p>First Parameter is : ${name}</p>`);
//     document.write(`<p>Second Parameter is : ${email}</p>`);
// }
// paramterFun("JAvaScript", "admin@javascript.com");

