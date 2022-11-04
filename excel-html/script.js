const POByestaerday = document.getElementById('POByesterday');
const POBon = document.getElementById('POBon');
const POBoff = document.getElementById('POBoff');
const POBtoday = document.getElementById('POBtoday');
const pers1 = document.querySelectorAll('#pers1');
const pers2 = document.querySelectorAll('#pers2');
const pers3 = document.querySelectorAll('#pers3');
const pas = document.getElementById('pas');
const own = document.getElementById('own');
const techM = document.getElementById('techM');
const hotelM = document.getElementById('hotelM');
const med = document.getElementById('med');
const theatre = document.getElementById('theatre');
const otherS = document.getElementById('otherS');
const summ = document.querySelectorAll('.sum')
const HSFO = document.getElementById('HSFO');
const LSFO = document.getElementById('LSFO');
const MGO = document.getElementById('MGO');
const Lube = document.getElementById('Lube');
const Water = document.getElementById('Water');
const shipS1 = document.querySelectorAll('#shipS1');
const shipS2 = document.querySelectorAll('#shipS2');
const shipS3 = document.querySelectorAll('#shipS3');

let numbers1 = [];
let numbers2 = [];
let numbers3 = [];
let numbersAll = [];
let shipNumers1 = [];
let shipNumers2 = [];
let shipNumers3 = [];

for (let i = 0; i < pers1.length; i++) {
    numbers1.push(Number(pers1[i].value))
    pers1[i].addEventListener('input', function () {
        numbers1[i] = Number(this.value);
        updateResults();
    })
}

for (let i = 0; i < pers2.length; i++) {
    numbers2.push(Number(pers2[i].value))
    pers2[i].addEventListener('input', function () {
        numbers2[i] = Number(this.value);
        updateResults();
    })
}

for (let i = 0; i < pers3.length; i++) {
    numbers3.push(Number(pers3[i].value))
    pers3[i].addEventListener('input', function () {
        numbers3[i] = Number(this.value);
        updateResults();
    })
}

for (let i = 0; i < shipS1.length; i++) {
    shipNumers1.push(Number(shipS1[i].value))
    shipS1[i].addEventListener('input', function () {
        shipNumers1[i] = Number(this.value);
        updateResults();
    })
}

for (let i = 0; i < shipS2.length; i++) {
    shipNumers2.push(Number(shipS2[i].value))
    shipS2[i].addEventListener('input', function () {
        shipNumers2[i] = Number(this.value);
        updateResults();
    })
}

for (let i = 0; i < shipS3.length; i++) {
    shipNumers3.push(Number(shipS3[i].value))
    shipS3[i].addEventListener('input', function () {
        shipNumers3[i] = Number(this.value);
        updateResults();
    })
}

for (let i = 0; i < summ.length; i++) {
    numbersAll.push(Number(summ[i].innerHTML))
    summ[i].addEventListener('DOMSubtreeModified', function () {
        numbersAll[i] = Number(summ[i].innerHTML);
    })
}

updateResults();

function updateResults() {
    POByestaerday.innerHTML = numbers1.reduce((acc, number) => acc + number, 0);
    POBon.innerHTML = numbers2.reduce((acc, number) => acc + number, 0);
    POBoff.innerHTML = numbers3.reduce((acc, number) => acc + number, 0);
    pas.innerHTML = numbers1[0] + numbers2[0] - numbers3[0];
    own.innerHTML = numbers1[1] + numbers2[1] - numbers3[1];
    techM.innerHTML = numbers1[2] + numbers2[2] - numbers3[2];
    hotelM.innerHTML = numbers1[3] + numbers2[3] - numbers3[3];
    med.innerHTML = numbers1[4] + numbers2[4] - numbers3[4];
    theatre.innerHTML = numbers1[5] + numbers2[5] - numbers3[5];
    otherS.innerHTML = numbers1[6] + numbers2[6] - numbers3[6];
    POBtoday.innerHTML = numbersAll.reduce((acc, number) => acc + number, 0);
    HSFO.innerHTML = shipNumers1[0] + shipNumers3[0] - shipNumers2[0];
    LSFO.innerHTML = shipNumers1[1] + shipNumers3[1] - shipNumers2[1];
    MGO.innerHTML = shipNumers1[2] + shipNumers3[2] - shipNumers2[2];
    Lube.innerHTML = shipNumers1[3] + shipNumers3[3] - shipNumers2[3];
    Water.innerHTML = shipNumers1[4] + shipNumers3[4] - shipNumers2[4];
}