// .seedgooserc.js
module.exports = {
    modelBaseDirectory: 'app_server/models', // model directory name
    models: ['*.js', '!db.js'],
    data: 'data', 
    db: 'mongodb://localhost:27017/travlr'
  };