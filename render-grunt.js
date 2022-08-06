export function renderGrunt(grunt) {



    const gruntEl = document.createElement('div');
    const gruntName = document.createElement('p');
    const gruntGif = document.createElement('img');
    const gruntHP = document.createElement('p');

    gruntName.textContent = grunt.name;
    gruntHP.textContent = grunt.hitPoints;
    if (grunt.hitPoints > 0){gruntGif.src = './assets/grunt.gif'; 
    } else {
        gruntGif.src = './assets/death.png';
        gruntGif.classList.add('gruntDeath');
    }

    // gruntGif.src = './assets/grunt.gif';
    
    gruntEl.classList.add('grunt');
    // gruntGif.classList.add('./assets/grunt.gif');

    gruntEl.append(gruntName, gruntGif, gruntHP);

    return gruntEl;
}