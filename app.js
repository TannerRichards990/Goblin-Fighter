// import functions and grab DOM elements
import { renderGrunt } from './render-grunt.js';


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
        hitPoints: 3,
    },
    {
        name: 'Tito',
        hitPoints: 3,
    }
];
DisplayGrunt();

// set event listeners 
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);
    const gruntName = data.get('grunt-name');
    console.log(gruntName);

    const newGrunt = {
        name: gruntName,
        hitpoints: 3,
    
    };

    gruntList.push(newGrunt);
  
  
});




  // get user input
  // use user input to update state 

  // update DOM to reflect the new state

function DisplayGrunt() {
    gruntContainerEl.textContent = '';
    for (let grunt of gruntList){
        const gruntEl = renderGrunt(grunt);

        // if (grunt.hitPoints === 0){

        // }

        gruntContainerEl.append(gruntEl);

    }}

