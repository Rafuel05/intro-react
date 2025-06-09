const arr = [1,2,3,4,5]

const highNumbers = arr.filter((number) =>{
    if(number>=3){
        return number
    }
})

console.log(highNumbers)

const users = [
    { name : 'Rafael', available : true},
    { name : 'Lelel', available : true},
    { name : 'The', available : false},
    { name : 'Catatau', available : false},
    { name : 'Suellen', available : true},
]

const availableUsers = users.filter((user) => user.available)

//const notAvailableUsers = users.filter((user) => !user.available)

const notAvailableUsers = users.filter((user) =>{
    if (user.available == false){
        return user 
    }
})

console.log(availableUsers)

console.log=(notAvailableUsers)