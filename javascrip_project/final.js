
function findPokemon() {
    let pokename = document.querySelector("#pokename").value.toLowerCase();
    if (pokename != "") {  
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`).then(response => response.json()).then(pokemon => addInfo(pokemon));
    }
}

function deletePokemon() {
    document.querySelector(".pokemon").remove();
}

function addInfo(pokemon) {
    let spriteURL = pokemon.sprites.front_default;

    let pokeInfo = document.querySelector("#pokeInfo");
    let container = document.createElement("div");
    let name = document.createElement("h2");
    let sprite = document.createElement("img");
    let deleteButton = document.createElement("button");

    name.textContent = pokemon.species.name.toUpperCase();
    deleteButton.textContent = "X";

    container.setAttribute("class", "pokemon")
    sprite.setAttribute("src", spriteURL);
    deleteButton.setAttribute("class", "deleteButton");

    deleteButton.addEventListener("click", deletePokemon);

    pokeInfo.append(container);
    container.append(name);
    container.append(sprite);
    addStats(container, pokemon);
    container.append(deleteButton);
   
}

function addStats(container, pokemon) {
    let stats = document.createElement("ul");
    let hp = document.createElement("li");
    let attack = document.createElement("li");
    let defense = document.createElement("li");
    let specialAttack = document.createElement("li");
    let specialDefense = document.createElement("li");
    let speed = document.createElement("li");

    hp.textContent = `HP: ${pokemon.stats[0].base_stat}`
    attack.textContent = `Attack: ${pokemon.stats[1].base_stat}`
    defense.textContent = `Defense: ${pokemon.stats[2].base_stat}`
    specialAttack.textContent = `Special Attack: ${pokemon.stats[3].base_stat}`
    specialDefense.textContent = `Special Defense: ${pokemon.stats[4].base_stat}`
    speed.textContent = `Speed: ${pokemon.stats[5].base_stat}`

    container.append(stats);
    stats.append(attack);    
    stats.append(hp);
    stats.append(defense);
    stats.append(specialAttack);
    stats.append(specialDefense);
    stats.append(speed);
};

document.querySelector("#search").addEventListener("click", findPokemon);

