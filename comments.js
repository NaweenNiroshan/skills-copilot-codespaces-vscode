// Create web server
// Create a route for GET /comments
// Read the comments.json file
// Send the comments.json file as the response

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('An error occurred. Please try again later.');
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Run the server and test the route
// Open the browser and navigate to http://localhost:3000/comments
// You should see the contents of the comments.json file displayed in the browser