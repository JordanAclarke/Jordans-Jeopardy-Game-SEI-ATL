let gameBoard = document.querySelector('.game-board');
const titlesBox = ["Sports", "World", "Technology", "Media", "U.S. History"]
for (let i = 0; i < 5; i++) {
    let columns = document.createElement('h2');
    columns.classList.add('categories');
    columns.classList.add = i
    columns.setAttribute("id", i)
    gameBoard.appendChild(columns);
    columns.appendChild(document.createTextNode(titlesBox[i]));
}

for (let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('square');
    btn.dataset.column = i
    btn.dataset.row = "one"
    btn.classList.add = i;
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

//Questions for Jeopardy Game
var question1 = [
    one = {
        prompt: "In baseball and softball what do the initials RBI stand for?\n(a) Home-Run\n\(b) Run Batted In\n(c) Free Throw",
        answer: "b"
    },
    {
        prompt: "What is the tallest building in the world?\n(a) Your apartment complex\n\(b) the buju khalifa\n(c) World trade center",
        answer: "b"
    },
    {
        prompt: "On the popular social website Reddit, what does AMA stand for?\n(a) Ask me Alot\n\(b) Ask Me Anything\n(c) American Music Awards",
        answer: "b"
    },
    {
        prompt: "In which year were the Academy Awards, or Oscars, first presented?\n(a) 2019\n\(b) 1929\n(c) 1964",
        answer: "b"
    },
    {
        prompt: "When was America discovered\n(a) 1500\n\(b) 1492\n(c) 1990",
        answer: "b"
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
        answer: "b"
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
        prompt: "What year the U.S. Stock Market faced the Black Monday?\n(a) 1872\n\(b) 1987\n(c) 1920",
        answer: "b"
    },
]
var question5 = [
    five = {
        prompt: "What “King” of golf lent his name to a mixture of iced tea and lemonade?\n(a) Tiger Woods\n\(b) Micheal Jordan\n(c) Arnold Palmer",
        answer: "c"
    },
    {
        prompt: "What was the name of the passenger train service created in 1883 that connected Paris and Constantinople?\n(a) The Orient Express\n\(b) The Polar Express\n(c) The Santa Express",
        answer: "a"
    },
    {
        prompt: "Regarding data storage, what does the acronym SSD stand for?\n(a) solid safe drive\n\(b) solid steak drive\n(c) solid state drive",
        answer: "c"
    },
    {
        prompt: "Who was the youngest person to host Saturday Night Live?\n(a) Miley Cyrus\n\(b) John Legend\n(c) Drew Barrymore",
        answer: "c"
    },
    {
        prompt: "In what year did English become the official language of America?\n(a) 1795\n\(b) 1801\n(c) 1605",
        answer: "a"
    },
]

//Plays Jeopardy music if you double click on screen
$('html').on('dblclick', function () {
    let sound = document.getElementById("game");
    sound.play();
})
//Plays a warping sound if you click the instruction button
$('#instructions').on('click', function () {
    let sound = document.getElementById("instructions-button");
    sound.play();
})

//This code prompts the player to enter their name. If they don't
//It will auto fill a name for them.
//It will store the name as well

let nameInfo = document.querySelector('#user-name')
let name = prompt("Enter Your Desired Name")
let playerName = "Player Name:";
if (name === "") {
    nameInfo.innerHTML = playerName + " " + "Secret Santa " + "🎅";
} else if (name === null) {
    nameInfo.innerHTML = playerName + " " + "Secret Santa " + "🎅";
} else {
    nameInfo.innerHTML = playerName + " " + name + " " + "💰";
}

//This alerts the player on the game instructions!
alert('Instructions:\nPlease Enter the multiple-choice answer in the Box!\nTo Win, You Will Need Atleast $3500 Jeopardy Dollars, But If You Reach -$1000, You Will Lose The Game\n Good Luck!! 🍀');

$('#instructions').on('click', function () {
    alert("Instructions:\nPlease Enter the multiple-choice answer in the Box!\nTo Win, You Will Need Atleast $3500 Jeopardy Dollars To Win But If You Reach -$1000, You Will Lose The Game!\n Good Luck!! 🍀");
})
//This targets the $100 row and tracks each click
//Upon click, the user is alerted a question
let score = 0
let scoreItem = document.querySelector('#score-board')
//Row 1, Tile targets the button clicked on, A prompt appears based on the tile
var row1 = $('.square');

row1.on('click', function (evt) {

    for (i = 0; i < row1.length; i++) {
        var tile = evt.target.id;
        console.log(evt.target)
        var prompt = question1[tile].prompt;
        alert(prompt);
        var response = window.prompt(question1[tile].prompt);
        if (response.toLowerCase() === question1[tile].answer) {
            alert('Correct,Good Job')
            score += 100;
            let sound = document.getElementById("correct");
            sound.play();
        } else {
            alert('Wrong!')
            score -= 100;
            sound = document.getElementById("wrong");
            sound.play();
        }
        let wordsVar = "Score: $";
        scoreItem.innerHTML = wordsVar + score;
        console.log(score);
        //disable the button after clicked
        $(this).attr('disabled', 'disabled');
        return;
    }
})
//Row 2
var row2 = $('.square1');

row2.on('click', function (evt) {
    var tile = evt.target.id;
    console.log(evt.target)
    var prompt = question2[tile].prompt;
    alert(prompt);
    var response = window.prompt(question2[tile].prompt);
    if (response.toLowerCase() === question2[tile].answer) {
        alert('Correct!')
        score += 200;
        let sound = document.getElementById("clap");
        sound.play();
    } else {
        alert('Wrong!')
        score -= 200;
        sound = document.getElementById("wrong");
        sound.play();
    }
    let wordsVar = "Score: $";
    scoreItem.innerHTML = wordsVar + score;
    console.log(score);
    //disable the button after clicked
    $(this).attr('disabled', 'disabled');
    return;
})

//Row 3
var row3 = $('.square2');

row3.on('click', function (evt) {
    var tile = evt.target.id;
    console.log(evt.target)
    var prompt = question3[tile].prompt;
    alert(prompt);
    var response = window.prompt(question3[tile].prompt);
    if (response.toLowerCase() === question3[tile].answer) {
        alert('Correct!')
        score += 300;
        let sound = document.getElementById("correct");
        sound.play();
    } else {
        alert('wrong')
        score -= 300;
        sound = document.getElementById("wrong");
        sound.play();
    }
    let wordsVar = "Score: $";
    scoreItem.innerHTML = wordsVar + score;
    console.log(score);
    //disable the button after clicked
    $(this).attr('disabled', 'disabled');
    return;
})
//Row 4
var row4 = $('.square3');

row4.on('click', function (evt) {
    var tile = evt.target.id;
    console.log(evt.target)
    var prompt = question4[tile].prompt;
    alert(prompt);
    var response = window.prompt(question4[tile].prompt);
    if (response.toLowerCase() === question4[tile].answer) {
        alert('Correct!')
        score += 400;
        let sound = document.getElementById("correct");
        sound.play();
    } else {
        alert('Wrong!')
        score -= 400;
        sound = document.getElementById("wrong");
        sound.play();
    }
    let wordsVar = "Score: $";
    scoreItem.innerHTML = wordsVar + score;
    console.log(score);
    //disable the button after clicked
    $(this).attr('disabled', 'disabled');
    return;
})

//Row 5
var row5 = $('.square4');

row5.on('click', function (evt) {
    var tile = evt.target.id;
    console.log(evt.target)
    var prompt = question5[tile].prompt;
    alert(prompt);
    var response = window.prompt(question5[tile].prompt);
    if (response.toLowerCase() === question5[tile].answer) {
        alert('Correct!')
        score += 500;
        let sound = document.getElementById("clap");
        sound.play();
    } else {
        alert('Wrong!')
        score -= 500;
        sound = document.getElementById("wrong");
        sound.play();
    }
    let wordsVar = "Score: $";
    scoreItem.innerHTML = wordsVar + score;
    console.log(score);
    //disable the button after clicked
    $(this).attr('disabled', 'disabled');
    return;
})
//Winning and Losing Conditions
$('.square, .square1, .square2, .square3, .square4').on('click', function(){
    if(score > 3500) {
        alert('You Have Won The Game!')
        $('.square, .square1, .square2, .square3, .square4').attr('disabled', 'disabled');
    } else if (score === 3500) {
        alert('You Have Tied The Game')
    }
    else if (score <= -1000) {
        alert('You Have Lost The Game, Refresh To Try Again')
        $('.square, .square1, .square2, .square3, .square4').attr('disabled', 'disabled');
    }
})

