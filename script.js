let gameBoard = document.querySelector('.game-board');
const titlesArray = ["Sports", "World", "Technology", "Media", "U.S. History"]
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


var question1 = [
    one = {
        prompt: "In baseball and softball what do the initials RBI stand for?\n(a) Home-Run\n\(b) Run Batted In\n(c) Free Throw",
        answer: "b",
        scorePoints: 100,
    },
    {
        prompt: "What is the tallest building in the world?\n(a) Your apartment complex\n\(b) the buju khalifa\n(c) World trade center",
        answer: "b",
        scorePoints: 200,
    },
    {
        prompt: "On the popular social website Reddit, what does AMA stand for?\n(a) Ask me Alot\n\(b) Ask Me Anything\n(c) American Music Awards",
        answer: "b",
        scorePoints: 300,
    },
    {
        prompt: "In which year were the Academy Awards, or Oscars, first presented?\n(a) 2019\n\
            (b) 1929\n(c) 1964",
        answer: "b",
        scorePoints: 400,
    },
    {
        prompt: "When was America discovered\n(a) 1500\n\
            (b) 1492\n(c) 1990",
        answer: "b",
        scorePoints: 500,
    }
]
var question2 = [
    two = {
        prompt: "In basketball,what is the term used when a player reaches double digits in three of five statististical categories?\n(a) Double Double\n\ (b) Triple Double\n(c) Triple Jump",
        answer: "b"
    },
    {
        prompt: "Which famous toy manufacturer is also the world’s largest tire manufacturer by units produced?\n(a) Lego\n\(b) Marvel\n(c) Haisbro",
        answer: "a"
    },
    {
        prompt: "When referring to cables used to transmit audio/video, what does HDMI stand for?\n(a) High-Definition Multimedia Interface\n\(b) High-Definition media Interface\n(c) High-Definition Multimedia Interface",
        answer: "a"
    },
    {
        prompt: "Every episode of Seinfeld contains an image or reference to what superhero?\n(a) Superman\n\(b) Batman\n(c) Spiderman",
        answer: "a"
    },
    {
        prompt: "What year was America recognized as a country?\n(a) 1850\n\ (b) 2013\n(c) 1777",
        answer: "c"
    },
]
var question3 = [
    three = {
        prompt: "Which water sport is the official state individual sport of Hawaii?\n(a) Surfing\n\(b) Diving\n(c) Boating",
        answer: "a"
    },
    {
        prompt: "The island of Saipan is a commonwealth of which country?\n(a) United States\n\(b) France\n(c) Great Britain",
        answer: "a"
    },
    {
        prompt: "What do the letters CPU stand for when referring to the “brains” of a computer?\n(a) central processing unit\n\(b) central protective unit\n(c) central preventative unit",
        answer: "a"
    },
    {
        prompt: "Spider-Man(2002) tells the story of Peter Parker, a reserved and somewhat awkward teenager who gets bitten by an unusual spider. The spider bite gives Peter an array of new talents, including perfect vision, enhanced strength and agility and the ability to cast webs from his wrists. Name the actor who portrays Peter Parker in this movie.\n(a) Lebron James\n\(b) Tobey Maguire\n(c) Lukas Hass",
        answer: "b"
    },
    {
        prompt: "Which country recognized America as a country?\n(a) morocco\n\(b) algeria\n(c) denmark",
        answer: "a"
    },
]
var question4 = [
    four = {
        prompt: "The NBA’s Memphis Grizzlies formerly played in what Canadian city?\n(a) Vancouver\n\(b) Atlanta\n(c) Montreal",
        answer: "a"
    },
    {
        prompt: "What is the official language of the Canadian province Quebec?\n(a) English\n\(b) French\n(c) Spanish",
        answer: "c"
    },
    {
        prompt: "What does the acronym USB stand for when referring to a computer port?\n(a) universal series battery\n\(b) universal series bus\n(c) universal serial bus",
        answer: "c"
    },
    {
        prompt: " In which 2000 action movie did Tom Cruise play Ethan Hunt?\n(a) Mission: Impossible\n\(b) The Dark Knight\n(c) The Matrix",
        answer: "a"
    },
    {
        prompt: "What year the U.S. Stock Market faced the Black Monday?\n(a) 1872\n\
        (b) 1987\n(c) 1920",
        answer: "b"
    },
]
var question5 = [
    five = {
        prompt: "What “King” of golf lent his name to a mixture of iced tea and lemonade?\n(a) Tiger Woods\n\(b) Micheal Jordan\n(c) Arnold Palmer",
        answer: "c"
    },
    {
        prompt: "What is the official language of the Canadian province Quebec?\n(a) English\n\(b) French\n(c) Spanish",
        answer: "c"
    },
    {
        prompt: "Regarding data storage, what does the acronym SSD stand for?\n(a) solid safe drive\n\(b) solid steak drive\n(c) solid state drive",
        answer: "c"
    },
    {
        prompt: "Who was the youngest person to host Saturday Night Live?\n(a) Miley Cyrus\n\
            (b) John Legend\n(c) Drew Barrymore",
        answer: "c"
    },
    {
        prompt: "In what year did English become the official language of America?\n(a) 1795\n\(b) 1801\n(c) 1605",
        answer: "a"
    },
]
// var question6 = [
//     six = {
//         prompt: "WHAT COMES ONCE IN A MINUTE AND TWICE IN A MOMENT, BUT NEVER IN A THOUSAND YEARS?\n(a) A light year\n\(b)A Leap Year\n\(c) The letter M",
//         answer: "c"
//     },
// ]



alert('Instructions:\nEnter the multiple-choice answer in lowercase form!');

let nameInfo = document.querySelector('#user-name')
let name = prompt("Enter Your Desired Name")
let playerName = "Player Name:";
if(name === "") {
    nameInfo.innerHTML = playerName + " " + "Secret Santa";
} else {
nameInfo.innerHTML = playerName + " " + name;
}

let score = 0
let scoreItem = document.querySelector('#score-board')

var row1 = $('.square');

row1.on('click', function (evt) {
    for (i = 0; i < row1.length; i++) {
        var tile = evt.target.id;
        console.log(evt.target)
        var prompt = question1[tile].prompt;
        alert(prompt);
        var response = window.prompt(question1[tile].prompt);
        if (response === question1[tile].answer) {
            alert('Correct,Good Job')
        } else {
            alert('Wrong!')
        } if (response === question1[tile].answer) {
            score += 100;
        } else {
            score -= 100;
        }
        let wordsVar = "Score:";
        scoreItem.innerHTML = wordsVar + score;
        console.log(score);
        return;
    }
})

var row2 = $('.square1');

row2.on('click', function (evt) {
    var tile = evt.target.id;
    console.log(evt.target)
    var prompt = question2[tile].prompt;
    alert(prompt);
    var response = window.prompt(question2[tile].prompt);
    if (response === question2[tile].answer) {
        alert('Correct, You are on a Roll')
    } else {
        alert('Wrong')
    } if (response === question2[tile].answer) {
        score += 200;
    } else {
        score -= 200;
    }
    let wordsVar = "Score:";
    scoreItem.innerHTML = wordsVar + score;
    console.log(score);
    return;
})


var row3 = $('.square2');

row3.on('click', function (evt) {
    var tile = evt.target.id;
    console.log(evt.target)
    var prompt = question3[tile].prompt;
    alert(prompt);
    var response = window.prompt(question3[tile].prompt);
    if (response === question3[tile].answer) {
        alert('Correct!')
    } else {
        alert('wrong')
    } if (response === question3[tile].answer) {
        score += 300;
    } else {
        score -= 300;
    }
    let wordsVar = "Score:";
    scoreItem.innerHTML = wordsVar + score;
    console.log(score);
    return;
})

var row4 = $('.square3');

row4.on('click', function (evt) {
    var tile = evt.target.id;
    console.log(evt.target)
    var prompt = question4[tile].prompt;
    alert(prompt);
    var response = window.prompt(question4[tile].prompt);
    if (response === question4[tile].answer) {
        alert('Correct!')
    } else {
        alert('Wrong!')
    } if (response === question4[tile].answer) {
        score += 400;
    } else {
        score -= 400;
    }
    let wordsVar = "Score:";
    scoreItem.innerHTML = wordsVar + score;
    console.log(score);
    return;
})


var row5 = $('.square4');

row5.on('click', function (evt) {
    var tile = evt.target.id;
    console.log(evt.target)
    var prompt = question5[tile].prompt;
    alert(prompt);
    var response = window.prompt(question5[tile].prompt);
    if (response === question5[tile].answer) {
        alert('Correct!')
    } else {
        alert('Wrong!')
    } if (response === question5[tile].answer) {
        score += 500;
        
    } else {
        score -= 500;
    }
    let wordsVar = "Score:";
    scoreItem.innerHTML = wordsVar + score;
    console.log(score);
    return;
})

// var row6 = $('#final');

// row6.on('click', function (evt) {
//     var tile = evt.target.id;
//     console.log(evt.target)
//     var prompt = question6.prompt;
//     alert(prompt);
//     var response = window.prompt(question6[tile].prompt);
//     if (response === question6[tile].answer) {
//         alert('Correct!')
//     } else {
//         alert('Wrong!')
//     } if (response === question6[tile].answer) {
//         score += 1000;
        
//     } else {
//         score -= 1000;
//     }
//     let wordsVar = "Score:";
//     scoreItem.innerHTML = wordsVar + score;
//     console.log(score);
//     return;
// })
// if(score === 7200 ) {
//     alert("you're an all time great!")
// } else if (score === 4000) {
//     alert("You win")
// } else if(score < 3999) {
//     alert("Game Over")
//     score = 0
//     function refresh () {
//     setTimeout(refresh, 5);
// } 
// }

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