const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app.use(serveStatic(path.join(__dirname, 'dist')));

// Catch all routes and redirect to the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`server running on the ${PORT}`);
});
