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
        hitPoints: 3,
    
    };

    gruntList.push(newGrunt);
  
    formEl.reset();
    DisplayGrunt();
});




  // get user input
  // use user input to update state 

  // update DOM to reflect the new state

function DisplayGrunt() {
    gruntContainerEl.textContent = '';
    for (let grunt of gruntList){
        const gruntEl = renderGrunt(grunt);

        gruntEl.addEventListener('click', () => {
            if (characterHpEl > 0 && grunt.hitPoints > 0){
                if (Math.random() > 0.5) {
                    grunt.hitPoints--;
                    alert(`BAM! ${grunt.name} got dunked on`);
                }
                else {
                    alert(`You missed ${grunt.name}!`);
                }
                
            }
            DisplayGrunt();
        });
        
        gruntContainerEl.append(gruntEl);

    }}

