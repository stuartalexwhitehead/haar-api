const haar = require('haar-engine');

haar.init({
  MONGO: {
    HOST: process.env.MONGO__HOST,
    USERNAME: process.env.MONGO__USERNAME,
    PASSWORD: process.env.MONGO__PASSWORD,
  },
  JWT: {
    SECRET: process.env.JWT__SECRET,
  },
});

haar.app.get('/', (req, res) => {
  res.json('Haar API');
});

haar.server.listen(3000);
