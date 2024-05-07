let q1Container = document.getElementById("Q1C");
let q2Container = document.getElementById("Q2C");
let q3Container = document.getElementById("Q3C");
let startB = document.getElementById('startB');
let declineB = document.getElementById('decline');
let SContainer = document.getElementById("start");
let playerName;
let Time = 0;
let LeaderboardParagraph = document.getElementById('Leaderboard');
let clock = document.getElementById('clock')
let timeString;
startB.addEventListener("click", function() {
  timeInterval = setInterval(TimeCount, 1000);
  q1Container.style.display = (q1Container.style.display == 'none') ? 'block' : 'none';
  SContainer.style.display = "none";
});
declineB.addEventListener("click", function() {
  alert('Schade! ist mir aber egal.');
});

// Game logic
let score = 0;
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', checkAnswers);

function checkAnswers() {
  const checkboxes = document.querySelectorAll('#Q1C input[type="checkbox"]');
  const correctAnswers = ['a2'];
  const selectedAnswers = [];

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAnswers.push(checkbox.id);
    }
  });

  checkboxes.forEach((checkbox) => {
    const parentElement = checkbox.parentNode;
    if (checkbox.checked) {
      if (correctAnswers.includes(checkbox.id)) {
        parentElement.style.backgroundColor = 'lightgreen';
      } else {
        parentElement.style.backgroundColor = 'red';
      }
    } else {
      parentElement.style.backgroundColor = '';
    }
  });

  setTimeout(() => {
    if (selectedAnswers.length === 1 && correctAnswers.includes(selectedAnswers[0])) {
      alert('Congratulations! Your answer is correct.');
      score++;
    } else {
      alert('Sorry, your answer is incorrect.');
    }
    questionCount++;
    updateProgressBar();
    setTimeout(() => {
      const currentQuestion = document.getElementById('Q1C');
      currentQuestion.style.display = 'none';
      const nextQuestion = document.getElementById('Q2C');
      nextQuestion.style.display = 'block';
    }, 2000);
  }, 0);
}

// Question 2
const submitButton2 = document.querySelector('#submit2');
submitButton2.addEventListener('click', checkAnswers2);

function checkAnswers2() {
  const checkboxes2 = document.querySelectorAll('#Q2C input[type="checkbox"]');
  const correctAnswers2 = ['Q2a1'];
  const selectedAnswers2 = [];

  checkboxes2.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAnswers2.push(checkbox.id);
    }
  });

  checkboxes2.forEach((checkbox) => {
    const parentElement = checkbox.parentNode;
    if (checkbox.checked) {
      if (correctAnswers2.includes(checkbox.id)) {
        parentElement.style.backgroundColor = 'lightgreen';
      } else {
        parentElement.style.backgroundColor = 'red';
      }
    } else {
      parentElement.style.backgroundColor = '';
    }
  });

  setTimeout(() => {
    if (selectedAnswers2.length === 1 && correctAnswers2.includes(selectedAnswers2[0])) {
      alert('Congratulations! Your answer is correct.');
      score++;
    } else {
      alert('Sorry, your answer is incorrect.');
    }
    questionCount++;
    updateProgressBar();
    setTimeout(() => {
      const currentQuestion = document.getElementById('Q2C');
      currentQuestion.style.display = 'none';
      const nextQuestion = document.getElementById('Q3C');
      nextQuestion.style.display = 'block';
    }, 2000);
  }, 0);
}

// Question 3
const submitButton3 = document.querySelector('#submit3');
submitButton3.addEventListener('click', checkAnswers3);

function checkAnswers3() {
  const checkboxes3 = document.querySelectorAll('#Q3C input[type="checkbox"]');
  const correctAnswers3 = ['Q3a3'];
  const selectedAnswers3 = [];

  checkboxes3.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAnswers3.push(checkbox.id);
    }
  });

  checkboxes3.forEach((checkbox) => {
    const parentElement = checkbox.parentNode;
    if (checkbox.checked) {
      if (correctAnswers3.includes(checkbox.id)) {
        parentElement.style.backgroundColor = 'lightgreen';
      } else {
        parentElement.style.backgroundColor = 'red';
      }
    } else {
      parentElement.style.backgroundColor = '';
    }
  });

  setTimeout(() => {
    if (selectedAnswers3.length === 1 && correctAnswers3.includes(selectedAnswers3[0])) {
      alert('Congratulations! Your answer is correct.');
      score++;
    } else {
      alert('Sorry, your answer is incorrect.');
    }
    questionCount++;
    updateProgressBar();
    setTimeout(() => {
      const currentQuestion = document.getElementById('Q3C');
      currentQuestion.style.display = 'none';
      const nextQuestion = document.getElementById('Q4C');
      nextQuestion.style.display = 'block';
    }, 2000);
  }, 0);
}
// Question 4
const submitButton4 = document.querySelector('#submit4');
submitButton4.addEventListener('click', checkAnswers4);
function checkAnswers4() {
  const checkboxes4 = document.querySelectorAll('#Q4C input[type="checkbox"]');
  const correctAnswers4 = ['Q4a4'];
  const selectedAnswers4 = [];

  checkboxes4.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAnswers4.push(checkbox.id);
    }
  });

  checkboxes4.forEach((checkbox) => {
    const parentElement = checkbox.parentNode;
    if (checkbox.checked) {
      if (correctAnswers4.includes(checkbox.id)) {
        parentElement.style.backgroundColor = 'lightgreen';
      } else {
        parentElement.style.backgroundColor = 'red';
      }
    } else {
      parentElement.style.backgroundColor = '';
    }
  });

  setTimeout(() => {
    if (selectedAnswers4.length === 1 && correctAnswers4.includes(selectedAnswers4[0])) {
      alert('Congratulations! Your answer is correct.');
      score++;
    } else {
      alert('Sorry, your answer is incorrect.');
    }
    questionCount++;
    updateProgressBar();
    setTimeout(() => {
      const currentQuestion = document.getElementById('Q4C');
      currentQuestion.style.display = 'none';
      const nextQuestion = document.getElementById('Q5C');
      nextQuestion.style.display = "block";
    }, 2000);
  }, 0);
}
// Question 5
const submitButton5 = document.querySelector('#submit5');
submitButton5.addEventListener('click', checkAnswers5);
function checkAnswers5() {
  const checkboxes5 = document.querySelectorAll('#Q5C input[type="checkbox"]');
  const correctAnswers5 = ['Q5a2'];
  const selectedAnswers5 = [];

  checkboxes5.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAnswers5.push(checkbox.id);
    }
  });

  checkboxes5.forEach((checkbox) => {
    const parentElement = checkbox.parentNode;
    if (checkbox.checked) {
      if (correctAnswers5.includes(checkbox.id)) {
        parentElement.style.backgroundColor = 'lightgreen';
      } else {
        parentElement.style.backgroundColor = 'red';
      }
    } else {
      parentElement.style.backgroundColor = '';
    }
  });

  setTimeout(() => {
    if (selectedAnswers5.length === 1 && correctAnswers5.includes(selectedAnswers5[0])) {
      alert('Congratulations! Your answer is correct.');
      score++;
    } else {
      alert('Sorry, your answer is incorrect.');
    }
    questionCount++;
    updateProgressBar();
    setTimeout(() => {
      const currentQuestion = document.getElementById('Q5C');
      currentQuestion.style.display = 'none';
      const nextQuestion = document.getElementById('Q6C');
      nextQuestion.style.display = "block";
    }, 2000);
  }, 0);
}
// Question 6
const submitButton6 = document.querySelector('#submit6');
submitButton6.addEventListener('click', checkAnswers6);
function checkAnswers6() {
  const checkboxes6 = document.querySelectorAll('#Q6C input[type="checkbox"]');
  const correctAnswers6 = ['Q6a2', 'Q6a4'];
  const selectedAnswers6 = [];

  checkboxes6.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAnswers6.push(checkbox.id);
    }
  });
  checkboxes6.forEach((checkbox) => {
    const parentElement = checkbox.parentNode;
    if (checkbox.checked) {
      if (correctAnswers6.includes(checkbox.id)) {
        parentElement.style.backgroundColor = 'lightgreen';
      } else {
        parentElement.style.backgroundColor = 'red';
      }
    } else {
      parentElement.style.backgroundColor = '';
    }
  });
  setTimeout(() => {
    if (selectedAnswers6.length === 2 && correctAnswers6.includes(selectedAnswers6[0]) && correctAnswers6.includes(selectedAnswers6[1])) {
      alert('Congratulations! Your answer is correct.');
      score++;
    } else {
      alert('Sorry, your answer is incorrect.');
    }
    questionCount++;
    updateProgressBar();
    setTimeout(() => {
      const currentQuestion = document.getElementById('Q6C');
      currentQuestion.style.display = 'none';
      const nextQuestion = document.getElementById('Q7C');
      nextQuestion.style.display = "block";
    }, 2000);
  }, 0);
}
// Question 7
const submitButton7 = document.querySelector('#submit7');
submitButton7.addEventListener('click', checkAnswers7);
function checkAnswers7() {
  const checkboxes7 = document.querySelectorAll('#Q7C input[type="checkbox"]');
  const correctAnswers7 = ['Q7a3'];
  const selectedAnswers7 = [];

  checkboxes7.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAnswers7.push(checkbox.id);
    }
  });
  checkboxes7.forEach((checkbox) => {
    const parentElement = checkbox.parentNode;
    if (checkbox.checked) {
      if (correctAnswers7.includes(checkbox.id)) {
        parentElement.style.backgroundColor = 'lightgreen';
      } else {
        parentElement.style.backgroundColor = 'red';
      }
    } else {
      parentElement.style.backgroundColor = '';
    }
  });
  setTimeout(() => {
    if (selectedAnswers7.length === 1 && correctAnswers7.includes(selectedAnswers7[0])) {
      alert('Congratulations! Your answer is correct.');
      score++;
    } else {
      alert('Sorry, your answer is incorrect.');
    }
    questionCount++;
    updateProgressBar();
    setTimeout(() => {
      const currentQuestion = document.getElementById('Q7C');
      currentQuestion.style.display = 'none';
      const nextQuestion = document.getElementById('Q8C')
      nextQuestion.style.display = "block";
    }, 2000);
  }, 0);
}

//Question 8
const submitButton8 = document.querySelector('#submit8');
submitButton8.addEventListener('click', checkAnswers8);
function checkAnswers8() {
  const checkboxes8 = document.querySelectorAll('#Q8C input[type="checkbox"]');
  const correctAnswers8 = ['Q8a3'];
  const selectedAnswers8 = [];

  checkboxes8.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAnswers8.push(checkbox.id);
    }
  });
  checkboxes8.forEach((checkbox) => {
    const parentElement = checkbox.parentNode;
    if (checkbox.checked) {
      if (correctAnswers8.includes(checkbox.id)) {
        parentElement.style.backgroundColor = 'lightgreen';
      } else {
        parentElement.style.backgroundColor = 'red';
      }
    } else {
      parentElement.style.backgroundColor = '';
    }
  });
  setTimeout(() => {
    if (selectedAnswers8.length === 1 && correctAnswers8.includes(selectedAnswers8[0])) {
      alert('Congratulations! Your answer is correct.');
      score++;
    } else {
      alert('Sorry, your answer is incorrect.');
    }
    questionCount++;
    updateProgressBar();
    setTimeout(() => {
      const currentQuestion = document.getElementById('Q8C');
      currentQuestion.style.display = 'none';
      const nextQuestion = document.getElementById('Q9C')
      nextQuestion.style.display = "block";
    }, 2000);
  }, 0);
}

//Question 9
const submitButton9 = document.querySelector('#submit9');
submitButton9.addEventListener('click', checkAnswers9);
function checkAnswers9() {
  const checkboxes9 = document.querySelectorAll('#Q9C input[type="checkbox"]');
  const correctAnswers9 = ['Q9a2'];
  const selectedAnswers9 = [];

  checkboxes9.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAnswers9.push(checkbox.id);
    }
  });
  checkboxes9.forEach((checkbox) => {
    const parentElement = checkbox.parentNode;
    if (checkbox.checked) {
      if (correctAnswers9.includes(checkbox.id)) {
        parentElement.style.backgroundColor = 'lightgreen';
      } else {
        parentElement.style.backgroundColor = 'red';
      }
    } else {
      parentElement.style.backgroundColor = '';
    }
  });
  setTimeout(() => {
    if (selectedAnswers9.length === 1 && correctAnswers9.includes(selectedAnswers9[0])) {
      alert('Congratulations! Your answer is correct.');
      score++;
    } else {
      alert('Sorry, your answer is incorrect.');
    }
    questionCount++;
    updateProgressBar();
    setTimeout(() => {
      const currentQuestion = document.getElementById('Q9C');
      currentQuestion.style.display = 'none';
      const nextQuestion = document.getElementById('Q10C');
      nextQuestion.style.display = "block"
    }, 2000);
  }, 0);
}
// Question 10 --> last question
const submitButton10 = document.querySelector('#submit10');
submitButton10.addEventListener('click', checkAnswers10);
function checkAnswers10() {
  const checkboxes10 = document.querySelectorAll('#Q10C input[type="checkbox"]');
  const correctAnswers10 = ['Q10a4'];
  const selectedAnswers10 = [];

  checkboxes10.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAnswers10.push(checkbox.id);
    }
  });
  checkboxes10.forEach((checkbox) => {
    const parentElement = checkbox.parentNode;
    if (checkbox.checked) {
      if (correctAnswers10.includes(checkbox.id)) {
        parentElement.style.backgroundColor = 'lightgreen';
      } else {
        parentElement.style.backgroundColor = 'red';
      }
    } else {
      parentElement.style.backgroundColor = '';
    }
  });
  setTimeout(() => {
    if (selectedAnswers10.length === 1 && correctAnswers10.includes(selectedAnswers10[0])) {
      alert('Congratulations! Your answer is correct.');
      score++;
    } else {
      alert('Sorry, your answer is incorrect.');
    }
    questionCount++;
    updateProgressBar();
    setTimeout(() => {
      const currentQuestion = document.getElementById('Q10C');
      currentQuestion.style.display = 'none';
      clearInterval(timeInterval);
      alert(`Herzlichen Glückwunsch du hast eine Punktzahl von ${score} erreicht!`)
    }, 2000);
  }, 0);
}
//player handling
let timeInterval;

function showFinalScore() {
  alert(`Congratulations! Your final score is: ${score}`);
}

let questionCount = 0;
const progressBar = document.querySelector('.progress');
function updateProgressBar() {
  const progressPercentage = (questionCount / 10) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}
function TimeCount() {
  Time++;
  let minutes = Math.floor(Time / 60).toString().padStart(2, '0');
  let seconds = (Time % 60).toString().padStart(2, '0');
  timeString = minutes + ':' + seconds;
  clock.innerHTML = "Zeit: " + timeString;
}
