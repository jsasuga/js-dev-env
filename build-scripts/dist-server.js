import express from "express";
import path from "path";
import open from "open";
import compression from 'compression';
/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Bob", email: "bob@gmail.com" },
        { id: 2, name: "John", email: "john@gmail.com" },
        { id: 3, name: "Diana", email: "diana@gmail.com" }
    ]);
});

app.listen(port, err => {
    if (err) {
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
});
