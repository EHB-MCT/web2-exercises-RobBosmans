const Cleave = require("cleave.js");

const cleave= require(Cleave);

new Cleave(".fnumber", {
    phone: true,
    phoneRegionCode: 'BE'
});



