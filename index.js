const haar = require('haar-engine');

haar.init();
haar.app.get('/', (req, res) => {
  res.json('Haar API');
});
haar.server.listen(3000);
