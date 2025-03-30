const menu = document.getElementById("menu");

function toggleMenu() {
  menu.classList.toggle("active");
}

function displayAnswer(num) {
  const questionAnswer = document.getElementById(`answer${num}`);
  const verticalBar = document.getElementById(`bar${num}`);

  questionAnswer.classList.toggle("display");
  verticalBar.classList.toggle("display");
}
