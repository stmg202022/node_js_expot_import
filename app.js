


// let myinfo = () =>{
//     console.log("My name is samson Tamang I am from Nepal")

// }

// const sum = (a, b) =>{
//     return a + b;
// }

// //===============This is node js export===========
// module.exports = {
//     myinfo, 
//     sum
// }


//========================another way to export =================

// module.exports = {
//     sum: (a, b) => {
//         return a + b;
//     },

//     myinfo: () => {
//         console.log("My name is samson Tamang i am from Nepal.");
//     }
// }

// =========================single by single module export=================
module.exports.sum = (a, b) => {
    return a + b;
}

module.exports.myinfo = (a, b) => {
    console.log("My name is samson Tamang i am from Nepal.");
}
