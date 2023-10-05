import cors from 'cors';

const corsOptions = {
  origin: 'http://example.com',
  optionsSuccessStatus: 200,
}

module.exports = cors(corsOptions);