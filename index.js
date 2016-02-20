const haar = require('haar-engine');

process.env.MONGO_HOST = process.env.HAAR_MONGO_1_PORT_27017_TCP_ADDR;

haar.init();
haar.app.get('/', (req, res) => {
  res.json('Haar API');
});
haar.server.listen(3000);
