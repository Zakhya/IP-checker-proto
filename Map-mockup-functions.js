function pointerFadeSetupForHeader (){

let flex1 = document.getElementById('flexbox-item1')
let flex2 = document.getElementById('flexbox-item2')
let flex3 = document.getElementById('flexbox-item3')
let flex4 = document.getElementById('flexbox-item4')

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
