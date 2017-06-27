
const redis = require('redis');

module.exports = ({config}) => redis.createClient(config.memory);