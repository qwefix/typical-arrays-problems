
exports.min = function min (array) {
  if(!array||array.length==0){return 0};
  let minItem=array[1];
  for(let item of array){
    if (item<minItem){
      minItem=item
    }
  }
  return minItem
}

exports.max = function max (array) {
  if(!array||array.length==0){return 0};
  let maxItem=array[1];
  for(let item of array){
    if (item>maxItem){
      maxItem=item
    }
  }
  return maxItem
}

exports.avg = function avg (array) {
  if(!array||array.length==0){return 0};
  let sum=0;
  let length=array.length;
  for(let item of array){
    sum+=item;
  }
  return sum/length;

}
