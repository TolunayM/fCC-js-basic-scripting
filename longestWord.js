function findLongestWordLength(str) {
    let temp = [];
    let reg = /\w+/gi;
    let array = [];
    temp = str.match(reg);
    for(let i = 0; i < temp.length;i++){
        array.push(temp[i].length);       
    }
    return array.sort((a, b) => a - b)[array.length - 1];
  }
  
  findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");