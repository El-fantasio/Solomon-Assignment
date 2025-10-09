const numbers =[22,67, 33, 96, 88, 72, 49, 11, 53];

function calculateSum(arr ) {
   let sum = 0;

   for(let i = 0; i < arr.length; i++){
       sum = sum + arr[i];
   }

   return sum;

}

function findMax(arr) {
   let max = 0

   for (let i = 0; i < arr.length; i++){
    const currentElement = arr[i];

    if (currentElement > max){
       max = currentElement;

    }
   }


   return max;
}

const sum = calculateSum(numbers);
const maxElement = findMax(numbers);
const average = sum / numbers.length;

console.log(`sum: ${sum}, Average: ${average}, max: ${maxElement}`);