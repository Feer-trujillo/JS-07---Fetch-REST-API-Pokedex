const BaseUrl=" https://pokeapi.co/api/v2/";


const fetchPokemon = async (pokemon) => {
    try {
    const response= await fetch(`${BASE_URL}pokemon/${pokemon}`);
    console.log(response);
    const parsedData = await response.json();
    console.log(parsedData);
    return parsedData;
    } catch (err){
        console.error(err);
    }
    };
    
    
    const createPokemonCard = (pokemon) => {
        const card = document.createElement("div");
        card.className = "pokemon-card"; 
        const abilities = pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
        
        card.innerHTML = `
            <h1>${pokemon.name}</h1>
            <h2> ID: ${Id}<h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>Peso: ${pokemon.weight / 10} kg</p>
            <p>Habilidad: ${abilities}</p>
        `
        return card;
    };
    
    
    
    const displayPokemonCard = (pokemon) => {
        const container = document.getElementById("pokemon-container");
        container.innerHTML = ''; 
        const card = createPokemonCard(pokemon);
        container.appendChild(card);
    };
    
    
    
    
    document.getElementById("get-btn").addEventListener("click", async ()  =>{
        const text = document.getElementById("pokemon-name").value.toLowerCase();
        const pokemon =await fetchPokemon(text);
        localStorage.setItem("currentPokemonId", pokemon.id);
        console.log(pokemon.name);
    });
    
    document.getElementById("prev-btn").addEventListener("click", async () =>{
        const currentPokemonId = parseInt(localStorage.getItem("currentPokemonId"));
        const newId = Math.max(currentPokemonId -1, 1);
        const pokemon =await fetchPokemon(newId);
        console.log(pokemon.name);
    });
    
    document.getElementById("next-btn").addEventListener("click", async () =>{
        const currentPokemonId = parseInt(localStorage.getItem("currentPokemonId"));
        const newId = currentPokemonId +1;
        const pokemon =await fetchPokemon(newId);
        console.log(pokemon.name);
    });
    
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            title: "Charizard",
            body: "lorem ipsum",
            userId: 6,
        }),
    }).then(res => res.json())
    .then((data)=> console.log(data));
