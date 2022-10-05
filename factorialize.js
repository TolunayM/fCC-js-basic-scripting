function factorialize(num) {
    return (num > 0 ? factorialize(num - 1) * num : 1);
  }
  
  factorialize(5);