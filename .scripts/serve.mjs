import path from "path";
import express from "express";
import * as fs from "fs";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";

const APP_PORT = 8000;

/**
 * @param {string} directory
 */
function serve(directory) {
    const app = express();

    const liveReloadServer = livereload.createServer();
    liveReloadServer.watch(directory);
    liveReloadServer.server.once("connection", () => {
        setTimeout(() => {
            liveReloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload())

    app.use(express.static(directory, { cacheControl: false }));

    return app.listen(APP_PORT, () => {
        console.log(`App started at http://localhost:${APP_PORT}/`)
        console.log(`Serving files from "${directory}"`)
    });
}

function main() {
    const dir = process.argv[2];
    const pathToServe = path.resolve(process.cwd(), dir);
    const watcher = fs.watch(
        pathToServe,
        {
            persistent: true,
            recursive: true,
        }
    );
    serve(pathToServe, watcher);
}

main();