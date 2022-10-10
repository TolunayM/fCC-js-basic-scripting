function bouncer(arr) {
    let temp2 = [];
    let temp = arr.slice();
    for(let i = 0; i < temp.length; i++){
        if(temp[i]){
            temp2.push(temp[i]);
        }
      
    }
    return temp2;
  }
  
  bouncer([false, null, 0, NaN, undefined, ""]);

  /*
  console.log = > []
  */