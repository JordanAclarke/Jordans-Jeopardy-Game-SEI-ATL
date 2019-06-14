let gameBoard = document.querySelector('.game-board');
const titlesArray = ["Sports", "World", "Computers", "Movies", "U.S. History"]
for (let i = 0; i < 5; i++) {
    let columns = document.createElement('h2');
    columns.classList.add('categories');
    columns.classList.add = i
    columns.setAttribute("id", i)
    gameBoard.appendChild(columns);
    columns.appendChild(document.createTextNode(titlesArray[i]));
}

for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('square');
    // btn.dataset.column = i
    // btn.dataset.row = "one"
    // btn.classList.add = i;
    btn.setAttribute("id", i)
    btn.appendChild(document.createTextNode('$100'))
    gameBoard.appendChild(btn);
    
}
for (let i = 0; i < 5; i++) {
    let btn1 = document.createElement('button');
    btn1.classList.add('square1');
    btn1.dataset.column = i
    btn1.setAttribute("id", i)
    btn1.dataset.row = "two"
    gameBoard.appendChild(btn1);
    btn1.appendChild(document.createTextNode('$200'))
}
for (let i = 0; i < 5; i++) {
    let btn2 = document.createElement('button');
    btn2.classList.add('square2');
    btn2.dataset.column = i
    btn2.setAttribute("id", i)
    btn2.dataset.row = "three"
    gameBoard.appendChild(btn2);
    btn2.appendChild(document.createTextNode('$300'))
}
for (let i = 0; i < 5; i++) {
    let btn3 = document.createElement('button');
    btn3.classList.add('square3');
    btn3.dataset.column = i
    btn3.setAttribute("id", i)
    btn3.dataset.row = "four"
    gameBoard.appendChild(btn3);
    btn3.appendChild(document.createTextNode('$400'))
}
for (let i = 0; i < 5; i++) {
    let btn4 = document.createElement('button');
    btn4.classList.add('square4');
    btn4.dataset.column = i
    btn4.setAttribute("id", i)
    btn4.dataset.row = "five"
    gameBoard.appendChild(btn4);
    btn4.appendChild(document.createTextNode('$500'))
}

var question = [
    one = {
            prompt: "In baseball and softball what do the initials RBI stand for?\n(a) Home-Run\n\
            (b) Run Batted In\n(c) Free Throw",
            answer: "b"
        },
        {
            prompt: "Question2\n(a) AnswerB\n\
            (b) purple\n(c) orange",
            answer: "b"
        },
        {
            prompt: "Question3\n(a) AnswerC\n\
            (b) purple\n(c) orange",
            answer: "c"
        },
        {
            prompt: "Question3\n(a) AnswerD\n\
            (b) purple\n(c) orange",
            answer: "a"
        },
        {
            prompt: "Question3\n(a) AnswerE\n\
            (b) purple\n(c) orange",
            answer: "B"
        }
    ]
    var question1 = [
    two = {
        prompt: "In basketball,what is the term used when a player reaches double digits in three of five statististical categories?\n(a) Double Double\n\
        (b) Triple Double\n(c) Triple Jump",
        answer: "b"
    },
    {
        prompt: "Question2\n(a) AnswerA\n\
        (b) purple\n(c) orange",
        answer: "b"
    },
    {
        prompt: "Question3\n(a) AnswerA\n\
        (b) purple\n(c) orange",
        answer: "c"
    },
    {
        prompt: "Question3\n(a) AnswerD\n\
        (b) purple\n(c) orange",
        answer: "a"
    },
    {
        prompt: "Question3\n(a) AnswerE\n\
        (b) purple\n(c) orange",
        answer: "B"
    },
]
var question3 = [
    three = {
        prompt: "Question1\n(a) AnswerA\n\
        (b) yellow\n(c) orange",
        answer: "a"
    },
    {
        prompt: "Question2\n(a) AnswerA\n\
        (b) purple\n(c) orange",
        answer: "b"
    },
    {
        prompt: "Question3\n(a) AnswerA\n\
        (b) purple\n(c) orange",
        answer: "c"
    },
    {
        prompt: "Question3\n(a) AnswerD\n\
        (b) purple\n(c) orange",
        answer: "a"
    },
    {
        prompt: "Question3\n(a) AnswerE\n\
        (b) purple\n(c) orange",
        answer: "B"
    },
]
var question4 = [
    four = {
        prompt: "Question1\n(a) AnswerA\n\
        (b) orange\n(c) orange",
        answer: "a"
    },
    {
        prompt: "Question2\n(a) AnswerA\n\
        (b) purple\n(c) orange",
        answer: "b"
    },
    {
        prompt: "Question3\n(a) AnswerA\n\
        (b) purple\n(c) orange",
        answer: "c"
    },
    {
        prompt: "Question3\n(a) AnswerD\n\
        (b) purple\n(c) orange",
        answer: "a"
    },
    {
        prompt: "Question3\n(a) AnswerE\n\
        (b) purple\n(c) orange",
        answer: "B"
    },
]

var row1 = $('.square');

row1.on('click', function (evt) {
    var tile = evt.target.id;
  console.log(evt.target)
  var prompt = question[tile].prompt;
  alert(prompt);
  var response = window.prompt(question[tile].prompt);
  if (response === question[tile].answer) {
    alert('correct')
  } else {
      alert('wrong')
  } return;
})

var row2 = $('.square1');

row2.on('click', function (evt) {
    var tile = evt.target.id;
  console.log(evt.target)
  var prompt = question1[tile].prompt;
  alert(prompt);
  var response = window.prompt(question1[tile].prompt);
  if (response === question1[tile].answer) {
    alert('correct')
  } else {
      alert('wrong')
  } return;
})


var row3 = $('.square2');

row3.on('click', function (evt) {
    var tile = evt.target.id;
  console.log(evt.target)
  var prompt = question3[tile].prompt;
  alert(prompt);
  var response = window.prompt(question3[tile].prompt);
  if (response === question3[tile].answer) {
    alert('correct')
  } else {
      alert('wrong')
  } return;
})

var row4 = $('.square3');

row4.on('click', function (evt) {
    var tile = evt.target.id;
  console.log(evt.target)
  var prompt = question3[tile].prompt;
  alert(prompt);
  var response = window.prompt(question3[tile].prompt);
  if (response === question3[tile].answer) {
    alert('correct')
  } else {
      alert('wrong')
  } return;
})


var row5 = $('.square4');

row5.on('click', function (evt) {
    var tile = evt.target.id;
  console.log(evt.target)
  var prompt = question4[tile].prompt;
  alert(prompt);
  var response = window.prompt(question4[tile].prompt);
  if (response === question4[tile].answer) {
    alert('correct')
  } else {
      alert('wrong')
  } return;
})
// })
    
    
    //     var score = 0;
    //     for(var i = 0; i < question.length; i++) {
    //         var response = window.prompt(question[i].prompt);
    //         if(response === question[i].answer) {
    //             score++;
    //             prompt("Correct");
    //         } else {
    //             prompt("Wrong!");
    //             score--
    //         } return;
    //     } 
    // })


    



// $(document).ready(function () {

//     $('.square').on('click', function (evt) {
//         prompt(questions[this.dataset.row][this.dataset.column])
       
        
        // console.log(document.getElementById('results').dataset)
        
        // let questionTileInfo = evt.target.id;
        // event.target.innerHtml = questions[questionTileInfo]

    // });

  
       
    // })