var typed = new Typed(".typing",{
    strings: ["Developer","Designer", "Broodje"],
    typeSpeed: 10,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Developer","Designer", "Broodje"],
    typeSpeed: 10,
    backSpeed: 0,
    loop: true
});

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})