// https://www.strava.com/oauth/token?client_id=41469&client_secret=0743f07f60f0eca5e78db28f88f78032a10067b8&code=306f962434700f1503a4478f7971af0f0f54e1f7&grant_type=authorization_code

refreshToken = "c6d059e946455c72bfdaa2a4f78e8172c7a200a5";

window.onload = function(){


    getData().then(result => {
        console.log(result)
    });
    getNewAccessToken();

};

async function getData(e){
    //fetch routes
    let response = await fetch("https://www.strava.com/api/v3/athletes/15412454/routes?access_token=bd8f2ee1a63ec2714324d8d27f1b24d7bfff59db");
    return await response.json();
};

function getNewAccessToken(e){
    //Access Token expires so needs to be refreched by using the refresh token. 
    //code from postman
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "_strava4_session=mp0pj628d3j9937dl8jpvfh0lrnbg0b1");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://www.strava.com/oauth/token?client_id=41469&client_secret=0743f07f60f0eca5e78db28f88f78032a10067b8&refresh_token=c6d059e946455c72bfdaa2a4f78e8172c7a200a5 &grant_type=refresh_token", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};



