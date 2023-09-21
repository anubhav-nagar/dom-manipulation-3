const accordion = document.querySelectorAll(".accordion");
const open = document.querySelectorAll(".question");

for(let i=0; i<accordion.length; i++){
    // console.log(open[i]);
    open[i].addEventListener("click", function(){
        accordion[i].classList.toggle("active");
    })
}