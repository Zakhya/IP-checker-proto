let gridLength = 396
let mapTile = []

for (let i = 0; i < gridLength ; i++) {
    mapTile[i] = document.createElement('span')
    mapTile[i].setAttribute('class', 'button number')
    index = i.toString()
    document.getElementById('buttons').appendChild(mapTile[i])
    mapTile[i].race = 'none'
    mapTile[i].id = i
    mapTile[i].rowNumber = Math.floor(i / 22) + 1
    mapTile[i].columnNumber = i % 22 + 1
    mapTile[i].ip = 0  
}

function playSetup (){

    for (let i = 0; i < 33 ; i++) {
        let randomID = Math.floor(Math.random() * 396)
        if(mapTile[randomID].race === 'none'){
            mapTile[randomID].style.background = 'lightGreen'
            mapTile[randomID].race = 'tree'
        } else{
            i--
            continue
        }
    }
    for (let i = 0; i < 33 ; i++) {
        let randomID = Math.floor(Math.random() * 396)
        if(mapTile[randomID].race === 'none'){
            mapTile[randomID].style.background = 'brown'
            mapTile[randomID].race = ' mineral'
        } else{
            i--
            continue
        }
    }
    for (let i = 0; i < 33 ; i++) {
        let randomID = Math.floor(Math.random() * 396)
        if(mapTile[randomID].race === 'none'){
            mapTile[randomID].style.background = 'lightBlue'
            mapTile[randomID].race = 'water'
        } else{
            i--
            continue
        }
    }

}

let flex1 = document.getElementById('flexbox-item1')
let flex2 = document.getElementById('flexbox-item2')
let flex3 = document.getElementById('flexbox-item3')
let flex4 = document.getElementById('flexbox-item4')

let playButton = document.getElementById('playButton')
let playing = false
playButton.addEventListener('click', function (e){
    if(!playing){
        playing = true
        playSetup()
    }
})

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
document.getElementById('flexbox-item3').addEventListener('pointerenter', function (e) {
flex3.style.background = '#3a3f0a'
})
document.getElementById('flexbox-item3').addEventListener('pointerleave', function (e) {
    flex3.style.background = '#006600';
    })
document.getElementById('flexbox-item4').addEventListener('pointerenter', function (e) {
flex4.style.background = '#3a3f0a'
})
document.getElementById('flexbox-item4').addEventListener('pointerleave', function (e) {
    flex4.style.background = '#014705';
    })

for (let i = 0; i < mapTile.length; i++) {
    mapTile[i].tileValue = 0
    mapTile[i].addEventListener('pointerenter', function  (e) {
        if (mapTile[i].tileValue === 0){
        this.style.background = 'grey'
        mapTile[i].tileValue = 1
        } else if (mapTile[i].tileValue ===  2){
            for (let rowOffset = -2; rowOffset <= 2; rowOffset++) {
                for (let colOffset = -2; colOffset <= 2; colOffset++) {
                    const neighborRow = mapTile[i].rowNumber + rowOffset;
                    const neighborCol = mapTile[i].columnNumber + colOffset;
                  // Check if the neighbor is within bounds
                  if (
                    neighborRow >= 1 &&
                    neighborRow <= Math.ceil(gridLength / 22) &&
                    neighborCol >= 1 &&
                    neighborCol <= 22
                  ) {
                    const neighborIndex = (neighborRow - 1) * 22 + neighborCol - 1;
                    if (neighborIndex !== i && mapTile[neighborIndex].race === 'none') {
                        mapTile[neighborIndex].style.background = 'grey'
                    }
                  }
                }
              }
            } 
        })
       
    mapTile[i].addEventListener('pointerleave', function  (e) {
        if (mapTile[i].tileValue === 1) {
        this.style.background = 'white';
        mapTile[i].tileValue = 0
        } else if(mapTile[i].tileValue === 2 && mapTile[i].leftOnce === true){
                for (let rowOffset = -2; rowOffset <= 2; rowOffset++) {
                    for (let colOffset = -2; colOffset <= 2; colOffset++) {
                      const neighborRow = mapTile[i].rowNumber + rowOffset;
                      const neighborCol = mapTile[i].columnNumber + colOffset;
                      // Check if the neighbor is within bounds
                      if (
                        neighborRow >= 1 &&
                        neighborRow <= Math.ceil(gridLength / 22) &&
                        neighborCol >= 1 &&
                        neighborCol <= 22 
                      ) {
                        const neighborIndex = (neighborRow - 1) * 22 + neighborCol - 1;
                        if (neighborIndex !== i && mapTile[neighborIndex].race === 'none') {
                            mapTile[neighborIndex].style.background = 'white'
                        }
                      }
                    }
                  }
            } else if(mapTile[i].tileValue === 2){
                mapTile[i].leftOnce = true
            }
        })
        mapTile[i].addEventListener('click', function (e) {
            //change color based on dropdown menu
            let dropDownValue = document.getElementById('building-selector').value
           if (dropDownValue === 'ent') {
             this.style.background = 'green'
             this.race = 'ent'
             
             this.innerText = `Race:${this.race} \n IP:${this.ip}`
             mapTile[i].tileValue = 2
             ipCalc()
        } else if (dropDownValue === 'human') {
            this.style.background = 'yellow'
            this.race = 'hmn'
            
            this.innerText = `Race:${this.race} \n IP:${this.ip}`
            mapTile[i].tileValue = 2
            ipCalc()
       }  else if (dropDownValue === 'dwarve') {
        this.style.background = 'mediumturquoise'
        this.race = 'dwv'
        
        this.innerText = `Race:${this.race} \n IP:${this.ip}`
        mapTile[i].tileValue = 2
        ipCalc()
   }
    })
}    

    function ipCalc() {
        for (let i = 0; i < mapTile.length; i++) {
          let ip = 0;
          let entsAround = 0
          let humansAround = 0
          let dwarvesAround = 0
            // Calculate the range of neighboring cells (3x3 grid)
            for (let rowOffset = -2; rowOffset <= 2; rowOffset++) {
              for (let colOffset = -2; colOffset <= 2; colOffset++) {
                const neighborRow = mapTile[i].rowNumber + rowOffset;
                const neighborCol = mapTile[i].columnNumber + colOffset;
                // Check if the neighbor is within bounds
                if (
                  neighborRow >= 1 &&
                  neighborRow <= Math.ceil(gridLength / 22) &&
                  neighborCol >= 1 &&
                  neighborCol <= 22
                ) {
                  const neighborIndex = (neighborRow - 1) * 22 + neighborCol - 1;
                  // Check if the neighbor is an 'ent'
                  if (mapTile[neighborIndex].race === 'ent') {
                    entsAround++;
                } else if(mapTile[neighborIndex].race === 'hmn'){
                      humansAround++;
                  } else if(mapTile[neighborIndex].race === 'dwv'){
                    dwarvesAround++;
                }
                }
              }
            }
            if(mapTile[i].race === 'ent'){
                ip += entsAround;
                ip -= humansAround
                ip -= dwarvesAround
                
            } else if (mapTile[i].race === 'hmn'){
                ip -= entsAround;
                ip += humansAround
                ip -= dwarvesAround
                
            } else if (mapTile[i].race === 'dwv'){
                ip -= entsAround;
                ip -= humansAround
                ip += dwarvesAround


            }
          

        mapTile[i].ip = ip;
        if(mapTile[i].race !== 'none'){
            mapTile[i].innerText = `Race: ${mapTile[i].race}\nIP: ${mapTile[i].ip}`;
        }
    }
}


console.log(mapTile)