// ? # ODEV1: Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalamasini hesaplayarak yazdirmalidir.

const kac = Number(prompt("enter a number"));
let ort = 0;
for (let i = 1; i <= kac; i++) {
  let sayi = Number(prompt("sayi:"));
  ort = ort + sayi;
}
console.log(`${ort / kac}`);

// ? # ODEV2: Console'dan girilen taban ve pozitif us degerlerine gore uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.

const taban = Number(prompt("taban:"));
const us = Number(prompt("us:"));
if (us < 1) {
  console.log("pozitif sayi giriniz");
}
let sonuc = 1;
for (let i = 0; i < us; i++) {
  sonuc *= taban;
}
console.log(`${sonuc}`);

// ? # ODEV3 (ZOR): Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimi ile yaziniz.

let num = Number(prompt("Sayi giriniz:"));
let counter = 0;

while (num > 0) {
  num = Math.trunc(num / 10);
  counter++;
}
console.log(counter);
