const userInput = prompt('Enter number', 5);

console.log(userInput, typeof userInput);
console.log(Number(userInput));

if(userInput==='') ||userInput === null || Number.isNan(Number(userInput))) {

}else{
  console.log('error!')
}console.log('done!')







function myFirstFunction(){
  console.log('myFirstFunction');
}

myFirstFunction()

const mySecondFunction = function (){
  console.log('mySecondFunction');
}

mySecondFunction();
console.log(mySecondFunction)