//1- var, let e const
let a =5;
let b = 6
let i = "ingrid"

if (b>5){
   let a = 6
    console.log(a)
}

console.log(a)

for (let i = 0; i< 5 ; i++){
    console.log(i)
}


console.log(i)

function logName(){
    const name = 'matheus'
    console.log(name)
}

const name = 'Pedro'
console.log(name)
logName()