const mobileNav = document.querySelector(".mobile-nav");
const humbergerButton = document.querySelector(".humberger-button");

humbergerButton.addEventListener("click", function () {
  humbergerButton.classList.toggle("rotate");
  mobileNav.classList.toggle("show");
});


const gototop = document.querySelector(".btngototop");

window.addEventListener("scroll", function ()
{
  if(window.pageYOffset > 100)
  { gototop.classList.add("active");}
  else{
    gototop.classList.remove("active");
  }
});