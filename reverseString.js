function reverseString(str) {
    let empty = "";
    for(let i = 0; i < str.length;i++){
        empty = str.charAt(i) + empty;
    }
    console.log(empty);
    return empty;
  }
  
  reverseString("hello");