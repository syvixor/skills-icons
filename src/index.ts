import express from "express";
import type { Express, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import fs from "fs/promises";

import router from "./routes";

const api: Express = express();

api.use(express.json());
api.use(helmet());
api.use(cors());
api.use(morgan("tiny"));

api.get("/", async (_req: Request, res: Response) => {
    try {
        const iconsDir = path.join(__dirname, "../icons");
        const files = await fs.readdir(iconsDir);
        const svgs = files.filter(file => file.endsWith(".svg"));
        const totalIcons = svgs.length;

        res.status(200).json({
            status: res.statusCode,
            message: "Total Icons → " + totalIcons,
            github: "https://github.com/ixrzr/skills-icons"
        });
    } catch (error) {
        res.status(500).json({
            status: res.statusCode,
            message: "Internal Server Error!"
        });
    }
});

api.use("/api", router);

api.use((_req: Request, res: Response) => {
    res.status(404).json({
        status: res.statusCode,
        message: "Not Found!",
        hint: "Hmm... There's no such route."
    });
});

api.listen(3000, () => console.log("→ Listening..."));

export default api;