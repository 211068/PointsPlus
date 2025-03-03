const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000

app.use(express.static('public'));
app.use('/css', express.static(__dirname + "public/css"))
app.use('/js', express.static(__dirname + "public/js"))
app.use('/img', express.static(__dirname + "public/img"))

app.use(expressLayouts);
app.set('view engine', 'ejs')

//home route
app.get('/', (req, res) => {
    res.render('index');
  });

// Add the route for the top page
//app.get('/top', (req, res) => {
    //res.render('top.ejs');
  //});



app.listen(port, () => console.info(`App listening on port ${port}`));