import { expect } from "chai";
import { jsdom } from "jsdom";
import { fs } from "fs";

describe("First test", () => {
    it("should pass", () => {
        expect(true).to.eq(false);
    });
});

// describe("index.html", () => {
//     it("it should say hello", (done) => {
//         const index = fs.readFileSync("./src/index.html", "utf-8"); // TODO: check readFileSync
//         jsdom.env(index, (error, window) => {
//             const h1 = window.document.getElementByTagName("h1")[0];

//             expect(h1.innerHTML).to.eq("Hello World!");
//             done();
//             window.close();
//         });
//     });
// });
