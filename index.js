let haar = require('haar-engine');

haar.engine();
haar.app.get('/', (req, res) => {
  res.json('Haar API');
});
haar.server.listen(3000);
