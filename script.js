'use strict';

const cardContainer = document.querySelector('.section')


const getPokemon = function (pokemon) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    request.send();

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText)
        console.log(data);

        const html = `
    <div class="card-container">
    <div class="description">
        <img src="${data.sprites.other.dream_world.front_default}">
        <p class="name"><strong>${data.name}</strong> ${data.stats[0].base_stat}hp</p>
        <p class="xp">${data.base_experience}xp</p>
    </div>
    <div class="stats">
        <p class="attack">
            <strong>${data.stats[1].base_stat}</strong>
            Attack
        </p>
        <p class="defense">
            <strong>${data.stats[2].base_stat}</strong>
            Defense
    </div>
    </p>
</div>`;
        cardContainer.insertAdjacentHTML('beforeend', html);
    });

};

getPokemon('charizard');