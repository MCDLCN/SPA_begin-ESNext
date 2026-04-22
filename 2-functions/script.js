//2.1 Fonctions simples

/*
const sayHello = function() {
    console.log('Hello')
};
*/

const sayHello = () => console.log('Hello')

/*
const sayMyName = function(first, last) {
    console.log(first, last)
};
*/

const sayMyName = (first, last) => console.log(first, last)

/*
const sayMyAge = function(age) {
    console.log('You are ' + age + ' years old')
};
*/


const sayMyAge = (age) => console.log('You are ' + age + ' years old')

sayHello();
sayMyName('Odile', 'Crok');
sayMyAge(23);

//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis: function() {
        console.log(this)
    }
    /*showThis: () => console.log(this)*/
};

object.showThis();

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello: () => console.log('Hello'),
    sayMyName(){
        console.log(this.name.first, this.name.last)
    },
    sayMyAge(){
        console.log('You are ' + this.age + ' years old')
    }
};

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()
