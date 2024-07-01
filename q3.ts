function primeNumber(a:number): string{
  if (a < 2) {
  return "NO";
  }

  for(let i = 2 ; i < a ; i++){
    if(a % i == 0 && a % 1 == 0){
      return "NO";
    }
  }
  return "YES";

}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));


module.exports = primeNumber;

/* 
รหัส นศ.: 660612150
ชื่อ-สกุล : บุรัสกร ศรีขาว (ฺBuratsakon Srikhaw)
*/