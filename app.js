const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3000

app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/data', express.static(path.join(__dirname, 'public/data')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressLayouts);
app.set('view engine', 'ejs')

//Path to JSON file
const DATA_FILE = path.join(__dirname, '/public/data/data.json');

// Load existing data or initialize an empty array
const loadData = () => {
    try {
        return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')) || [];
    } catch (error) {
        return [];
    }
};

//home route
app.get('/', (req, res) => {
    res.render('index');
  });

app.post('/', (req, res) => {
  res.render('index');
});

//Add the route for the top page
app.get('/form', (req, res) => {
    res.render('form.ejs');
  });


// Handle form submission
app.post('/submit', (req, res) => {
  console.log(req.body); // Debugging: Log the received form data

  try {
    const { house1, count1, house2, count2, house3, count3 } = req.body;

    const newData = [
      { house: house1, count: Number(count1) },
      { house: house2, count: Number(count2) },
      { house: house3, count: Number(count3) },
    ];

    fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2), 'utf8');
    res.redirect('/');
  } catch (error) {
    console.error('Error writing to JSON file:', error);
    res.status(500).send('Internal Server Error');
  }
});

// 404 Error Middleware (should be the last route)
app.use((req, res) => {
  res.status(404).render("404"); // Render 404.ejs
});
app.listen(port, () => console.info(`App listening on port ${port}`));