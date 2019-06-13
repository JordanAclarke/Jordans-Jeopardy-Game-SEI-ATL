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
    btn.classList.add = i;
    btn.setAttribute("id", i)
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$100'))
}
for (let i = 0; i < 5; i++) {
    let btn1 = document.createElement('button');
    btn1.classList.add('square');
    btn1.dataset.column = i
    btn1.dataset.row = "two"
    gameBoard.appendChild(btn1);
    btn1.appendChild(document.createTextNode('$200'))
}
for (let i = 0; i < 5; i++) {
    let btn2 = document.createElement('button');
    btn2.classList.add('square');
    btn2.dataset.column = i
    btn2.dataset.row = "three"
    gameBoard.appendChild(btn2);
    btn2.appendChild(document.createTextNode('$300'))
}
for (let i = 0; i < 5; i++) {
    let btn3 = document.createElement('button');
    btn3.classList.add('square');
    btn3.dataset.column = i
    btn3.dataset.row = "four"
    gameBoard.appendChild(btn3);
    btn3.appendChild(document.createTextNode('$400'))
}
for (let i = 0; i < 5; i++) {
    let btn4 = document.createElement('button');
    btn4.classList.add('square');
    btn4.dataset.column = i
    btn4.dataset.row = "five"
    gameBoard.appendChild(btn4);
    btn4.appendChild(document.createTextNode('$500'))
}


const questions = {
    one: [
        {
            question: 'Question 1',
            options: [
                { text: 'Yes it does', isCorrectAnswer: true }
            ]
        },
        {
            question: 'Question2',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Question 4',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Question 5',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Question 6',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        }

    ],
two: [
    {
        question: 'Question 1',
        options: [
            { text: 'Yes it does', isCorrectAnswer: true }
        ]
    },
    {
        question: 'Question2',
        options: [
            { text: 'Hi', isCorrectAnswer: false }
        ]
    },
    {
        question: 'Hey there',
        options: [
            { text: 'Hi', isCorrectAnswer: false }
        ]
    },
    {
        question: 'Hey there',
        options: [
            { text: 'Hi', isCorrectAnswer: false }
        ]
    },
    {
        question: 'Hey there',
        options: [
            { text: 'Hi', isCorrectAnswer: false }
        ]
    }
    ],
    three: [
        {
            question: 'Question 1',
            options: [
                { text: 'Yes it does', isCorrectAnswer: true }
            ]
        },
        {
            question: 'Question2',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        }
    ],
    four: [
        {
            question: 'Question 1',
            options: [
                { text: 'Yes it does', isCorrectAnswer: true }
            ]
        },
        {
            question: 'Question2',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        }
    ],
    five: [
        {
            question: 'Question 1',
            options: [
                { text: 'Yes it does', isCorrectAnswer: true }
            ]
        },
        {
            question: 'Question2',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
        {
            question: 'Hey there',
            options: [
                { text: 'Hi', isCorrectAnswer: false }
            ]
        },
    ]
}


$(document).ready(function () {

    $('.square').on('click', function (evt) {
        console.log(questions[this.dataset.row][this.dataset.column])
        // console.log(document.getElementById('results').dataset)
        let questionTileInfo = evt.target.id;
        event.target.innerHtml = questions[questionTileInfo]

    });

  
       
    })
