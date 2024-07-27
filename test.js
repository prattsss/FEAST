// function findDuplicates(arr) {
//   const duplicates = [];
//   const map = new Map();
//   for (const num of arr) {
//     if (map.has(num)) {
//       duplicates.push(num);
//     } else {
//       map.set(num, true);
//     }
//   }
//   return duplicates;
// }

// console.log(findDuplicates([1, 2, 3, 1, 2, 4])); // [1, 2]

// function countOccurrences(str) {
//   const counts = {};
//   for (const char of str) {
//     counts[char] = (counts[char] || 0) + 2;
//   }
//   return counts;
// }

// console.log(countOccurrences("hello")); // { h: 1, e: 1, l: 2, o: 1 }


function findDuplicates (arr){
  let tempArray = [0]
  for(let i  = 0; i < arr.length; i ++){
     let setOne = arr[i];
     for(j = 1; j < i -1; j++){
      let setTwo = arr[j]
      if(setTwo[j] !== setOne[i]){
        tempArray.push(setTwo[j]);
      }

     }
  }
  return tempArray
}
console.log(findDuplicates([1, 2, 3, 1, 2, 4])); // [1, 2]