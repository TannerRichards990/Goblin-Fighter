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
displayGrunt();

// set event listeners 
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);
    const gruntName = data.get('grunt-name');
    
    const newGrunt = {
        name: gruntName,
        hitPoints: Math.ceil(Math.random() * 5),
        
        
    
    };

    gruntList.push(newGrunt);
  
    formEl.reset();
    displayGrunt();
});




  // get user input
  // use user input to update state 

  // update DOM to reflect the new state

function displayGrunt() {
    gruntContainerEl.textContent = '';
    for (let grunt of gruntList){
        const gruntEl = renderGrunt(grunt);

        gruntEl.addEventListener('click', () => {
          
            if (characterHP > 0 && grunt.hitPoints > 0){
                if (Math.random() > 0.5) {
                    grunt.hitPoints--;
                    alert(`BAM! ${grunt.name} got dunked on`);
                }
                else {
                    characterHP--;
                    alert(`You missed ${grunt.name} and the grunt hit you!`);
                    characterHpEl.textContent = characterHP;
                }
                if (grunt.hitPoints === 0){
                    defeatedGrunts++;
                }
                
            }
                
            
            displayGrunt();
        });
        
        gruntContainerEl.append(gruntEl);

    }}

