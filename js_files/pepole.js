//module wrapper function
(function(exports,require,__filename,__dirname){

})
console.log(__dirname,__filename)

class Pepole{
    constructor(name,age){
     this.name=name;
     this.age=age;
    }

    greating(){
        console.log(`welcome ${this.name} you are ${this.age}`)
    }
    
}


module.exports = Pepole;