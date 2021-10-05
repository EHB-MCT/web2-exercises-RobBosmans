
let list = [];
let pokemon = [];

function getData(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => {
        return response.json();
    }).then(data =>{
            list = data.results;
            
            //loop over list to get each pokemon
            for(let element of list) {
                fetch(element.url).then(response =>{
                    return response.json();
                }).then(data => {
                    pokemon.push(data)
                    console.log(pokemon);
                })
            };
    })
};

window.onload = function(){
    
    getData();

    setTimeout(buildList, 3000);
    
    function buildList(){
        for(let i = 0; i < 151; i++){
            let html = `
            <img src="" alt="pokemonImage">
            <p>${pokemon.name}</p>
            <p>type</p>
            <button>Add</button>
            `
            document.getElementById('pokemon').innerHTML = html;
        }
    }
    buildList();
    
    /* function buildList(){
        let html = `
        <img src="" alt="pokemonImage">
        <p>${pokemon.name}</p>
        <p>${pokemon.types}</p>
        <button>Add</button>
        `
        document.getElementById('pokemon').innerHTML = html;
    }
    buildList(); */

}

