function repeatStringNumTimes(str, num) {
    let str2 = "";
      if(num > 0){
        for(let i = 0; i < num;i++){
          str2 += str;
        }
        return str2;
    
      }else{
    
        return "";
      }
    }
    
    repeatStringNumTimes("abc", 3);

    /*
    console.log => abcabcabc
    */