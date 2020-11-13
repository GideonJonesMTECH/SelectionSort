class Search {
 binary(arr, val) {
  let start = 0;
  let end = arr.length-1;
  while (start <= end) {
   let mid = Math.floor((start + end) / 2);
   if(arr[mid] === val) {return true;}
   else if(arr[mid < val]) start = mid + 1;
   else end = mid-1;
  }
  return false;
 }
 jump(arr, val) {
  let length = arr.length;
  let step = Math.floor(Math.sqrt(length));
  let index = Math.min(step, length)-1;
  let lowerBound = 0;
  while(arr[index] < val){
   lowerBound = step;
   step += step;
   if(lowerBound >= length) return false;
  }

  let upperBound = Math.min(step,length);
  while(arr[lowerBound] < val){
   lowerBound++;
   if(lowerBound == upperBound) return false;
  }
  if(arr[lowerBound] == val){
   return true;
  }
  return false;
 }
}