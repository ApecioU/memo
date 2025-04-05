const http = require('http');
const { exec } = require('child_process');

const hostname = '185.170.114.167';
const port = 3000;

const requestListener = function (req, res) {
  if (req.method === 'POST' && req.url === '/deploy') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      // Log the received payload (optional)
      console.log('Received webhook payload:', body);

      // Deploy changes after webhook is triggered
      exec('git pull origin main && npm install && npm run build && pm2 restart memoire-AP', (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
          return res.end(`Error: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        res.statusCode = 200;
        res.end('Deployment triggered');
      });
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
};

const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}`);
});
