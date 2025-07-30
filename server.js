const http = require('http');

function generateData(base, spike) {
    const data = [];
    for (let i = 0; i < 4; i++) {
        data.push(Math.floor(base + Math.random() * 10));
    }
    data.push(Math.floor(base + spike));
    return data;
}

const server = http.createServer((req, res) => {
    if (req.url === '/api/data') {
        res.writeHead(200, { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        });
        res.end(JSON.stringify({
            dailyActiveUsers: generateData(20, 280),
            sevenDayActiveUsers: generateData(150, 200),
            twentyEightDayActiveUsers: generateData(500, 400),
            responseCount: generateData(1000, 1500)
        }));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
