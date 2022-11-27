(function () {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");
  // const close = document.querySelector("#close_menu");

  burger,
    addEventListener("click", function () {
      menu.classList.toggle("is-shown");
    });
  // close,
  //   addEventListener("click", function () {
  //     menu.classList.toggle("is-shown");
  //   });
})();
