let gameBoard = document.querySelector('.game-board');

for (let i = 0; i < 5; i++) {
    let columns = document.createElement('h2');
    columns.classList.add('columns');
    gameBoard.appendChild(columns);
    columns.appendChild(document.createTextNode('Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'));
}
for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('square');
    btn.dataset.column = i
    btn.dataset.row = "one"
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$100'))
}
for (let i = 0; i < 5; i++) {
    let btn1 = document.createElement('button');
    btn1.classList.add('square');
    gameBoard.appendChild(btn1);
    btn1.appendChild(document.createTextNode('$200'))
}
for (let i = 0; i < 5; i++) {
    let btn2 = document.createElement('button');
    btn2.classList.add('square');
    gameBoard.appendChild(btn2);
    btn2.appendChild(document.createTextNode('$300'))
}
for (let i = 0; i < 5; i++) {
    let btn3 = document.createElement('button');
    btn3.classList.add('square');
    gameBoard.appendChild(btn3);
    btn3.appendChild(document.createTextNode('$400'))
}
for (let i = 0; i < 5; i++) {
    let btn4 = document.createElement('button');
    btn4.classList.add('square');
    gameBoard.appendChild(btn4);
    btn4.appendChild(document.createTextNode('$500'))
}

// const quizQuestions = document.querySelector('#quiz')
// const resultsQuestions = document.querySelector('results')
// const submitBtn = document.querySelector('submit')

// function createQuiz () {
//     const output = [];
//     firstColumnQuestions.forEach(
//      (currentQuestion, questionNumber)   
//     )
//     const answer =[];
// }
// function showResults() {

// }

const questions = {
    one: [
        {
            question: 'Does this work',
            options: [
                {text: 'Yes it does', isCorrectAnswer: true}
            ]
        },
        {
            question: 'Hey there',
            options: [
                {text: 'Hi', isCorrectAnswer: false}
            ]
        }
    ]
}

// const firstColumnQuestions = [
//     {
//     questions: "Does This Work",
//     answers: {
//         a: "Yes it does",
//         b: "No Sorry",
//         c: "Try ahain"
//     },
//     correctAnswer: "a"
// },
// {
//     questions: "Does This Work ",
//     answers: {
//         a: "Yes it does",
//         b: "No Sorry",
//         c: "Try ahain"
//     },
//     correctAnswer: "a"
// },
// {
//     questions: "Does This Work ",
//     answers: {
//         a: "Yes it does",
//         b: "No Sorry",
//         c: "Try ahain"
//     },
//     correctAnswer: "a"
// },
//     {

//         questions: "Does This Work ",
//         answers: {
//             a: "Yes it does",
//             b: "No Sorry",
//             c: "Try ahain"
//         },
//         correctAnswer: "a"
//     },
//     {
//         questions: "Does This Work ",
//         answers: {
//             a: "Yes it does",
//             b: "No Sorry",
//             c: "Try ahain"
//         },
//         correctAnswer: "a"
//     }
// ]


$(document).ready(function () {

    $('.square').on('click', function (evt) {
        console.log(questions[this.dataset.row][this.dataset.column])
        console.log(document.getElementById('results').dataset)

        // var questions = [
        //     /* Category 1 Questions */
        //     {
        //         prompt: 'Question 1?',
        //         options: ['A', 'B', 'C', 'D'],
        //         correctAnswer: 'A',
        //     }]



        // var question1 = $('.square').eq(0)

        // var user = prompt("question1", "a", "b","c");

        // if(user === "b") {
        //     alert("Sorry Wrong Answer")
        // } 
        // return true;




        // $(this).addClass('remove');
        // $(this).remove();
    });

})
