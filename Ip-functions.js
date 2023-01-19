const wipeAround = function() {
    printAround = {
        humans: 0,
        ents: 0,
        reapers: 0,
        goblins: 0,
        dwarves: 0
    }}
const wipeInfluence = function() {
    printInfluence = {
        humans: 0,
        ents: 0,
        reapers: 0,
        goblins: 0,
        dwarves: 0
    }
}
calcGoblinIp = function () {
 for (let i=0; i < printAround.humans; i++) {
    if (i < 5) printInfluence.goblins += 25 
    if (i >= 5) printInfluence.goblins -= 25 
 } 
 for (let i=0; i < printAround.ents; i++) {
    if (i < 10) printInfluence.goblins += 25
 } 
 for (let i=0; i < printAround.reapers && i < 7; i++) {
    if (i < 7) printInfluence.goblins -= 25 
 } 
 for (let i=0; i < printAround.goblins && i < 8; i++) {
    if (i < 3) printInfluence.goblins += 25 
    if (i >= 3) printInfluence.goblins -= 25 
 } 
 for (let i=0; i < printAround.dwarves; i++) {
    if (i < 10) printInfluence.goblins += 25 
 } 
}
const calcEntIp = function () {
    for (let i=0; i < printAround.humans; i++) {
        if (i < 5) printInfluence.ents += 25 
        if (i >= 5) printInfluence.ents -= 25 
     } 
     for (let i=0; i < printAround.ents; i++) {
        if (i < 10) printInfluence.ents += 25 
     } 
     for (let i=0; i < printAround.reapers; i++) {
        if (i < 1) printInfluence.ents += 100 
        if (i >= 1) printInfluence.ents -= 25 
     } 
     for (let i=0; i < printAround.goblins && i < 5; i++) {
        if (i < 2) printInfluence.ents += 25 
        if (i >= 2) printInfluence.ents -= 25 
     } 
     for (let i=0; i < printAround.dwarves; i++) {
        if (i < 3) printInfluence.ents += 25 
        if (i >= 3) printInfluence.ents -= 25 
     }
}
const calcReaperIp = function () {
    for (let i=0; i < printAround.humans; i++) {
        if (i < 5) printInfluence.reapers += 25 
        if (i >= 5) printInfluence.reapers -= 25 
     } 
     for (let i=0; i < printAround.ents; i++) {
        if (i < 10) printInfluence.reapers += 25 
     } 
     for (let i=0; i < printAround.reapers; i++) {
        if (i < 10) printInfluence.reapers -= 75
     } 
     for (let i=0; i < printAround.goblins && i < 7; i++) {
        if (i < 7) printInfluence.reapers += 25 
     } 
     for (let i=0; i < printAround.dwarves; i++) { 
        if (i < 10) printInfluence.reapers -= 25 
     }
}
const calcHumanIp = function () {
    for (let i=0; i < printAround.humans; i++) {
        if (i < 8) printInfluence.humans += 25 
        if (i >= 8) printInfluence.humans -= 25 
     } 
     for (let i=0; i < printAround.ents; i++) {
        if (i < 10) printInfluence.humans += 25 
     } 
     for (let i=0; i < printAround.reapers; i++) {
        if (i < 10) printInfluence.humans -= 25 
     } 
     for (let i=0; i < printAround.goblins; i++) {
        if (i < 10) printInfluence.humans -= 25 
     } 
     for (let i=0; i < printAround.dwarves; i++) {
        if (i < 5) printInfluence.humans += 25 
        if (i >= 5) printInfluence.humans -= 25 
     } 
}
const calcDwarveIp = function () {
    for (let i=0; i < printAround.humans; i++) {
        if (i < 7) printInfluence.dwarves += 25 
        if (i >= 7) printInfluence.dwarves -= 25 
     } 
     for (let i=0; i < printAround.ents; i++) {
        if (i < 10) printInfluence.dwarves -= 25 
     } 
     for (let i=0; i < printAround.reapers; i++) {
        if (i < 10) printInfluence.dwarves += 25 
     } 
     for (let i=0; i < printAround.goblins; i++) {
        if (i < 8) printInfluence.dwarves += 25 
        if (i >= 8) printInfluence.dwarves -= 25 
     } 
     for (let i=0; i < printAround.dwarves; i++) {
        if (i < 5) printInfluence.dwarves += 25 
        if (i >= 5) printInfluence.dwarves -= 25 
     } 
}
wipeAround()
let dropDownValue = "human"
// Event listener for dropdown: wipes all values and console
document.getElementById("dropdown").addEventListener('change',  
(event) => {
    wipeAround()
    dropDownValue = event.target.value
    console.clear()
    console.log(dropDownValue)
    document.getElementById("Form").reset()
}
);

const ipPrinter = function () {
    const textDiv = document.getElementById("ipPrinter")
    textDiv.innerHTML = ''
    let textEl = document.createElement('h2')
    textDiv.appendChild(textEl)
    textDiv.setAttribute('class','your-ip-printed')
    if (textEl.textContent !== '') textEl.textContent = '' 
    if (dropDownValue === 'goblin') textEl.textContent = `${dropDownValue} influence is ${printInfluence.goblins} `
    if (dropDownValue === 'human') textEl.textContent = `${dropDownValue} influence is ${printInfluence.humans} `
    if (dropDownValue === 'ent') textEl.textContent = `${dropDownValue} influence is ${printInfluence.ents} `
    if (dropDownValue === 'reaper') textEl.textContent = `${dropDownValue} influence is ${printInfluence.reapers} `
    if (dropDownValue === 'dwarve') textEl.textContent = `${dropDownValue} influence is ${printInfluence.dwarves} `
       console.log(printAround)
}

document.getElementById('goblin').addEventListener('input', (event) => {
    wipeInfluence()
    console.clear()
    let goblinEventNumber = event.target.value
    if (goblinEventNumber <= 10 && goblinEventNumber >= 0) { 
        goblinEventNumber = event.target.value
    } else { 
        event.target.value = null
        console.clear()
        console.log('ERROR: No numbers over 10')
        printAround.goblins = 0
        return
    }
    printAround.goblins = goblinEventNumber
    calcDwarveIp()
    calcHumanIp()
    calcReaperIp()
    calcEntIp()
    calcGoblinIp()
    ipPrinter()
})
document.getElementById('ent').addEventListener('input', (event) => {
    wipeInfluence()
    console.clear()
    let entEventNumber = event.target.value
    if (entEventNumber <= 10 && entEventNumber >= 0) { 
        entEventNumber = event.target.value
    } else { 
        event.target.value = null
        console.clear()
        console.log('ERROR: No numbers over 10')
        printAround.ents = 0
        return
    }
    printAround.ents = entEventNumber
    calcDwarveIp()
    calcHumanIp()
    calcReaperIp()
    calcEntIp()
    calcGoblinIp()
    ipPrinter()
})
document.getElementById('reaper').addEventListener('input', (event) => {
    wipeInfluence()
    console.clear()
    let reaperEventNumber = event.target.value
    if (reaperEventNumber <= 10 && reaperEventNumber >= 0) { 
        reaperEventNumber = event.target.value
    } else { 
        event.target.value = null
        console.clear()
        console.log('ERROR: No numbers over 10')
        printAround.reapers = 0
        return
    }
    printAround.reapers = reaperEventNumber
    calcDwarveIp()
    calcHumanIp()
    calcReaperIp()
    calcEntIp()
    calcGoblinIp()
    ipPrinter()
})
document.getElementById('human').addEventListener('input', (event) => {
    wipeInfluence()
    console.clear()
    let humanEventNumber = event.target.value
    if (humanEventNumber <= 10 && humanEventNumber >= 0) { 
        humanEventNumber = event.target.value
    } else { 
        event.target.value = null
        console.clear()
        console.log('ERROR: No numbers over 10')
        printAround.humans = 0
        return
    }
    printAround.humans = humanEventNumber
    calcDwarveIp()
    calcHumanIp()
    calcReaperIp()
    calcEntIp()
    calcGoblinIp()
    ipPrinter()
})
document.getElementById('dwarve').addEventListener('input', (event) => {
    wipeInfluence()
    console.clear()
    let dwarveEventNumber = event.target.value
    if (dwarveEventNumber <= 10 && dwarveEventNumber >= 0) { 
        dwarveEventNumber = event.target.value
    } else { 
        event.target.value = null
        console.clear()
        console.log('ERROR: No numbers over 10')
        printAround.dwarves = 0
        return
    }
    printAround.dwarves = dwarveEventNumber
    calcDwarveIp()
    calcHumanIp()
    calcReaperIp()
    calcEntIp()
    calcGoblinIp()
    ipPrinter()
})


let flex1 = document.getElementById('flexbox-item1')
let flex2 = document.getElementById('flexbox-item2')

document.getElementById('flexbox-item1').addEventListener('pointerenter', function (e) {
flex1.style.background = '#3a3f0a';
})
document.getElementById('flexbox-item1').addEventListener('pointerleave', function (e) {
    flex1.style.background = '#6eb86e';

})

document.getElementById('flexbox-item2').addEventListener('pointerenter', function (e) {
flex2.style.background = '#3a3f0a';
})
document.getElementById('flexbox-item2').addEventListener('pointerleave', function (e) {
flex2.style.background = 'green';
})
