
function numberGuesser(){
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);

    document.getElementById("myButton").addEventListener("submit", event => {
        event.preventDefault();
    })
    /* document.getElementById("myButton").addEventListener('submit', event =>{
        event.preventDefault();
    
        var x = document.getElementById("input");
        console.log(x); 
    }); */
}

numberGuesser();