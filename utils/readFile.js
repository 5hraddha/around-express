/**
 * Read the data from the file.
 * @module utils/readFile
 */
const fsPromises = require('fs').promises;

/**
 * Read and return the data from the file.
 * @param {string} filePath - The path of the file to read.
 * @param {Object} res - The response object.
 * @return {Promise} `data` - The promise with data successfully read from the file.
 * @return {Promise} `500` - Internal server error response
 */
const readFile = (filePath, res) => fsPromises
  .readFile(filePath, { encoding: 'utf8' })
  .then(JSON.parse)
  .catch(() => res
    .status(500)
    .send({ message: 'An error has occurred on the server' }));

module.exports = readFile;
