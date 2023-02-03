//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

// fetch("https://api.github.com/users").then((res) => console.log(res)); //? ham halde
fetch("https://api.github.com/users")
  .then((res) => {
    console.log(res);

    //!Error Handling
    // if (res.status >= 200 && res.status <= 299)
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => showGithubUsers(data))
  .catch((err) => {
    console.log(err);
    const userArticle = document.querySelector(".users");
    userArticle.innerHTML = `
    <h2 class="twxt-warning display-6">${err}</h2>`;
  }); //? islenmis halde

const showGithubUsers = (users) => {
  console.log(users);
  const userArticle = document.querySelector(".users");

  users.forEach((user) => {
    // console.log(user);
    userArticle.innerHTML += `<img class="w-50 mb-3" src=${user.avatar_url} alt="" />
    <h2 class="h3 pb-3 text-warning"> ${user.login}</h2>`;
  });
};

console.log("Finish");
