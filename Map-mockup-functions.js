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



for (let i = 0; i < 396 ; i++) {
let mapTile = document.createElement('span')
mapTile.setAttribute('class', 'button number')
index = i.toString()
mapTile.setAttribute('id', index)
document.getElementById('buttons').appendChild(mapTile)

mapTile.addEventListener('pointerenter', function  (e) {
    if (this.style.background !== 'blue'){
    this.style.background = 'green';}
})
mapTile.addEventListener('pointerleave', function  (e) {
    if (this.style.background === 'green') {
    this.style.background = 'white';}})
    }
