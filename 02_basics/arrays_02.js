const marvels = ['spiderman','thor','ironman']
const  dc_heros = ['superman','batman','flash']

// console.log(marvels);
// console.log(dc_heros);

//marvels.push(dc_heros); //
//console.log(marvels);[ 'spiderman', 'thor', 'ironman',['superman','batman','flash']  ]
//console.log(marvels[3][2]);

 //const newarr = marvels.concat(dc_heros); //[ 'spiderman', 'thor', 'ironman', 'superman', 'batman', 'flash' ] concat will produce a new array
 //console.log(newarr);

 // sometime we donot use the concate function to  merge two array we use spread function to do it 

// const newspreadarrray = [...marvels, ...dc_heros];
 //console.log(newspreadarrray);

 const multiarr = [1,2,3,5,6,[7,8,9],11,22,33,[12,13,[14,52]]]; 
 const newmultiarr = multiarr.flat(Infinity); // this will make the array a single array
 //console.log(newmultiarr);


// converting the differnt format into array
console.log(Array.isArray("vipin")); // check if it is array or not

console.log(Array.from("vipin"));

console.log(Array.from({name:"vipin"})); //this will give an empty array as it will not able to covert it because we haven't tell that it have to make array of key or value

let score1 =100;
let score2 =200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
