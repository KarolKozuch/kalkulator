$(document).ready( () => {
  console.log($('body').find('.calculator').height(0.6*window.outerHeight))

  let btns = document.querySelectorAll('.circle');
  let numbsToCount = [];

  btns.forEach((number) => {
    number.addEventListener("click", (ev) => {
      numbsToCount.push(number.innerText.trim());
      console.log(numbsToCount);
      alert(number.innerText);
    });
  });








});
