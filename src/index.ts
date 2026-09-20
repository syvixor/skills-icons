import express from "express";
import type { Express, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import { sendError } from "./utils";

import router from "./routes";

const api: Express = express();

api.use(express.json());
api.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "blob:", "*"],
            connectSrc: ["'self'", "*"]
        }
    }
}));
api.use(cors({
    origin: "*",
    methods: ["GET", "HEAD"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200
}));
api.use(morgan("tiny"));

api.get("/", (_req: Request, res: Response) => {
    res.redirect("https://builder.syvixor.com");
});

api.get("/builder", (_req: Request, res: Response) => {
    res.redirect("https://builder.syvixor.com");
});

api.use((_req: Request, res: Response, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Cross-Origin-Resource-Policy", "cross-origin");
    res.header("Cross-Origin-Embedder-Policy", "require-corp");
    if (_req.path.endsWith(".svg")) {
        res.header("Content-Type", "image/svg+xml");
        res.header("Content-Security-Policy", "default-src 'self' data: 'unsafe-inline'");
    }
    next();
});

api.use("/api", router);

api.use((_req: Request, res: Response) => {
    sendError(res, 404, "Not Found", "The requested resource could not be found.");
});

api.listen(3000, () => console.log("→ Listening..."));

export default api;