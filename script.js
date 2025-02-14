// function add (){
//     let a = 100;
//     let b = 15;
//     // let result = a+b;
//     // console.log(result);
//     return a+b;
// }
// let result=add();
// console.log(result);

// function add(a,b){
//     return a+b;
// }
// // let a = 100;
// // let b = 15;
// let result = add(12,24231);
// console.log(result)

// function minus(a,b){
//     return a-b;
// }
// function minus(a,b){
//     return b-a;
// }
// let result = minus(13,13);
// console.log(result);
// let result2= minus(12,13);
// console.log(result2);

// function mutiply(a,b){
//     return a*b;
// }
// function devide(a,b){
//     return a/b;
// }
// let result = mutiply(7,7);
// console.log(result);
// let result2= devide(12,12);
// console.log(result2);

// function linearEquationSolve(a,b){
//     return -b/a;
// }
// let result = linearEquationSolve(0,0);
// console.log(result)

// function linearEquationSolve(a,b){
// if(a!=0 && b!=0){
//     return -b/a;
// }
// if(a!=0 && b==0){
//     return "Vo nghiem"
// }
// if(a==0&&b==0) {
//     return "vo so nghiem"
// }
// }
// const x = linearEquationSolve(0,0);
// console.log(x)

// function giaiPhuongTrinhBachai(a,b,c){
//     let delta = ((b*b)-(4*a*c))
//     if (delta==0){
//         return `nghiem kep x1=x2=${(-b)/(2*a)}`

//     }
//     if(delta>0){
//         return `phuong trinh co 2 nghiem phan biet x1= ${(-b+Math.sqrt(delta))/(2*a)} , x2=${(-b-Math.sqrt(delta))/(2*a)}`
//     }
//     if(delta<0){
//         return "Vo nghiem"
//     }
//     if(a==0){
//         return `phuong trinh bac 1 => x=${-c/b}`
//     }
//     if(b!=0 && c!=0){
//         return -b/a;
//     }
//     if(b!=0 && c==0){
//         return "Vo nghiem"
//     }
//     if(b==0 && c ==0) {
//         return "vo so nghiem"
//     }
// }
// let result = giaiPhuongTrinhBachai(1,-49,-50)
// console.log(result)





// TINH NAM NHUAN
// function tinhLichNhuan(year) {
//     if (year % 400 == 0) {
//         return 'Năm nhuận';
//     } else if (year % 100 == 0) {
//         return 'khong phai nam nhuan';
//     } else if (year % 4 == 0) {
//         return 'Năm nhuận';
//     } else {
//         return 'khong phai nam nhuan';
//     }
// }
//  let result = tinhLichNhuan(2024)
//  console.log(result)





//TINH CAN CHI
// function CanChi(year) {
//     const canList = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
//     const chiList = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];
//     let can = canList[(year + 6) % 10];
//     let chi = chiList[(year + 8) % 12];
//     return `${can} ${chi}`;
// }
// let nam = CanChi(2004)
// console.log(nam)




// //Tinh chuoi so lon
// function add(a,b){
//     const c = BigInt(a)
//     const d = BigInt(b)
//     return (c+d).toString()
// }
// let result = add(1265213626735293612763 , 2187389127362713671217236187213)
// console.log(result)

// function multiply(a,b){
//     const c = BigInt(a)
//     const d = BigInt(b)
//     return (c*d).toString()
// }
// let result1 = multiply(1265213626735293612763 , 2187389127362713671217236187213)
// console.log(result1)




// // Testcase
// function adđ_length(a, b) {
//   let Nho = 0; 
//   let result = "";
//   let daySo1 = a.length;
//   let daySo2 = b.length;
//   let maxLen = Math.max(daySo1, daySo2);
//   for (let i = 0; i < maxLen; i++) {
//     let digit1 = i < daySo1 ? parseInt(a[daySo1 - 1 - i]) : 0;
//     let digit2 = i < daySo2 ? parseInt(b[daySo2 - 1 - i]) : 0;
//     let sum = digit1 + digit2 + Nho;

//     result = (sum % 10) + result;
//     Nho = Math.floor(sum / 10); 
//   }
//   if (Nho > 0) {
//     result = Nho + result;
//   }
//   return result;
// }

// console.log(
//   adđ_length(
//     "123456789123456789009876543212345678909098765456789876543212345678987878987654321",
//     "1234567890123456789012345678901234567891234567890123456789"
//   )
// );

// function multiply_length(a, b) {
//   let daySo1 = a.length,
//     daySo2 = b.length;
//   let result = Array(daySo1 + daySo2).fill(0); 

//   for (let i = daySo1 - 1; i >= 0; i--) {
//     for (let j = daySo2 - 1; j >= 0; j--) {
//       let mul = parseInt(a[i]) * parseInt(b[j]);
//       let sum = mul + result[i + j + 1];

//       result[i + j + 1] = sum % 10; 
//       result[i + j] += Math.floor(sum / 10);
//   }

//   // Loại bỏ các số 0 dư ở đầu
//   while (result.length > 1 && result[0] === 0) {
//     result.shift();
//   }

//   return result.join("");
// }

// // Test
// console.log(
//   multiply_length(
//     "1234567890123456789012345678",
//     "9234567891234567890098765432"
//   )
// );

// function multiply_length(a, b) {
//   let daySo1 = a.length,
//     daySo2 = b.length;
//   let result = Array(daySo1 + daySo2).fill(0);

//   for (let i = daySo1 - 1; i >= 0; i--) {
//     for (let j = daySo2 - 1; j >= 0; j--) {
//       let mul = parseInt(a[i]) * parseInt(b[j]);
//       let sum = mul + result[i + j + 1];

//       result[i + j + 1] = sum % 10;
//       result[i + j] += Math.floor(sum / 10);
//     }
//   }
//   while (result.length > 1 && result[0] === 0) {
//     result.shift();
//   }
//   return result.join("");
// }
// console.log(
//   multiply_length(
//     "123456789123456789009876543212345678909098765456789876543212345678987878987654321","1234567890123456789012345678901234567891234567890123456789"
//   )
// );




// function multiply(a,b){
//     const c = BigInt(a)
//     const d = BigInt(b)
//     return (c*d).toString()
// }
// let result1 = multiply(1234567890123456789012345678 , 9234567891234567890098765432)
// console.log(result1)

// function multiply1(a,b){
//     const c = BigInt(a)
//     const d = BigInt(b)
//     return (c*d).toString()
// }
// let result2 = multiply1(123456789123456789009876543212345678909098765456789876543212345678987878987654321 , 1234567890123456789012345678901234567891234567890123456789)
// console.log(result2)
