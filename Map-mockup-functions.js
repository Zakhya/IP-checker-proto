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

let flex1 = document.getElementById('flexbox-item1')
let flex2 = document.getElementById('flexbox-item2')
let flex3 = document.getElementById('flexbox-item3')


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

for (let i = 0; i < mapTile.length; i++) {
    mapTile[i].tileValue = 0
    mapTile[i].addEventListener('pointerenter', function  (e) {
        if (mapTile[i].tileValue === 0){
        this.style.background = 'grey'
        mapTile[i].tileValue = 1;}
    })
    mapTile[i].addEventListener('pointerleave', function  (e) {
        if (mapTile[i].tileValue === 1) {
        this.style.background = 'white';
        mapTile[i].tileValue = 0}})
        mapTile[i].addEventListener('click', function (e) {
            //change color based on dropdown menu
            let dropDownValue = document.getElementById('building-selector').value
           if (dropDownValue === 'ent') {
             this.style.background = 'green'
             console.log(`column: ${this.columnNumber}`)
             console.log(this.rowNumber)
             this.race = 'ent'
             
             
             this.innerText = `Race:${this.race} \n IP:${this.ip}`
             mapTile[i].tileValue = 2
             ipCalc()
        } else if (dropDownValue === 'human') {
            this.style.background = 'yellow'
            console.log(`column: ${this.columnNumber}`)
            console.log(this.rowNumber)
            this.race = 'hmn'
            
            
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
                  }
                }
              }
            }
            if(mapTile[i].race === 'ent'){
                ip += entsAround;
                ip -= humansAround
                
            } else if (mapTile[i].race === 'hmn'){
                ip -= entsAround;
                ip += humansAround

            }
          

        mapTile[i].ip = ip;
        if(mapTile[i].race !== 'none'){
            mapTile[i].innerText = `Race: ${mapTile[i].race}\nIP: ${mapTile[i].ip}`;
        }
    }
}


console.log(mapTile)