// this javascript file is loaded by node.js and runs on the server-side

// load the core node http module
const http = require("http");

// load the core node filesystem (fs) module, using js promises instead of callbacks
const fs = require("fs").promises;

// create a function to respond to http requests
function requestListener(req, res) {

  // check the request url and return a file's contents
  const urlarray = req.url.split('/');
  console.log(urlarray);

  switch (urlarray[1]) {
    case "item":
      loadReturn('public/item.html', 'text/html', res);
      break;
    case "client":
      loadReturn('public/client.js', 'text/javascript', res);
      break;
    case "data":
      loadReturn('data.json', 'application/json', res);
      break;
    case "list":
      loadReturn('public/list.html', 'text/html', res);
      break;
    case "":
      loadReturn('public/list.html', 'text/html', res);
      break;
    case "favicon.ico":
      res.writeHead(404);
      res.end();
      break;
    default: // any other url including just root "/"
      // load file from server filesystem
      fs.readFile(__dirname + "/public/" + urlarray[1])
        .then(contents => {
            // set http response header entry text/html
            res.setHeader('Content-Type', 'image/jpeg');
            // return 200 OK http status code
            res.writeHead(200);
            // send back file contents + close response
            res.end(contents);
          }
        );
  }
}

// create an http server instance
const server = http.createServer(requestListener);

// call the listen() method to start listening to http requests
// 1: port, 2: ip, 3: function to run when the server starts
server.listen(
  8080,
  "0.0.0.0",
  function() {
    console.log("Server is running");
  }
);

// perform file reading for any file and mime 
// then return using response object res
function loadReturn(fname, ctype, res) {
  // load file from server filesystem
  fs.readFile(__dirname + "/" + fname)
    .then(contents => {
        // set http response header entry text/html
        res.setHeader("Content-Type", ctype + '; charset=UTF-8');
        // return 200 OK http status code
        res.writeHead(200);
        // send back file contents + close response
        res.end(contents);
      }
    );
}