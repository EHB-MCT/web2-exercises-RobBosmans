window.onload = function () {
    console.log('loaded')

//add eventlistener
document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();

    //get values from inputfields
    let name = document.getElementById('nameInput').value;
    let email = document.getElementById('emailInput').value;
    let order = document.getElementById('orderInput').value;

    //print on screen
    let message = `<p>The order for the customer ${name}  is the following:  ${order}. The customer may be notified by email:  ${email}</p>`;
    document.getElementById('message').innerHTML = message;
});
}


