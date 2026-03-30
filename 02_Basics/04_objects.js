//const tinderUser = new Object(); // This is a singleton object.

const tinderUser ={}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhay",
            lastname: "Patel"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // This will put objects inside objects
// const obj3 = Object.assign({}, obj1, obj2, obj4) // it copies the objects into the new object
// first {} will become the target and after that all are the sources.

const obj3 = {...obj1, ...obj2} // we mostly use this type.
// console.log(obj3);

//array of objects.
const users = [
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 1,
        email: "A@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // return array
// console.log(Object.values(tinderUser)); // return array
// console.log(Object.entries(tinderUser)); //return array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// Destructuring 

const course = {
    coursename: "javaScript",
    price: "899",
    courseInstructor: "Abhay"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Abhay",
//     "coursename": "javaScript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]