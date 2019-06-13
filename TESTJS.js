let gameBoard = document.querySelector('.game-board');

for(let i = 0; i < 5; i++) {
    let btn = document.createElement('button');
    btn.classList.add('square');
    gameBoard.appendChild(btn);
    btn.appendChild(document.createTextNode('$100'))
}
for(let i = 0; i < 5; i++) {
    let btn1 = document.createElement('button');
    btn1.classList.add('square');
    gameBoard.appendChild(btn1);
    btn1.appendChild(document.createTextNode('$200'))
}
for(let i = 0; i < 5; i++) {
    let btn2 = document.createElement('button');
    btn2.classList.add('square');
    gameBoard.appendChild(btn2);
    btn2.appendChild(document.createTextNode('$300'))
}
for(let i = 0; i < 5; i++) {
    let btn3 = document.createElement('button');
    btn3.classList.add('square');
    gameBoard.appendChild(btn3);
    btn3.appendChild(document.createTextNode('$400'))
}
for(let i = 0; i < 5; i++) {
    let btn4 = document.createElement('button');
    btn4.classList.add('square');
    gameBoard.appendChild(btn4);
    btn4.appendChild(document.createTextNode('$500'))
}

$( document ).ready(function () {
    








    // $('.square').on('click', function () {
    //     $(this).addClass('remove');
    //     $(this).remove();
    // });

    })



