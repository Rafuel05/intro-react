const sum = function sum (a,b){
    return a + b
}

const user ={
    name: 'Theo',
    sayUserName(){
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log('Username: ' + self.name) // this.nome será undefined
        }, 500)
    },

    sayUserNameArrow(){
        setTimeout(()=> {
            console.log('Username: ' +this.name)// this.nome será "Rafael"
        }, 700)
    }
}

user.sayUserName()

const arrowSum = (a,b) => a + b



console.log(sum(5,5))
console.log(arrowSum(5,5))