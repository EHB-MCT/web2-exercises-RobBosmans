window.onload = function () {
    console.log('loaded')
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        .then((response) => response.json())
        .then((data) => {
            const parent = document.getElementById('pokemon');
            console.log(data.results[0]);
            parent.innerHTML = `
                <img src="" alt="pokemonImage">
                <p>${data.results[0].name}</p>
                <p>type</p>
                <button>Add</button>
            `;
        });
            
};
