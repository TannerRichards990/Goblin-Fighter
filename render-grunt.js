export function renderGrunt(grunt) {



    const gruntContainer = document.createElement('div');
    const gruntName = document.createElement('p');
    const gruntGif = document.createElement('img');
    const gruntHP = document.createElement('p');

    gruntName.textContent = grunt.name;
    gruntHP.textContent = grunt.hitPoints;
    gruntGif.src = './assets/grunt.gif';
    
    gruntContainer.classList.add('grunt');
    gruntGif.classList.add('./assets/grunt.gif');

    gruntContainer.append(gruntName, gruntGif, gruntHP);

    return gruntContainer;
}