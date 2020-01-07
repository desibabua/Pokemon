const {appendFileSync} = require('fs');
const content = require('./pokemon.json');

const part1 = "<div>\n<h1>"
const Part2 = `</h1>\n<hr>\n<div>\n<img class="header" src="`
const Part3 = `" alt="image" height="250px">\n</div>\n<div class="power">\n`
const Part4 = `</div>\n<h4>Level : `
const Part5 = `</h4>\n<h4>nextLevel : `
const Part6 = `</h4>\n</div>`
const Img1 = `<img src="../images/`
const Img2 = `.png" alt="" height="30"></img>\n`

const getHtmlParts = function (content) {
    const name = content.name;
    const url = content.art_url
    const powers = content.types
    let nextLevel = "none"
    let Level = "max"
    console.log(content.evolutions)
    if (content.evolutions[0]) {
        nextLevel = content.evolutions[0].to ? content.evolutions[0].to : "none"
        Level = content.evolutions[0].level ? content.evolutions[0].level : "max"
    }
    return {name, url, powers, Level, nextLevel}
}

const getHtml = function (content) {
    const {name, url, powers, Level, nextLevel} = content;
    const Power = powers.map((power) => Img1 + power + Img2).join("")
    return part1 + name + Part2 + url + Part3 + Power + Part4 + Level + Part5 + nextLevel + Part6
}

const append = function () {
    content.forEach(onePokemon => {
        appendFileSync('./foo.html', getHtml(getHtmlParts(onePokemon)))
    });
}

append();