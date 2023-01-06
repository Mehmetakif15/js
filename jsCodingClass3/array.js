// ** 1. Yetkisiz kullanıcılardan korunmak için e-posta adreslerini gizlemek için bir JavaScript fonksiyonu yazın.
// ** Test Verisi: console.log(protect_email("robin_singh@example.com")); "robin...@example.com"

// ! Answer 1:

let email = "robin_singh@example.com";

let emailName = email.split("@")[0];
console.log(
  emailName.slice(0, emailName.length - 3) + "...@" + email.split("@")[1]
);

// ! Answer 2:

const emailValidate = function (email) {
  let emailName = email.split("@")[0];
  return (
    emailName.slice(0, emailName.length - 3) + "...@" + email.split("@")[1]
  );
};

console.log(emailValidate(email));
// 2. Bir dizideki tüm elemanların ortalamasını hesaplayan bir JavaScript fonksiyonu yazın. Test Verisi: console.log(average([1,2,3,4,5]));
// 3. verilen pozitif olmayan bir tamsayıyı argüman olarak alan ve rakamları azalan sırada döndüren bir fonksiyon yazmaktır. Özetle, rakamları yeniden düzenleyerek mümkün olan en yüksek sayıyı oluşturun.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
// ** 4. Verilen bir string'de sesli harfleri (a, e, i, o, u) filtreleyin ve sadece sesli harfler olmayan kalan harfleri birleştirin.

//* Examples:
//* Input: "day" Output: "dy"
//* Input: "apple" Output: "ppl"
//* Input: "javascript" Output: "jvscrpt"

let str = "javascript";

function name(str) {
  let list = str.split("");
  let vowels = "aeıioöuü";
  console.log(list);

  let filt = list.filter((e) => !vowels.includes(e));
  console.log(filt);
  return filt.join("");
}
console.log(name(str));

// 5- Bir JavaScript dizisinde tekrar eden  değerleri bulan bir JavaScript programı yazın.
// Examples:
// Input: [1, 2, 3, 2, 1, 4, 5, 6, 7, 8, 9, 9, 10]
// Output: 1, 2, 9
// 6. Elemanları sayılardan oluşan bir listenin elemanlarının karelerinin toplamını bulan bir JavaScript programı yazın.
// Examples:
// Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Output: 285
