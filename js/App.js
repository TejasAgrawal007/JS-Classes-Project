console.log("Hello There i am a JS Project");


const blubSwitch = document.querySelector('.blubSwitch');
const bulb = document.querySelector('#bulb');


// blubSwitch.addEventListener('click', function(){
//     //console.log("I am Click");

//     console.log(bulb.src);

// });


// blubSwitch.addEventListener('click', function(){
//     // console.log(bulb.src);

//     if(bulb.src.match('off')){
//         bulb.src = "./img/bulbon.gif";
//     }
// });

blubSwitch.addEventListener('click', function () {
    // console.log(bulb.src);

    if (bulb.src.match('off')) {
        bulb.src = "./img/bulbon.gif";
        blubSwitch.innerHTML = "Turn off";
    }
    else {
        bulb.src = "./img/bulboff.gif";
        blubSwitch.innerHTML = "Turn On";
    }
});

