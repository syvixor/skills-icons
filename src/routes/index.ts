import express from "express";
import type { Router, Request, Response } from "express";
import path from "path";
import fs from "fs/promises";

import { genSVG } from "../utils";

const router: Router = express.Router();

const short_names: Record<string, string> = {
    "adonis": "adonisjs",
    "aws": "amazonwebservices",
    "angular": "angularjs",
    "arch": "archlinux",
    "drf": "djangorestframework",
    "es": "elasticsearch",
    "elysia": "elysiajs",
    "express": "expressjs",
    "fb": "facebook",
    "go": "golang",
    "gcloud": "googlecloud",
    "ig": "instagram",
    "js": "javascript",
    "mongo": "mongodb",
    "node": "nodejs",
    "nuxt": "nuxtjs",
    "pb": "pocketbase",
    "passport": "passportjs",
    "react": "reactjs",
    "solid": "solidjs",
    "tailwind": "tailwindcss",
    "ts": "typescript",
    "vue": "vuejs",
    "wp": "wordpress"
}

const short_names_reverse: Record<string, string[]> = {};
Object.entries(short_names).forEach(([short, full]) => {
    if (!short_names_reverse[full]) {
        short_names_reverse[full] = [];
    }
    short_names_reverse[full].push(short);
});

router.get("/icons", async (_req: Request, res: Response) => {
    const { i, perline } = _req.query
    if (i && typeof i === "string") {
        const icons_list = i.split(",");
        const full_icons_list = icons_list.map(icon => short_names[icon.trim()] || icon.trim());
        const icons: string[] = [];
        const icons_dir = path.join(__dirname, "../../icons");
        for (const icon of full_icons_list) {
            const icon_path = path.join(icons_dir, `${icon.trim()}.svg`);
            try {
                const content = await fs.readFile(icon_path, "utf-8");
                icons.push(content);
            } catch (error) {
                console.error(`Icon isn't valid → ${icon}`);
            }
        }
        if (icons.length === 0) {
            return res.status(404).json({
                status: res.statusCode,
                message: "Not Found!",
                hint: "Hmm... There's no valid icon."
            });
        } else {
            let response
            if (perline !== undefined) {
                const perlineNumber = Number(perline);
                if (!isNaN(perlineNumber) && perlineNumber > 0 && perlineNumber <= 15) {
                    response = genSVG(icons, perlineNumber);
                } else {
                    response = genSVG(icons);
                }
            } else {
                response = genSVG(icons);
            }
            res.setHeader("Content-Type", "image/svg+xml");
            return res.status(200).send(response);
        }
    } else {
        res.status(400).json({
            status: res.statusCode,
            message: "Bad Request!",
            hint: "You did not specify any icon."
        });
    }
});

router.get("/icons/table", async (_req: Request, res: Response) => {
    const icons_dir = path.join(__dirname, "../../icons");
    try {
        const files = await fs.readdir(icons_dir);
        const svgs = files.filter(file => file.endsWith(".svg"));

        let table = "| Icon ID | Icon | Aliases |\n";
        table += "|---------|------|----------|\n";

        svgs.sort((a, b) => a.localeCompare(b));

        for (const file of svgs) {
            const id = file.replace(".svg", "");
            const aliases = short_names_reverse[id] ? short_names_reverse[id].join(", ") : "";
            const alias = aliases ? `\`${aliases}\`` : "-";
            table += `| \`${id}\` | <img src="./icons/${id}.svg" width="48" /> | ${alias} |\n`;
        }

        res.setHeader("Content-Type", "text/markdown");
        return res.status(200).send(table);
    } catch (error) {
        res.status(500).json({
            status: res.statusCode,
            message: "Internal Server Error!"
        });
    }
});

export default router