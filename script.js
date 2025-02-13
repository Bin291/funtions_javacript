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
//     if(a!=0 && b!=0){
//         return -b/a;
//     }
//     if(a!=0 && b==0){
//         return "Vo nghiem"

//     }
//     if(a==0&&b==0) {
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
//     let c = BigInt(a)
//     let d = BigInt(b)
//     return (c+d).toString()
// }
// let result = add(1265213626735293612763 , 2187389127362713671217236187213)
// console.log(result)

// function multiply(a,b){
//     let c = BigInt(a)
//     let d = BigInt(b)
//     return (c*d).toString()
// }
// let result1 = multiply(1265213626735293612763 , 2187389127362713671217236187213)
// console.log(result1)


