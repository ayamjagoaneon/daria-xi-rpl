//tugas

// let input = parseInt(prompt("masukan nilai"));

// for(let i =0; i<=input; i++){
//     let angka = Math.floor(Math.random() * 6 + 1);

//     switch(angka){
//         case 1 :
//             console.log(`dapat 2`);
//             break;
//         case 2 :
//             console.log(`dapat 4`);
//             break;
//         case 3 :
//             console.log(`dapat 6`);
//             break;
//         case 4 :
//             console.log(`dapat 8`);
//             break;
//         case 5 :
//             console.log(`dapat 10`);
//             break;
//         case 6 :
//             console.log(`dapat 12`);
//             break;


//         default:
//             break;
//     }
// }



//tugas 2

// let waktu = [2,2,3,3,1,4,5]
// let totalBermain = 0;
// let melebihi = 0;
// for (let i=0; i<=waktu.length; i++){
//     // totalBermain += waktu[i]
// if (waktu[i]<2){
//     totalBermain++;
// } else{
//     melebihi++
// }  
// }


let waktuBermain = [2, 2, 3, 3, 1, 4, 5];
let totalWaktu = 0;
let jumlahMelebihi = 0;

for (let i = 0; i < waktuBermain.length; i++) {
  totalWaktu += waktuBermain[i];
  
  if (waktuBermain[i] > 2) {
    jumlahMelebihi++;
  }
}

console.log(`Total waktu bermain game: ${totalWaktu}`, "jam");
console.log("Jumlah melebihi batas waktu bermain:", jumlahMelebihi, "hari");