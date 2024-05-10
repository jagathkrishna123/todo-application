
//import json server package
const jsonServer = require('json-server');
//create json server
const todoServer = jsonServer.create();
//create a connection to db.json file
const router = jsonServer.router('db.json')
//create a middleware : intermediate function inorder to use all the created objects
const middleware = jsonServer.defaults()
//use this middleware
todoServer.use(middleware)
todoServer.use(router)

const port = 5000;
todoServer.listen(port,()=>{
    console.log("json server is up and running in port 5000");
})