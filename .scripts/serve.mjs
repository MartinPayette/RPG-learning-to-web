import path from "path";
import express from "express";

const APP_PORT = 8000;

/**
 * @param {string} directory
 */
function serve(directory) {
    const app = express();
    app.use(express.static(directory));
    app.listen(APP_PORT, () => {
        console.log(`App started at http://localhost:${APP_PORT}/`)
        console.log(`Serving files from "${directory}"`)
    })
}

function main() {
    const dir = process.argv[2];
    const pathToServe = path.resolve(process.cwd(), dir);
    serve(pathToServe);
}

main();