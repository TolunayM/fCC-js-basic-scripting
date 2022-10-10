function getIndexToIns(arr, num) {
    arr.push(num);
    arr = arr.sort((a,b) => a - b);
    console.log(arr.indexOf(num))
    return arr.indexOf(num);

}

    /*for(let i = 0; i < arr.length;i++){
      if(arr[i] > num | arr[i] == num){
        console.log(i);
        return i;
      }
    }*/
  
  getIndexToIns([2, 5, 10], 15);

  /*
  console.log => 3;
  */