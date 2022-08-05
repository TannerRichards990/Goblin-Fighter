export function renderGrunt(grunt) {



    const gruntContainer = document.createElement('div');
    const gruntName = document.createElement('p');
    const gruntGif = document.createElement('img');
    const gruntHP = document.createElement('p');

    gruntName.textContent = grunt.name;
    gruntHP.textContent = grunt.healthPoints;
    gruntGif.src = (grunt.healthPoints >= 0) ? './assets/grunt.gif' : './assets/death.png';
    
    gruntContainer.classList.add('grunt');
    gruntGif.classList.add('./assets/grunt.gif');

    gruntContainer.append(gruntName, gruntGif, gruntHP);

    return gruntContainer;
}