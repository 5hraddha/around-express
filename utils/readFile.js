const fsPromises = require('fs').promises;

const readFile = (filePath, res) => fsPromises
  .readFile(filePath, { encoding: 'utf8' })
  .then(JSON.parse)
  .catch(() => res
    .status(500)
    .send({ message: 'An error has occurred on the server' })
  );

module.exports = readFile;
