function checkAnswer() {
  const submit = document.getElementById("submit-answer");
  const feedback = document.getElementById("feedback");
  submit.addEventListener("click", function () {
    const correctAnswer = "4";
    const checkboxes = document.querySelectorAll(
      'input[type="radio"][name="quiz"]'
    );
    const userAnswer = [];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        userAnswer.push(checkbox.value);
      }
    });
    if (userAnswer == correctAnswer) {
      feedback.innerText = "Correct! Well done.";
    } else {
      feedback.innerText = "That's incorrect. Try again!";
    }
  });
}

document.addEventListener("DOMContentLoaded", checkAnswer);
