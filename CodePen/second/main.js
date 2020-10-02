function getResult(x,y){
    let result = 0;
    let prom = Math.pow(x, y);
    let buf;
    while (prom > 0) {
        buf = prom % 10;
        result += buf;
        prom = Math.floor(prom / 10);
    }
    return result;
  }
  
  console.log(getResult(4, 8));