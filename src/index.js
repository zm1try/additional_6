module.exports = function zeros(expression) {
  // your solution
  var str = '',
      i = 0,
      a = 0,
      count = 0,
      zero = '',
      result = 1,
      two = 0,
      five = 0,
      ten = 0,
      num = 0,
      hund = 0;

  str = expression;
  str = str.split('*');

  for(i = 0; i < str.length; i++) {
    if (str[i].charAt(str[i].length-1) === '!' && str[i].charAt(str[i].length-2) === '!') {

      str[i] = parseInt(str[i].split('!!'));
      num = str[i];
      if (num%2 == 0) {
        hund += Math.floor(num/100);
        ten += Math.floor(num/10);
        if (num >= 50) five++;
        two += Math.floor(num/2);
      }
      else {
        five += Math.ceil(Math.floor(num/5)/2);
        if (num >= 25) five++;
        if (num >= 75) five++;
        }
      //console.log(str[i]);
      //console.log(count);
    }
    else {
      str[i] = parseInt(str[i].split('!'));
      num = str[i];
      hund += Math.floor(num/100);
      //ten += Math.floor(num/10);
      five += Math.floor(num/5);
      if (num >= 25) five++;
      if (num >= 50) five++;
      if (num >= 75) five++;
      //five += Math.floor(num/25);
      //five += Math.floor(num/75);
      two += Math.floor(num/2);
      //console.log(str[i]);
      //console.log(count);
    }
    
  }
  //console.log(count);
  //console.log(two);
  //console.log(five);
  //console.log(ten);
  //console.log(hund);


  if (five >= two)
    count = hund + ten + two;
  else count = hund + ten + five;
  console.log(count);
  return count;
}
/*function factorial(num,type) {
  var two = 0,
      five = 0,
      ten = 0,
      pair = 0;
      hund = 0;
  
  if (type === '!') {
    hund = Math.floor(num/100);
    ten = Math.floor(num/10);
    five = Math.floor(num/5);
    two = Math.floor(num/2);
    if (five >= two)
      return (hund*2+ten+two);
    else return (hund*2+ten+five);

    return (Math.floor(num/10)+(Math.floor(num/5)));
    }
    else { 
      if (num%2 === 0)
        return Math.floor(num/10);
      else return Math.floor(num/5);
   }
}*/
  

  /*for(a = 0; a < str.length; a++) {
    result *= str[a];
  }
  result = result.toString();
  count = result.length;
  while (result.charAt(count-1) === '0') {
    zero++;
    count--
  }
  return zero;
}

function factorial(num,type) {
  if (type === '!') {
   if (num < 0) {
     return 1;
   }
   else 
     if (num == 0) {
       return 1;
     }
     else {
       return (num * factorial((num - 1),'!'));
     }
   }
   else { 
     if (num < 0) {
       return 1;
     }
     else 
       if (num == 0) {
         return 1;
       }
       else {
         return (num * factorial((num - 2),'!!'));
       }
   }*/
  
