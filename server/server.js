const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', '../public/index.html');

// Turn on that server!
app.listen(PORT, () => {
  console.log('App listening on port 3000');
});