const plusIcon1 = document.getElementById("plus-icon1");
const plusIcon2 = document.getElementById("plus-icon2");
const plusIcon3 = document.getElementById("plus-icon3");
const plusIcon4 = document.getElementById("plus-icon4");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const question1Div = document.getElementById("question1Div");
const question2Div = document.getElementById("question2Div");
const question3Div = document.getElementById("question3Div");
const question4Div = document.getElementById("question4Div");

plusIcon1.src = "assets/images/icon-plus.svg";
plusIcon2.src = "assets/images/icon-plus.svg";
plusIcon3.src = "assets/images/icon-plus.svg";
plusIcon4.src = "assets/images/icon-plus.svg";

plusIcon1.addEventListener("click", () => {
  answer1.classList.toggle("show")

  if (answer1.classList.contains("show")) {
    plusIcon1.src = "assets/images/icon-minus.svg"
  } else {
    plusIcon1.src = "assets/images/icon-plus.svg";
  }
  
});

plusIcon2.addEventListener("click", () => {
  answer2.classList.toggle("show")

  if (answer2.classList.contains("show")) {
    plusIcon2.src = "assets/images/icon-minus.svg"
  } else {
    plusIcon2.src = "assets/images/icon-plus.svg";
  }
  
});

plusIcon3.addEventListener("click", () => {
  answer3.classList.toggle("show")

  if (answer3.classList.contains("show")) {
    plusIcon3.src = "assets/images/icon-minus.svg"
  } else {
    plusIcon3.src = "assets/images/icon-plus.svg";
  }
  
});

plusIcon4.addEventListener("click", () => {
  answer4.classList.toggle("show")

  if (answer4.classList.contains("show")) {
    plusIcon4.src = "assets/images/icon-minus.svg"
  } else {
    plusIcon4.src = "assets/images/icon-plus.svg";
  }
  
});

