let obj={
  "name": "backend_with_node",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "fs_module.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
     "dev": "nodemon index2.js"
  },
  "dependencies": {
    "nodemon": "^3.1.14"
  }
}

let stringified=JSON.stringify(obj)
console.log(stringified)

let parsed=JSON.parse(stringified)
console.log(parsed);