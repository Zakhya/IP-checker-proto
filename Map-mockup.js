let gridLength = 396
let mapTile = []

let unupdateable = ['none', 'tree', 'mineral', 'water']

pointerFadeSetupForHeader()

//initial grid setup
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
    mapTile[i].canceled = false
    mapTile[i].built = false
}


let playButton = document.getElementById('playButton')
let playing = false
playButton.addEventListener('click', function (e){
    if(!playing){
        playing = true
        playSetup()
    }
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
        if(mapTile[i].activated === true){
            if(mapTile[i].race === 'none') mapTile[i].innerHTML = ''
            
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
    } else {
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
    mapTile[i].activated = false
})

mapTile[i].addEventListener('click', function (e) {
    if(mapTile[i].canceled === true) {
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
                if (neighborIndex === i) {
                    mapTile[i].style.background = 'white'
                    mapTile[i].innerHTML = ''
                    mapTile[i].canceled = false

                }
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
            return
    } else {
    if(mapTile[i].activated !== true){
        mapTile.forEach((tile) => {
            tile.activated = false
        })
        if(mapTile[i].race !== 'water' && mapTile[i].race !== 'tree' && mapTile[i].race !== 'mineral'){
            mapTile[i].activated = true
        }
        if(!mapTile[i].built){


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
                    if(neighborIndex === i && mapTile[i].activated === true){
                        let containerDiv = document.createElement('div')
                        containerDiv.setAttribute('class', 'menuContainer')
                        mapTile[i].appendChild(containerDiv)
                        let buildButton = document.createElement('button')
                        buildButton.innerHTML = 'BUILD'
                        buildButton.setAttribute('class', 'buildButton')
                        containerDiv.appendChild(buildButton)
                        let cancelButton = document.createElement('button')
                        cancelButton.innerHTML = 'CANCEL'
                        cancelButton.setAttribute('class', 'cancelButton')
                        containerDiv.appendChild(cancelButton)
                        cancelButton.addEventListener('click', function(e){
                            mapTile[i].activated = false
                            mapTile[i].canceled = true
                            mapTile[i].style.background = 'white'
                            return
                        })
                    }
                    
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
    } else {
        if(!mapTile[i].built){

            if(mapTile[i].race !== 'none') return
            let dropDownValue = document.getElementById('building-selector').value
            if (dropDownValue === 'ent') {
                mapTile[i].activated = false
                this.style.background = 'green'
                this.race = 'ent'
            
            this.innerText = `Race:${this.race} \n IP:${this.ip}`
            mapTile[i].tileValue = 2
            let tileID = mapTile[i].id
            mapTile[i].built = true
            
            ipCalc(tileID)
        } else if (dropDownValue === 'human') {
            mapTile[i].activated = false
            this.style.background = 'yellow'
            this.race = 'hmn'
            
            this.innerText = `Race:${this.race} \n IP:${this.ip}`
            mapTile[i].tileValue = 2
            let tileID = mapTile[i].id
            mapTile[i].built = true
            ipCalc(tileID)
        }  else if (dropDownValue === 'dwarve') {
            mapTile[i].activated = false
            this.style.background = 'mediumturquoise'
            this.race = 'dwv'
            
            this.innerText = `Race:${this.race} \n IP:${this.ip}`
            mapTile[i].tileValue = 2
            let tileID = mapTile[i].id
            mapTile[i].built = true
            ipCalc(tileID)
        }   
}
    }

}

})
}    

console.log(mapTile)