//singleton object
//const  tinderuser = new Object();


const  tinderuser = {}

tinderuser.id="5142ab";
tinderuser.name ="vipin";
tinderuser.isLoggedIn = false;

//console.log(tinderuser);


const regularUser ={
    email :"vipin@autodesk.com",
    username:{
        fullname:{
            name:"Vipin",
            lastname :'kachwaha'
        }
    }
}

//console.log(regularUser.username);

const obj1 ={1:'a',2:'b'};
const obj2 = {3:'a',4:'b'};

//merging of two objects
const obj3 = {obj1,obj2}; //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//console.log(obj3);


// merging the object using the assign function

//const obj4 = Object.assign(obj1,obj2); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } but the best method to write is Object.assign({},obj1,obj2);
//console.log(obj4);

//best method is 
const obj5 = {...obj1, ...obj2}

//console.log(obj5);

// when we are making project then the values come are array of objects

const  users =[
    {
        name:'vipin',
        id:12
    },
    {

    },
    {

    }
]

//console.log(users[0].name);

//console.log(tinderuser);


// geting the key of an object and the key we  get are in array
// console.log(Object.keys(tinderuser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderuser)); //[ '5142ab', 'vipin', false ]
// console.log(Object.entries(tinderuser));//[ [ 'id', '5142ab' ], [ 'name', 'vipin' ], [ 'isLoggedIn', false ] ]
// console.log(Object.hasOwnProperty('isLoggedIn'));


// destructuring of object

const course={
    coursename :'js in hindi',
    coursefee:999,
    courseInstructor:'vipin'
}

//accessing the values
course.courseInstructor

//but another way is , we can also give name to our courseInstructor an different name 
const {courseInstructor}=course
console.log(courseInstructor);

const {courseInstructor:instructor}=course
console.log(instructor);



// learning about API

// SOME TIME THE API VLAUES ARE IN OBJECT FORM 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// AND SOMETIME THE API VALUES ARE IN ARRAY OF OBJECT FORM
[
    {},
    {},
    {}
]