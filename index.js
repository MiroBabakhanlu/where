const exp = require("constants");
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json({ limit: '2mb' }));


const ip = require("ip");

app.use((req, res, next) => {
     console.log(ip.address()); next();
})
app.get("/users", (req, res) => {
     res.send('hello')
});

app.listen(process.env.PORT || 3000, () => console.log("u are in 3000"));


app.post('/api', function (request, response) {
     console.log(request.body);
});