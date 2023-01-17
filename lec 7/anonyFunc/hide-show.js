document.querySelector('.heading').onclick = function () {
  // alert('hey')
  // console.log(this);
  var ans = this.nextElementSibling.style.display;
  console.log(ans);

//   if (ans == 'none') {
//     this.nextElementSibling.style.display = "block";
//   } else {
//     this.nextElementSibling.style.display = "none";
//   }
  (ans=="none")? this.nextElementSibling.style.display = "block": this.nextElementSibling.style.display = "none"
}
