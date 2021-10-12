let baseurl = "http://www.omdbapi.com/?apikey=78ba43d9";

window.onload = function(){
    
    // input
    inputData();
    
    // url build
    //let url = baseurl + `t=${inputTitle}`;
    // getData(url).then(result => {
    //     console.log(result)
    // });
};

async function getData(e){
    let response = await fetch(baseurl);
    return await response.json();
};

function inputData(e){

    document.getElementById("searchform").addEventListener("submit", event => {
        event.preventDefault();
        let inputTitle = document.getElementById("inputTitle").value;
        console.log(inputTitle);

        let url = baseurl + `s=${inputTitle}`;

        getData(url).then(result => {
            console.log(result)
        });
    })

}



