function chunkArrayInGroups(arr, size) {
    let count = size;
    let tempArr = [];
    for(let i = 0; i < arr.length;i += count){
        tempArr.push(arr.slice(i,size));
        size += count;
        console.log(tempArr);
    }
    return tempArr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

  /*
  console.log = > [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8 ] ];
  */