const user = {
    username: "Abhay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} object in node and window in borwser.

// function funnn(){
//     let username = "Abhay"
//     console.log(this.username);
// } this doesn't work in functions 

// funnn();

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


const another =  () => {
    let username = "ABhay"
    console.log(this);
}
// another();



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );

const addTwo = (num1, num2) => ({username: "hitesh"});


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()