// Header color change on mouseOver
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


// let dropDownValue = 'ent'
// document.getElementById('building-selector').addEventListener('change', function (e) {
//     dropDownValue = e.target.value
// })
let colors = ["blue", "yellow", "orange"];
let currentColor = 0;
let gridLength = 396
let mapTile = []

for (let i = 0; i < gridLength ; i++) {
    mapTile[i] = document.createElement('span')
    mapTile[i].setAttribute('class', 'button number')
    index = i.toString()
    mapTile[i].setAttribute('id', index)
    document.getElementById('buttons').appendChild(mapTile[i])
    
    
}
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
             mapTile[i].tileValue = 2
          } else {
            
          }
        //    this.style.background = 'blue'
    })
}




// var colors = ["blue", "yellow", "orange"];
// var gridLength = 396;

// // Create the grid items and store them in the mapTile array
// let tileArray = []
// class MapTile  {
//     constructor (currentColor, colors) {
//     this.currentColor = 0
//     this.colors = ["white", "blue", "yellow", "orange"]
// }};
// for (var i = 0; i < gridLength; i++) {
//     let mapTile = new MapTile(0, 'white')
//     mapTile[i] = document.createElement("div");
//     mapTile[i].setAttribute('class', 'button number')
//     index = i.toString()
//     mapTile[i].setAttribute('id', index)
//     document.getElementById('buttons').appendChild(mapTile[i]);
//     tileArray.push(mapTile)
// }
// console.log(tileArray)

// // Add the click event listener to each grid item
// for (var i = 0; i < gridLength; i++) {
//     mapTile[i].addEventListener("click", function() {
//         this.style.backgroundColor = colors[0];
//         mapTile[i].currentColor++;
//         if (currentColor >= colors.length) {
//             currentColor = 0;
//         }
//     });
// }
