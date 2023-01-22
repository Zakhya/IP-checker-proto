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

for (let i = 1; i <= gridLength ; i++) {
    mapTile[i] = document.createElement('span')
    mapTile[i].setAttribute('class', 'button number')
    index = i.toString()
    if ([i] <= 22) indexY = 1
    if ([i] >= 23 && [i] <= 44) indexY = 2
    if ([i] >= 45 && [i] <= 66) indexY = 3
    if ([i] >= 67 && [i] <= 88) indexY = 4
    if ([i] >= 89 && [i] <= 110) indexY = 5
    if ([i] >= 111 && [i] <= 132) indexY = 6
    if ([i] >= 133 && [i] <= 154) indexY = 7
    if ([i] >= 155 && [i] <= 176) indexY = 8
    if ([i] >= 177 && [i] <= 198) indexY = 9
    if ([i] >= 199 && [i] <= 220) indexY = 10
    if ([i] >= 221 && [i] <= 242) indexY = 11
    if ([i] >= 243 && [i] <= 264) indexY = 12
    if ([i] >= 265 && [i] <= 286) indexY = 13
    if ([i] >= 287 && [i] <= 308) indexY = 14
    if ([i] >= 309 && [i] <= 330) indexY = 15
    if ([i] >= 331 && [i] <= 352) indexY = 16
    if ([i] >= 353 && [i] <= 374) indexY = 17
    if ([i] >= 375 && [i] <= 396) indexY = 18


    if ([i] == 1 || 23 || 45 || 67 || 89 || 111 || 133 || 155 || 177 || 199 || 221 || 243 || 265 || 287 || 309 || 331 || 353 || 375) indexX = 1
    if ([i] == 2 || 24 || 46 || 68 || 90 || 112 || 134 || 156 || 178 || 200 || 222 || 244 || 266 || 288 || 310 || 332 || 354 || 376) indexX = 2
    if ([i] == 3 || 25 || 47 || 69 || 91 || 113 || 135 || 157 || 179 || 201 || 223 || 245 || 267 || 289 || 311 || 333 || 355 || 377) indexX = 3
    if ([i] == 4 || 26 || 48 || 70 || 92 || 114 || 136 || 158 || 180 || 202 || 224 || 246 || 268 || 290 || 312 || 334 || 356 || 378) indexX = 4
    if ([i] == 5 || 27 || 49 || 71 || 93 || 115 || 137 || 159 || 181 || 203 || 225 || 247 || 269 || 291 || 313 || 335 || 357 || 379) indexX = 5
    if ([i] == 6 || 28 || 50 || 72 || 94 || 116 || 138 || 160 || 182 || 204 || 226 || 248 || 270 || 292 || 314 || 336 || 358 || 380) indexX = 6
    if ([i] == 7 || 29 || 51 || 73 || 95 || 117 || 139 || 161 || 183 || 205 || 227 || 249 || 271 || 293 || 315 || 337 || 359 || 381) indexX = 7
    if ([i] == 8 || 30 || 52 || 74 || 96 || 118 || 140 || 162 || 184 || 206 || 228 || 250 || 272 || 294 || 316 || 338 || 360 || 382) indexX = 8
    if ([i] == 9 || 31 || 53 || 75 || 97 || 119 || 141 || 163 || 185 || 207 || 229 || 251 || 273 || 295 || 317 || 339 || 361 || 383) indexX = 9
    if ([i] == 10 || 32 || 54 || 76 || 98 || 120 || 142 || 164 || 186 || 208 || 230 || 252 || 274 || 296 || 318 || 340 || 362 || 384) indexX = 10
    if ([i] == 11 || 33 || 55 || 77 || 99 || 121 || 143 || 165 || 187 || 209 || 231 || 253 || 275 || 297 || 319 || 341 || 363 || 385) indexX = 11
    if ([i] == 12 || 34 || 56 || 78 || 100 || 122 || 144|| 166 || 188 || 210 || 232 || 254 || 276 || 298 || 320 || 342 || 364 || 386) indexX = 12
    if ([i] == 13 || 35 || 57 || 79 || 101|| 123 || 145 || 167 || 189 || 211 || 233 || 255 || 277 || 299 || 321 || 343 || 365 || 387) indexX = 13
    if ([i] == 14 || 36 || 58 || 80 || 102|| 124 || 146 || 168 || 190 || 212 || 234 || 256 || 278 || 300 || 322 || 344 || 366 || 388) indexX = 14
    if ([i] == 15 || 37 || 59 || 81 || 103|| 125 || 147 || 169 || 191 || 213 || 235 || 257 || 279 || 301 || 323 || 345 || 367 || 389) indexX = 15
    if ([i] == 16 || 38 || 60 || 82 || 104|| 126 || 148 || 170 || 192 || 214 || 236 || 258 || 280 || 302 || 324 || 346 || 368 || 390) indexX = 16
    if ([i] == 17 || 39 || 61 || 83 || 105|| 127 || 149 || 171 || 193 || 215 || 237 || 259 || 281 || 303 || 325 || 347 || 369 || 391) indexX = 17
    if ([i] == 18 || 40 || 62 || 84 || 106|| 128 || 150 || 172 || 194 || 216 || 238 || 260 || 282 || 304 || 326 || 348 || 370 || 392) indexX = 18
    if ([i] == 19 || 41 || 63 || 85 || 107|| 129 || 151 || 173 || 195 || 217 || 239 || 261 || 283 || 305 || 327 || 349 || 371 || 393) indexX = 19
    if ([i] == 20 || 42 || 64 || 86 || 108|| 130 || 152 || 174 || 196 || 218 || 240 || 262 || 284 || 306 || 328 || 350 || 372 || 394) indexX = 20
    if ([i] == 21 || 43 || 65 || 87 || 109|| 131 || 153 || 175 || 197 || 219 || 241 || 263 || 285 || 307 || 329 || 351 || 373 || 395) indexX = 21
    if ([i] == 22 || 44 || 66 || 88 || 110|| 132 || 154 || 176 || 198 || 220 || 242 || 264 || 286 || 308 || 330 || 352 || 374 || 396) indexX = 22
    

    mapTile[i].setAttribute('id', index)
    document.getElementById('buttons').appendChild(mapTile[i])
    
    
}
for (let i = 1; i < mapTile.length; i++) {
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
             this.textContent = 'Ent'
            } else if (dropDownValue === 'reaper'){ 
                this.style.background = '#404040'
                mapTile[i].tileValue = 3
                this.textContent = 'Reaper'
            } else if (dropDownValue === 'dwarve') {
                this.style.background = '#99bbff'
                mapTile[i].tileValue = 4
                this.textContent = 'Dwarve'
            } else if (dropDownValue === 'human') {
                this.style.background = ' #ffff80'
                mapTile[i].tileValue = 5
                this.textContent = 'Human'
            } else if (dropDownValue === 'goblin') {
                this.style.background = '#99e600'
                mapTile[i].tileValue = 6
                this.textContent = 'Goblin'
          }
        //    this.style.background = 'blue'
    })
}



class Maptile {
    constructor() {

    }
}