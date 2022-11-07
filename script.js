'use strict';

const cardContainer = document.querySelector('.section')

const getPokemon = function (data, className = '') {
    const html = `<div class="card-container">
    <div class="description">
        <img>
        <p class="name"><strong>Name</strong> ##hp</p>
        <p class="xp">##xp</p>
    </div>
    <div class="stats">
        <p class="attack">
            <strong>##</strong>
            Attack
        </p>
        <p class="defense">
            <strong>##</strong>
            Defense
    </div>
    </p>
</div>`

    cardContainer.insertAdjacentHTML('beforeend', html);
    cardContainer.style.opacity = 1;
};

getPokemon();
