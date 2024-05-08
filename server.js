import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const PORT = process.env.PORT;

//Get Current path

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);


const server = http.createServer(async (req, res) => {
    // res.setHeader('Content-Type', 'text/plain');
    // res.statusCode = 400;

    // console.log(req.url);
    // console.log(req.method);
try {
    if(req.method === 'GET') {

        let filePath;

        if(req.url === '/') {
            filePath = path.join(__dirname, 'public', 'index.html');
        } else if( req.url === '/about') {
            filePath = path.join(__dirname, 'public', 'about.html');
        } else {
            throw new Error('Not Found');
        }

        const data = await fs.readFile(filePath);
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();

        // if(req.url === '/') {
        //     res.writeHead(200,  {'Content-Type': 'text/html'});
        //     res.end("<h1>HomePage</h1>");
        // } else if (req.url === '/about') {
        //     res.writeHead(200, { 'Content-Type': 'text/html'});
        //     res.end('<h1>About</h1>');
        // } else {
        //     res.writeHead(404, { 'Content-Type': 'text/html'});
        //     res.end('<h1>Not Found</h1>');
        // }

    } else {
        throw new Error('Method not allowed');
    }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain'});
        res.end('Server Error');
    }
   
  
   // res.end(JSON.stringify({ message: 'Server Error'}));
});

server.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
});

