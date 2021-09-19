const btn = document.querySelector('.btn');
const output = document.querySelector('.output');

let quotes = [
    'Hello Yogi',
    'Hello Bhushan',
    'Hello Samyak',
    'Hello Ayushi',
    'Hello Arti',
    `Beeta sucesses ke picke mat bhaago Excellience ke picke bhaago
        sucesses zaak markar tumhare picke aayege
                                        -Baba Rancho`,
    'Hello Prateek',
]

btn.addEventListener('click', function () {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})