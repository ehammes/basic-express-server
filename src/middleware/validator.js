'use strict';


function validate(req, res, next) {
  let { name } = req.query;
  if (!name) {
    next('Enter a name query parameter: /person?name=Fred');
  } else {
    console.log('name:', name);
  }
  next();
}

module.exports = validate;