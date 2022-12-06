// Asignacion de variables

const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');
const pokeId = document.querySelector('[data-poke-id]')

// Asignacion de colores
const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
}

// Asignando API para la funcionalidad del Form
const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then(data => data.json())
        .then(response =>renderPokemonData(response))
}

// Datos Principales de cada pokemon (Nombre, Imagen, ID)
const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const { stats, types } = data;
    
    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);
}

// Color de fondo de cada pokemon segun su elemento
const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg.style.backgroundSize = ' 5px 5px';
}

// Estilo de color dentro de cada elemento
const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

// Datos secundarios de pokemon (Fuerza, velocidad, vida, resistencia, etc)
const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        const statElementName = document.createElement("div");
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat; // stats: {power= "10", resistance= "20"}
        statElement.appendChild(statElementName); // {power, resistance}
        statElement.appendChild(statElementAmount); // {10, 20}
        pokeStats.appendChild(statElement); 
    });
}

// Pokemon sin encontrar 
const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', 'poke-shadow.png');
    pokeImg.style.background =  '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}

// Equipos global storage

function equipoPokemon(){

    //gyarados
    let gyarados = {
        fuerza: '30',
        resistencia: '40',
        vida: '200',
        golpeEspecial: 'hidropulso'
    }

    //charizard
    let charizard = {
        fuerza: '25',
        resistencia: '70',
        vida: '180',
        golpeEspecial: 'Llamarada'
    }

    //mewtwo
    let mewtwo = {
        fuerza: '60',
        resistencia: '20',
        vida: '150',
        golpeEspecial: 'control mental'
    }

    //dragonite
    let dragonite = {
        fuerza: '20',
        resistencia: '50',
        vida: '400',
        golpeEspecial: 'golpe ala'
    }

    //zapdos
    let zapdos = {
        fuerza: '40',
        resistencia: '40',
        vida: '160',
        golpeEspecial: 'Electrotrueno'
    }

    //articuno
    let articuno = {
        fuerza: '50',
        resistencia: '45',
        vida: '200',
        golpeEspecial: 'congelacion'
    }

    //Llamados al escena
    localStorage.setItem( 'Primer pokemon' , JSON.stringify( gyarados ))
    localStorage.setItem( 'Segundo pokemon' , JSON.stringify( charizard ))
    localStorage.setItem( 'Tercer pokemon' , JSON.stringify( mewtwo ))
    localStorage.setItem( 'Cuarto pokemon' , JSON.stringify( dragonite ))
    localStorage.setItem( 'Quinto pokemon' , JSON.stringify( zapdos ))
    localStorage.setItem( 'Ultimo pokemon' , JSON.stringify( articuno ))

}

equipoPokemon()