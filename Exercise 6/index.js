const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/info.html')
})

app.get('/test', (req, res) =>{
    res.send('Test succeeded');
});

app.get('/data', (req, res) =>{
    let exampleData = {
        name: 'Rob'
    }
    res.send(exampleData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})