class Sort {
 constructor(){

 }
 selection(arr) { 
  let arrLength = arr.length;
  for(let i = 0; i < arrLength - 1; i++) {
   let min = i;
   for(let j = i + 1; j < arrLength; j++){
    if(arr[j] < arr[min]) {
     min=j; 
    }
   }
   if (min != i) {
    // Swapping the elements
    let b = arr[i]; 
    arr[i] = arr[min];
    arr[min] = b;      
   }
  }
  return arr;
 }
}


