'use strict'

var choices = ['Rock', 'Paper', 'Scissors'];

function computerPlay(choices) {
    return choices[Math.floor(choices.length * Math.random())];
}