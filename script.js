let score = 0;

let quizData = [
    {
        question: "1.What is full form of HTML?",
        a: "HYPER TEXT MARKUP LAMBDA",
        b: "HYPER TEXT MARKUP LANGUAGE",
        c: "HYPO MARKUP LANGUAGE",
        d: "NONE OF THESE",
        correct: "b"
    },
    {
        question: "2.What is full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Computer Style Sheets",
        c: "Cascading style Systems",
        d: "NONE OF THESE",
        correct: "a"
    },
    {
        question: "3.What is full form of MERN?",
        a: "Mongo Express React Node",
        b: "Computer Style Sheets",
        c: "Cascading style Systems",
        d: "NONE OF THESE",
        correct: "a"
    }
]

// document.getElementById("q1").addEventListener("click", function () {

//     let ans1;
//     if (document.getElementById("q1ans1").checked) {
//         ans1 = document.getElementById("q1ans1").value;
//         if (score > 0) {
//             score--;
//         }
//         else {
//             score = 0;
//         }
//     } else if (document.getElementById("q1ans2").checked) {
//         ans1 = document.getElementById("q1ans2").value;
//         score++;


//     } else if (document.getElementById("q1ans3").checked) {
//         ans1 = document.getElementById("q1ans3").value;
//         if (score > 0) {
//             score--;
//         }
//         else {
//             score = 0;
//         }
//     }
//     document.getElementById("sub1").addEventListener("click", () => {
//         const res = document.getElementById("result")
//         if (ans1 === "Hyper Text Markup Language") {
//             res.innerText = "Correct Answer";
//             res.style.color = "green"
//         } else {
//             res.innerText = "Wrong Answer";
//             res.style.color = "red"
//         }
//         document.getElementById("answer1").innerText = `Answer : Hyper Text Markup Language`;
//         document.getElementById("s1").innerText = `Score : ${score}`;
//     })

// })

let quizQuestion = document.getElementById("question");
let quizAnswerOption = document.querySelectorAll(".answer");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitButton = document.getElementById("sub1");
let quizResult = document.getElementById("result");
let displayAnswer = document.getElementById("answer1");
let totalscore = document.getElementById("s1");


let currentQuiz = 0;


function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    quizQuestion.innerText = currentQuizData.question;
    console.log(a_text)
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    quizResult.innerText = "";

}



//function to deselect the radio button
function deselectAnswer() {
    quizAnswerOption.forEach((el) => el.checked = false)
}

function selectedAnswer() {
    let answer;
    quizAnswerOption.forEach((ansel) => {
        if (ansel.checked) { answer = ansel.id }
    })

    return answer;
}



loadQuiz();

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const answerMarked = selectedAnswer();

    if (answerMarked) {
        const currentQuizData = quizData[currentQuiz];
        if (answerMarked == currentQuizData.correct) {
            score++;
            quizResult.innerText = "Answer is Correct";
            quizResult.style.color = "green";

        } else {
            quizResult.innerText = "Answer is Wrong";
            quizResult.style.color = "red";
        }

        currentQuiz++;

        setTimeout(() => {
            if (currentQuiz < quizData.length) {
                loadQuiz()
            } else {
                document.querySelector(".box").innerHTML = `
                <h2>You have answered ${score}/${quizData.length}</h2>
                <button onclick="location.reload()">Restart Quiz</button>`
            }
        }, 1000)

    }
})
