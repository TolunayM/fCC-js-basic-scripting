function truncateString(str, num) {

    let decide = (str.length > num ? (str.slice(0,num) + "...") : str);
    console.log(decide);
    return decide;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

  /**
    console.log => A-tisket...
   */