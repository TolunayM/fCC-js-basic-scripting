function frankenSplice(arr1, arr2, n) {

  let tempArray = arr2.slice();

  for(let i = 0; i < arr1.length;i++){
    tempArray.splice(n,0,arr1[i]);
    n++;
  }
  return tempArray;

}
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  /*
  console.log = > [ 4, 1, 2, 3, 5, 6 ];
  */