const mil = require('./mil');
const demil = require('./demil');

const contraProp = obj => key => obj[key];

/**
 * Military speak, but way over the top. Converts a bit of text to its
 * military alphabet spelling.
 * @param {string} text
 */
function militarizeText(text) {
    const justLetters = text.replace(/[^a-zA-Z]/g, '');
    return [...justLetters.toUpperCase()].map(contraProp(mil)).join(' ');
}

/**
 * Converts a bit of text from military alphabet to normal letters.
 * @param {string} text
 */
function demilitarizeText(text) {
    const justMilStuff = text
        .toLowerCase()
        .replace(/\s{2,}/g)
        .split(' ');
    return justMilStuff.map(contraProp(demil)).join('');
}

module.exports = { demilitarizeText, militarizeText };
