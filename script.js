const {appendFileSync} = require('fs');
const content = require('./pokemon.json');


const part1 = `<div class="pokeCard">\n<div class="power">\n<div>\n<h1>`
const Part2 = `</h1>\n</div>\n<div>\n`
const Part3 = `</div>\n</div>\n<div>\n<div class="cardFront">\n<img class="header" src="`
const Part4 = `" alt="image" height="220px">\n<h4>Level : `
const Part5 = `</h4>\n<h4>nextLevel : `
const Part6 = `</h4>\n</div>\n<div class="cardBack">\n<h4>Description</h4>\n<p>`
const Part7 = `</p>\n</div>\n</div>\n<div><button>Description</button></div></div>`
const Img1 = `<img src="./images/`
const Img2 = `.png" alt="" height="30"></img>\n`

const getHtmlParts = function (content) {
    const name = content.name;
    const url = content.art_url
    const powers = content.types
    const description = content.description
    let nextLevel = "none"
    let Level = "max"
    if (content.evolutions[0]) {
        nextLevel = content.evolutions[0].to ? content.evolutions[0].to : "none"
        Level = content.evolutions[0].level ? content.evolutions[0].level : "max"
    }
    return {name, url, powers, Level, nextLevel, description}
}

const getHtml = function (content) {
    const {name, url, powers, Level, nextLevel, description} = content;
    const Power = powers.map((power) => Img1 + power + Img2).join("")
    return part1 + name + Part2 + Power + Part3 + url + Part4 + Level + Part5 + nextLevel + Part6 + description + Part7
}

const append = function () {
    content.forEach(onePokemon => {
        appendFileSync('./foo.html', getHtml(getHtmlParts(onePokemon)))
    });
}

append();