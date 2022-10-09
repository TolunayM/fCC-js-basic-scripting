function confirmEnding(str, target) {

    let reg = new RegExp(target + "$", "i");
  
    return reg.test(str);
  }
  
  confirmEnding("Bastian", "n");

  /*
  console.log  => true 
  */