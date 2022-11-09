'use strict';

const cardContainer = document.querySelector('.section');
const button = document.querySelector('.button');


const getPokemon = function (id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(async r => {
        let e = await r.json()
        return e;
    })
};

const createPokemon = function (data) {
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
}

button.addEventListener('click', async function () {
    let rand = (Math.trunc(Math.random() * 151) + 1);
    const pokemonData1 = await getPokemon(rand)

    rand = (Math.trunc(Math.random() * 151) + 1);
    const pokemonData2 = await getPokemon(rand)

    // const pokemonData3 = await getPokemon(15)
    createPokemon(pokemonData1);
    createPokemon(pokemonData2);
    // createPokemon(pokemonData3); 

    const fusion = pokemonData1.name.slice(0, 4) + pokemonData2.name.slice(-4);
    createPokemon({ ...pokemonData2, name: fusion });
});

