window.onload = function(){
    async function getData(){
        let response = await fetch('http://www.omdbapi.com/?t=parasite&apikey=78ba43d9');
        let data = await response.json();
        return data;
    };
    
    getData()
    .then(data => console.log(data))
};



