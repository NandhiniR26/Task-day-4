// ARROW FUNCTION

// a.Print odd numbers in an array

// let num=[1,2,3,4,5,6,7,8,9,10]

// let odd=(array)=>{
//    let arr=[];
//    for(let ind=0; ind<array.length; ind++)
//    {
//      if(array[ind]%2!==0)
//      {
//       arr.push(array[ind]);
//      }
//    }
//    return arr;
// }
// console.log(odd(num));


// B.Convert all the strings to title caps in a string array

// let str="happy birthday";

// let num= (str)=>{

//    str = str.toLowerCase().split(' ');

//    for (let ind = 0; ind < str.length; ind++) {

//      str[ind] = str[ind].charAt(0).toUpperCase() + str[ind].slice(1); 
//    }

//    return str.join(' ');
// }
// console.log(num(str));


// c.Sum of all numbers in an array

// let array=[1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// let num=(array)=>
// {
//    for(let ind=0; ind<array.length; ind++)
//    {
//      sum=sum+array[ind];
//    }
//    return sum;
// }
// console.log(num(array));


// d.Return all the prime numbers in array

// let array = [1, 3, 2, 5, 10];

// let isPrime = num => {

//   for (let ind = 2; ind < num; ind++) {

//     if (num % ind === 0) return false;
//   }

//   return num !== 1;
// };

// let myPrimeArray = array.filter(isPrime);
// console.log(myPrimeArray);


// e.Return all the palindromes in an array


// let getAllPalindromes = (word) => word.filter((word) => word.split("").reverse().join("") === word);

// console.log(getAllPalindromes(["car","level","madam"]))
 
