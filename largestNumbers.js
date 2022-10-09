function largestOfFour(arr) {
    let arr2 = [];
        for(let i = 0; i < arr.length; i++){
            
            arr2.push(arr[i].sort((a,b) => a - b)[arr[i].length - 1]);
        }
        return arr2;
      }
      
      largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);