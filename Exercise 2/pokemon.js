import team from './team.js';

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
                fetch(element.url).then(response => {
                    return response.json();
                }).then(data => {
                    pokemon.push(data);
                    //console.log(pokemon);
                })
            }
    })
};

window.onload = function(){
    
    getData();

    setTimeout(buildList, 3000);
    
    function buildList(){
        let html = '';
        //order list
        pokemon.sort(function(a,b){
            return a.id - b.id;
        });

        for(let p of pokemon){
            html += `
            <div id="item">
                <div>
                    <img src="${p.sprites.front_default}" alt="pokemonImage">
                    <h4>${p.name}</h4>
                    <a href="#" id="${p.id}"><p>ADD</p></a>
                </div>
            </div>
            `
        }
        document.getElementById('list').innerHTML = html;
    };
};

