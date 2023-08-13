let gridLength = 396
let mapTile = []

let unupdateable = ['none', 'tree', 'mineral', 'water']

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
    mapTile[i].activated = false
}

function playSetup (){

    for (let i = 0; i < 33 ; i++) {
        let randomID = Math.floor(Math.random() * 396)
        if(mapTile[randomID].race === 'none'){
            mapTile[randomID].style.background = '#68ed68'
            mapTile[randomID].race = 'tree'
            mapTile[randomID].innerHTML = '<i class="fa-solid fa-tree icon"></i>'
            mapTile[randomID].tileValue = 3
        } else{
            i--
            continue
        }
    }
    for (let i = 0; i < 33 ; i++) {
        let randomID = Math.floor(Math.random() * 396)
        if(mapTile[randomID].race === 'none'){
            mapTile[randomID].style.background = 'brown'
            mapTile[randomID].race = 'mineral'
            mapTile[randomID].innerHTML = '<i class="fa-solid fa-gem icon"></i>'
            mapTile[randomID].tileValue = 3
        } else{
            i--
            continue
        }
    }
    for (let i = 0; i < 33 ; i++) {
        let randomID = Math.floor(Math.random() * 396)
        if(mapTile[randomID].race === 'none'){
            mapTile[randomID].style.background = '#69c3e0'
            mapTile[randomID].race = 'water'
            mapTile[randomID].innerHTML = '<i class="fa-solid fa-water icon"></i>'
            mapTile[randomID].tileValue = 3
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
                    } else if(neighborIndex !== i && mapTile[neighborIndex].race === 'ent'){
                        mapTile[neighborIndex].style.background = '#396b39'
                    }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'hmn'){
                        mapTile[neighborIndex].style.background = '#c9c95f'
                    }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'dwv'){
                        mapTile[neighborIndex].style.background = '#6daba9'
                    }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'tree'){
                        mapTile[neighborIndex].style.background = '#88d188'
                    }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'mineral'){
                        mapTile[neighborIndex].style.background = '#704d2a'
                    }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'water'){
                        mapTile[neighborIndex].style.background = '#89b6c4'
                    }
                  }
                }
              }
            } 
        })
       
    mapTile[i].addEventListener('pointerleave', function  (e) {
        if(mapTile[i].activated){
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
                        if (mapTile[neighborIndex].race === 'none') {
                            mapTile[neighborIndex].style.background = 'white'
                        } else if(neighborIndex !== i && mapTile[neighborIndex].race === 'ent'){
                            mapTile[neighborIndex].style.background = 'green'
                        } else if(neighborIndex !== i && mapTile[neighborIndex].race === 'hmn'){
                            mapTile[neighborIndex].style.background = 'yellow'
                        } else if(neighborIndex !== i && mapTile[neighborIndex].race === 'dwv'){
                            mapTile[neighborIndex].style.background = 'mediumturquoise'
                        }   else if(neighborIndex !== i && mapTile[neighborIndex].race === 'tree'){
                            mapTile[neighborIndex].style.background = '#68ed68'
                        }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'mineral'){
                            mapTile[neighborIndex].style.background = 'brown'
                        }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'water'){
                            mapTile[neighborIndex].style.background = '#69c3e0'
                        }
                    }
                }
        }
    }
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
                        } else if(neighborIndex !== i && mapTile[neighborIndex].race === 'ent'){
                            mapTile[neighborIndex].style.background = 'green'
                        } else if(neighborIndex !== i && mapTile[neighborIndex].race === 'hmn'){
                            mapTile[neighborIndex].style.background = 'yellow'
                        } else if(neighborIndex !== i && mapTile[neighborIndex].race === 'dwv'){
                            mapTile[neighborIndex].style.background = 'mediumturquoise'
                        }   else if(neighborIndex !== i && mapTile[neighborIndex].race === 'tree'){
                            mapTile[neighborIndex].style.background = '#68ed68'
                        }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'mineral'){
                            mapTile[neighborIndex].style.background = 'brown'
                        }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'water'){
                            mapTile[neighborIndex].style.background = '#69c3e0'
                        }
                      }
                    }
                  }
            } else if(mapTile[i].tileValue === 2){
                mapTile[i].leftOnce = true
            }
        })
        mapTile[i].addEventListener('click', function (e) {
            if(mapTile[i].activated !== true){
                mapTile.forEach((tile) => {
                    tile.activated = false
                })
                mapTile[i].activated = true
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
                            } else if(neighborIndex !== i && mapTile[neighborIndex].race === 'ent'){
                                mapTile[neighborIndex].style.background = '#396b39'
                            }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'hmn'){
                                mapTile[neighborIndex].style.background = '#c9c95f'
                            }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'dwv'){
                                mapTile[neighborIndex].style.background = '#6daba9'
                            }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'tree'){
                                mapTile[neighborIndex].style.background = '#88d188'
                            }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'mineral'){
                                mapTile[neighborIndex].style.background = '#704d2a'
                            }  else if(neighborIndex !== i && mapTile[neighborIndex].race === 'water'){
                                mapTile[neighborIndex].style.background = '#89b6c4'
                            }
                        }
                    }
                }
                return
            } else {
                if(mapTile[i].race !== 'none') return
                let dropDownValue = document.getElementById('building-selector').value
               if (dropDownValue === 'ent') {
                 this.style.background = 'green'
                 this.race = 'ent'
                 
                 this.innerText = `Race:${this.race} \n IP:${this.ip}`
                 mapTile[i].tileValue = 2
                 let tileID = mapTile[i].id
                 ipCalc(tileID)
            } else if (dropDownValue === 'human') {
                this.style.background = 'yellow'
                this.race = 'hmn'
                
                this.innerText = `Race:${this.race} \n IP:${this.ip}`
                mapTile[i].tileValue = 2
                let tileID = mapTile[i].id
                ipCalc(tileID)
           }  else if (dropDownValue === 'dwarve') {
            this.style.background = 'mediumturquoise'
            this.race = 'dwv'
            
            this.innerText = `Race:${this.race} \n IP:${this.ip}`
            mapTile[i].tileValue = 2
            let tileID = mapTile[i].id
            ipCalc(tileID)
            }   
        }
    })
}    

    function ipCalc(tileID) {
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
        if(!unupdateable.includes(mapTile[i].race)){
            mapTile[i].innerText = `Race: ${mapTile[i].race}\nIP: ${mapTile[i].ip}`;
        }
    }
}


console.log(mapTile)