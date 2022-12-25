//* Q1 : Taban ve yukseklik degerlerini parametre olarak alan ve bir ucgenin alanini hesaplayarak ana programa donduren fonksiyonu yaziniz. *//

function calculate(taban, yukseklik) {
  const alan = (taban * yukseklik) / 2;
  return alan;
}
const taban = Number(prompt("ucgenin taban uzunlugunu giriniz:"));
const yukseklik = Number(prompt("ucgenin yuksekligini giriniz:"));
const ucgenAlan = calculate(taban, yukseklik);
console.log(ucgenAlan);

// * Q2 : kareAl, kupAl, usAl seklinde uc adet farkli (arrow) fonksiyonu tanimlayin. Bu fonksiyonlarin ana programdan gereken parametreleri alarak sonuclari ana programa dondurmeleri gerekmektedir. *//

const kareAl = function (kenar) {
  return kenar * kenar;
};
const kenar = Number(prompt("Karenin bir kenar uzunlugunu giriniz:"));
console.log(kareAl(kenar));

const kupAl = function (knr) {
  return knr ** 3;
};
const knr = Number(prompt("Kupun bir kenar uzunlugunu giriniz:"));
console.log(kupAl(knr));

const usAl = function (us) {
  return sayi ** us;
};
const sayi = Number(prompt("Ussunu almak istediginiz sayiyi giriniz:"));
const us = Number(prompt("Ussu giriniz:"));
console.log(usAl(us));

// * Q3 : Yil degerlerini parametre olarak alan ve bu yilin artik yil olup olmadigini hesaplayarak sonucu ana programa  donduren fonksiyonu function-expression yontemi ile yaziniz. Not : Yil 4'e tam bolunuyorsa ve (100'e tam bolunmuyorsa veya 400'e tam bolunuyorsa) artik yildir aksi takdirde degildir.

const artik = function (yil) {
  return yil % 4 === 0 && (yil % 100 !== 0 || yil % 400 === 0)
    ? `${yil} artik yildir`
    : `${yil} artik yil degildir`;
};
const yil = Number(prompt("Bir yil giriniz:"));
console.log(artik(`${yil}`));
