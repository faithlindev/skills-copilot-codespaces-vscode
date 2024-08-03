// Create web server and listen on port 3000

// Import express module
const express = require('express');
const app = express();
const port = 3000;

// Import body-parser module

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import mongoose module
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comment', { useNewUrlParser: true, useUnifiedTopology: true });

// Create schema
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});

// Create model

const Comment = mongoose.model('Comment', commentSchema);

// Set view engine
app.set('view engine', 'ejs');

// Set directory for views
app.set('views', './views');

// Set directory for static files
app.use(express.static('public'));

// Get request for home page
app.get('/', (req, res) => {
    res.render('index');
});


// Post request for home page
app.post('/', (req, res) => {
    var myData = new Comment(req.body);
    myData.save()
        .then(item => {
            res.send("Comment saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});


// Get request for comments page
app.get('/comments', (req, res) => {
    Comment.find({}, (err, comments) => {
        res.render('comments', { comments: comments });
    });
});


// Listen on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

