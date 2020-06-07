var low = require('lowdb');

var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');

db = low(adapter);//tao obj moi, goi low truyen vao adapter goi la db

//set some default (require if your Json file is empty)
db.defaults({users: []})
.write();

module.exports = db;