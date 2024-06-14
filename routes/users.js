
import express from 'express'
const user = express.Router();

/* GET users listing. */
user.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default user



