let colors = ['red', 'blue', 'black', 'orange', 'purple', 'lightblue', 'lightgreen', 'yellow'];


let button = document.querySelector("#btn");

button.addEventListener('click', function () {
    // console.log("I am Click");

    var randomDomColor = colors[Math.floor(Math.random() * colors.length)]

    let container = document.querySelector('.container');

    container.style.backgroundColor = randomDomColor;
})


// 2.nd Func...


let button1 = document.querySelector("#btn1");

button1.addEventListener('mouseover', function () {
    // console.log("I am Click");
    location.reload();
})