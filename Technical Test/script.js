// https://www.strava.com/oauth/token?client_id=41469&client_secret=0743f07f60f0eca5e78db28f88f78032a10067b8&code=306f962434700f1503a4478f7971af0f0f54e1f7&grant_type=authorization_code

window.onload = function(){


    getData().then(result => {
        console.log(result)
    });
};

async function getData(e){
    let response = await fetch("https://www.strava.com/api/v3/athletes/15412454/routes?access_token=0a60016b3765a2a4a9554f0d52d92e9cd515506c");
    return await response.json();
};