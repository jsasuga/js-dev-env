import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";
/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
    require("webpack-dev-middleware")(compiler, {
        publicPath: config.output.publicPath
    })
);

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "../src/index.html"));
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
