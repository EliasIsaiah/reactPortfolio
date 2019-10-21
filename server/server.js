const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', path.join(__dirname, '..','public','index.html'));

// Turn on that server!
app.listen(PORT, () => {
  console.log('App listening on port 3000');
});