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
const description = document.getElementById('Description');
const noDescription = document.getElementById('NoDescription');
const deleteLastAct = document.getElementById('deleteLastAct');
const addPortsElem = document.getElementsByClassName('addPortsElem');
const lastPort = document.getElementById('LastPort');
const nextPort = document.getElementById('NextPort');
const SendForm = document.getElementById('Send');
const plusPorts = document.getElementById('plusPorts');
const plusSky = document.getElementById('plusSky');
const plusWind = document.getElementById('plusWind');
const deleteLastwindAct = document.getElementById('deleteLastwindAct');
const addWindsElem = document.getElementsByClassName('addWindsElem');
const windDirection = document.getElementById('windDirection');
const SkyDescription = document.getElementById('SkyDescription');
const deleteLastSkyAct = document.getElementById('deleteLastSkyAct');
const addSkyDescriptionElem = document.getElementsByClassName('addSkyDescriptionElem');
const Vessel = document.getElementById('Vessel');
const IMO = document.getElementById('IMO');
const Captain = document.getElementById('Captain');
const VSAT = document.getElementById('VSAT');
const Telephone = document.getElementById('Telephone');
const VesselInp = document.getElementById('VesselInp');
const IMOInp = document.getElementById('IMOInp');
const CaptainInp = document.getElementById('CaptainInp');
const VSATInp = document.getElementById('VSATInp');
const PhoneInp = document.getElementById('PhoneInp');

let numbers1 = [];
let numbers2 = [];
let numbers3 = [];
let numbersAll = [];
let shipNumers1 = [];
let shipNumers2 = [];
let shipNumers3 = [];
let portListArr = [];
let windsListArr = [];
let skyListArr = [];

function Desc() {
    if (description.value === '') {
        noDescription.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="green"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>`
    } else {
        noDescription.innerHTML = '';
    }
}

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

document.addEventListener("DOMContentLoaded", hiddenCloseclick);
document.getElementById('Security').addEventListener("click", hiddenCloseclick);
function hiddenCloseclick() {
    const portsList = document.getElementById('portsList');
    if (portsList.style.display == "none") {
        var pass = prompt("Enter password");
        if (pass === '333') {
            portsList.style.display = "flex";
        } else {
            alert('Invalid password!');
            portsList.style.display = "none"
        }
    } else {
        portsList.style.display = "none"
    }
};

if (localStorage.getItem('portList') === null) {
    localStorage.setItem('portList', JSON.stringify(['']));
}
if (localStorage.getItem('windsList') === null) {
    localStorage.setItem('windsList', JSON.stringify(['']));
}
if (localStorage.getItem('skyList') === null) {
    localStorage.setItem('skyList', JSON.stringify(['']));
}
//LastPort / NextPort

function generateNextLastPorts() {
    let portArr = [];
    portArr = JSON.parse(localStorage.getItem('portList'));
    if (lastPort) {
        for (let i = 0; i < lastPort.length; i++) {
            console.log(lastPort[i])
            lastPort[i].remove()
        }
    }
    const sortArr = portArr.filter((el, id) => portArr.indexOf(el) === id);
    for (let endPorts of sortArr) {
        lastPort.innerHTML += `<option value="${endPorts}">${endPorts}</option>`;
        nextPort.innerHTML += `<option value="${endPorts}">${endPorts}</option>`;
    }
}
generateNextLastPorts();

deleteLastAct.addEventListener('click', function () {
    if (portListArr) {
        console.log(addPortsElem)
        addPortsElem[addPortsElem.length - 1].remove();
        if (localStorage.getItem('portList')) portListArr = JSON.parse(localStorage.getItem('portList'));
        portListArr.splice(portListArr.length - 1, 1);
        localStorage.setItem('portList', JSON.stringify(portListArr));
    }
})

function AddPorts() {
    const plusPorts = document.getElementById('plusPorts');
    const forPorts = document.getElementById('forPorts');
    if (forPorts.value !== '') {
        plusPorts.innerHTML += `<div class="addPortsElem">${forPorts.value}</div>`;
        if (localStorage.getItem('portList')) portListArr = JSON.parse(localStorage.getItem('portList'));
        portListArr.push(forPorts.value);
        localStorage.setItem('portList', JSON.stringify(portListArr));
    }
}

function drawStartArr() {
    if (localStorage.getItem('portList').length !== 0) {
        console.log('0')
        let portArr = [];
        if (portArr !== []) {
            portArr = JSON.parse(localStorage.getItem('portList'));
            for (let port of portArr) {
                plusPorts.innerHTML += `<div class="addPortsElem">${port}</div>`;
            }
        }
    } else {
        plusPorts.innerHTML = [];
    }
    if (localStorage.getItem('windsList').length !== 0) {
        let windsArr = [];
        if (windsArr !== []) {
            console.log(windsArr)
            windsArr = JSON.parse(localStorage.getItem('windsList'));
            for (let winds of windsArr) {
                plusWind.innerHTML += `<div class="addWindsElem">${winds}</div>`;
            }
        }
    } else {
        plusWind.innerHTML = [];
    }
    if (localStorage.getItem('skyList').length !== 0) {
        let skyArr = [];
        if (skyArr !== []) {
            console.log(skyArr)
            skyArr = JSON.parse(localStorage.getItem('skyList'));
            for (let sky of skyArr) {
                plusSky.innerHTML += `<div class="addSkyDescriptionElem">${sky}</div>`;
            }
        }
    } else {
        plusSky.innerHTML = [];
    }

    if (localStorage.getItem('Vessel') !== '') VesselInp.value = localStorage.getItem('Vessel')
    if (localStorage.getItem('IMO') !== '') IMOInp.value = localStorage.getItem('IMO')
    if (localStorage.getItem('Captain') !== '') CaptainInp.value = localStorage.getItem('Captain')
    if (localStorage.getItem('VSAT') !== '') VSATInp.value = localStorage.getItem('VSAT')
    if (localStorage.getItem('Phone') !== '') PhoneInp.value = localStorage.getItem('Phone')

}
drawStartArr()

//Wind Direction

function generateWindsDirection() {
    let windsArr = [];
    windsArr = JSON.parse(localStorage.getItem('windsList'));
    const sortArr = windsArr.filter((el, id) => windsArr.indexOf(el) === id);
    for (let winds of sortArr) {
        windDirection.innerHTML += `<option value="${winds}">${winds}</option>`;
    }
}
generateWindsDirection();

deleteLastwindAct.addEventListener('click', function () {
    if (windsListArr) {
        console.log(addWindsElem)
        addWindsElem[addWindsElem.length - 1].remove();
        if (localStorage.getItem('windsList')) windsListArr = JSON.parse(localStorage.getItem('windsList'));
        windsListArr.splice(windsListArr.length - 1, 1);
        localStorage.setItem('windsList', JSON.stringify(windsListArr));
    }
})

function AddWinds() {
    const plusWind = document.getElementById('plusWind');
    const forWind = document.getElementById('forWind');
    if (forWind.value !== '') {
        plusWind.innerHTML += `<div class="addWindsElem">${forWind.value}</div>`;
        if (localStorage.getItem('windsList')) windsListArr = JSON.parse(localStorage.getItem('windsList'));
        windsListArr.push(forWind.value);
        console.log(windsListArr)
        localStorage.setItem('windsList', JSON.stringify(windsListArr));
    }
}

//Sky Description

function generateSkyDescription() {
    let skyArr = [];
    skyArr = JSON.parse(localStorage.getItem('skyList'));
    const sortArr = skyArr.filter((el, id) => skyArr.indexOf(el) === id);
    for (let sky of sortArr) {
        SkyDescription.innerHTML += `<option value="${sky}">${sky}</option>`;
    }
}
generateSkyDescription();

deleteLastSkyAct.addEventListener('click', function () {
    if (skyListArr) {
        addSkyDescriptionElem[addSkyDescriptionElem.length - 1].remove();
        if (localStorage.getItem('skyList')) skyListArr = JSON.parse(localStorage.getItem('skyList'));
        skyListArr.splice(skyListArr.length - 1, 1);
        localStorage.setItem('skyList', JSON.stringify(skyListArr));
    }
})

function AddSky() {
    const plusSky = document.getElementById('plusSky');
    const forSky = document.getElementById('ForSky');
    if (forSky.value !== '') {
        plusSky.innerHTML += `<div class="addSkyDescriptionElem">${forSky.value}</div>`;
        if (localStorage.getItem('skyList')) skyListArr = JSON.parse(localStorage.getItem('skyList'));
        skyListArr.push(forSky.value);
        localStorage.setItem('skyList', JSON.stringify(skyListArr));
    }
}

VesselInp.addEventListener('change', function () {
    if (VesselInp.value !== '') localStorage.setItem('Vessel', VesselInp.value)
})
IMOInp.addEventListener('change', function () {
    if (IMOInp.value !== '') localStorage.setItem('IMO', IMOInp.value)
})
CaptainInp.addEventListener('change', function () {
    if (CaptainInp.value !== '') localStorage.setItem('Captain', CaptainInp.value)
})
VSATInp.addEventListener('change', function () {
    if (VSATInp.value !== '') localStorage.setItem('VSAT', VSATInp.value)
})
PhoneInp.addEventListener('change', function () {
    if (PhoneInp.value !== '') localStorage.setItem('Phone', PhoneInp.value)
})

function drawConst() {
    if (localStorage.getItem('Vessel') !== '') Vessel.value = localStorage.getItem('Vessel')
    if (localStorage.getItem('IMO') !== '') IMO.value = localStorage.getItem('IMO')
    if (localStorage.getItem('Captain') !== '') Captain.value = localStorage.getItem('Captain')
    if (localStorage.getItem('VSAT') !== '') VSAT.value = localStorage.getItem('VSAT')
    if (localStorage.getItem('Phone') !== '') Telephone.value = localStorage.getItem('Phone')
}
drawConst()

SendForm.addEventListener('click', function () {
    location.reload();
    return false;
})