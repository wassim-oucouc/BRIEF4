// const section = document.getElementsByClassName("h")[0];
// console.log(document.getElementsByClassName("h"));
// // const sos = document.getElementById("Question");



// section.addEventListener("click", function() {

//     document.getElementById("quizz").style.display ="none";
//     console.log(document.getElementById("quizz"))
//     document.getElementById("Question").style.display = "block";
// });

const section = document.querySelectorAll('.Question');
const nextButton =  document.querySelectorAll('.next');
const backboutton = document.querySelectorAll('.back');
let count = 0 ;

nextButton.forEach(function(btn){
    btn.onclick = function(){

      section[count].classList.remove("d-block");
      section[count].classList.add("d-none");
    

    count++ ;

    if(count >= section.length){
        count = 0;
    }

    section[count].classList.remove("d-none");
    section[count].classList.add("d-block")
};
});

backboutton.forEach(function(backbtn){
    backbtn.onclick = function() {
        section[count].classList.remove("d-block");
        section[count].classList.add("d-none");

        count--;

        section[count].classList.remove("d-none");
        section[count].classList.add("d-block");
    }
})




