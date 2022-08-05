// import functions and grab DOM elements
const defeatedGruntsEl = document.getElementById('defeated-grunts');
const characterHpEl = document.getElementById('character-hp');
const gruntContainerEl = document.getElementById('grunt-area');
const formEl = document.querySelector('form');

// let state
let characterHP = 10;
let defeatedGrunts = 0;
const gruntList = [
    {
        name: 'Monty',
        hitPoints: 3
    },
    {
        name: 'Juicer',
        hitpoints: 5
    },
    {
        name: 'Tito',
        hitpoints: 10,
    }
];

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
