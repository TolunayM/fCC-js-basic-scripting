
//largest number in unordered array
function largest(arr){
    let index = null;
    let arr2 = arr;
    let largestNum = 0;
    
    for(let i = (arr2.length - 1); i > 0; i--){
        for(let j = i - 1; j >= 0; j--){
            if(arr2[i] - arr2[j] > largestNum){
                largestNum = arr2[i] - arr2[j];
                index = arr2.indexOf(arr2[i]);
            }
        }
        
    }
    console.log(`Largest number is ${arr2[index]} index at ${index} `);
    }


largest([
    -100,  110, 190,  140,  180, -200,    0,
     150,  100, 210,  290,  240,  280, -100,
     100,  250, 200,   80,   30,   70, -310,
    -110,   40, -10,  -50,  -10, -390, -190,
     -40,  -90,  40, -340, -140,   10,  -40,
    -380, -180, -30,  -80,  200,  350,  300,
     150,  100, -50
  ]);
