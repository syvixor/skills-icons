import express from "express";
import type { Router, Request, Response } from "express";
import path from "path";
import fs from "fs/promises";

import { generateSVG } from "../utils";

const router: Router = express.Router();

const shortNames: Record<string, string> = {
    "adonis": "adonisjs",
    "ae": "aftereffects",
    "aws": "amazonwebservices",
    "angular": "angularjs",
    "arc": "arcbrowser",
    "arch": "archlinux",
    "capacitor": "capacitorjs",
    "drf": "djangorestframework",
    "dw": "dreamweaver",
    "es": "elasticsearch",
    "elysia": "elysiajs",
    "express": "expressjs",
    "fb": "facebook",
    "gh": "github",
    "ghactions": "githubactions",
    "ghcopilot": "githubcopilot",
    "go": "golang",
    "gcloud": "googlecloud",
    "gcp": "googlecloud",
    "drive": "googledrive",
    "gemini": "googlegemini",
    "idx": "googleidx",
    "ig": "instagram",
    "intellij": "intellijidea",
    "js": "javascript",
    "kali": "kalilinux",
    "lottie": "lottiefiles",
    "manifold": "manifoldjs",
    "mui": "materialui",
    "md": "markdown",
    "mongo": "mongodb",
    "node": "nodejs",
    "notepadpp": "notepadplusplus",
    "nuxt": "nuxtjs",
    "ood": "openondemand",
    "otel": "opentelemetry",
    "pb": "pocketbase",
    "ps": "photoshop",
    "react": "reactjs",
    "sclearn": "scikitlearn",
    "solid": "solidjs",
    "spring": "springboot",
    "so": "stackoverflow",
    "truenas": "truenascore",
    "tailwind": "tailwindcss",
    "ts": "typescript",
    "vscode": "visualstudiocode",
    "vue": "vuejs",
    "ws": "websocket",
    "wasdk": "windowsappsdk",
    "wp": "wordpress",
    "yt": "youtube"
}

const shortNamesReverse: Record<string, string[]> = {};
Object.entries(shortNames).forEach(([short, full]) => {
    if (!shortNamesReverse[full]) {
        shortNamesReverse[full] = [];
    }
    shortNamesReverse[full].push(short);
});

router.get("/icons", async (req: Request, res: Response) => {
    const { i, perline } = req.query;
    if (i && typeof i === "string") {
        const iconsList = i.split(",");
        const fullIconsList = iconsList.map(icon => shortNames[icon.trim()] || icon.trim());
        const icons: string[] = [];
        const iconsDir = path.join(__dirname, "../../icons");
        for (const icon of fullIconsList) {
            const iconPath = path.join(iconsDir, `${icon.trim()}.svg`);
            try {
                const content = await fs.readFile(iconPath, "utf-8");
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
            let response;
            if (perline !== undefined) {
                const perlineNumber = Number(perline);
                if (!isNaN(perlineNumber) && perlineNumber > 0 && perlineNumber <= 15) {
                    response = generateSVG(icons, perlineNumber);
                } else {
                    response = generateSVG(icons);
                }
            } else {
                response = generateSVG(icons);
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

router.get("/readme", async (_req: Request, res: Response) => {
    const iconsDir = path.join(__dirname, "../../icons");
    try {
        const files = await fs.readdir(iconsDir);
        const svgs = files.filter(file => file.endsWith(".svg"));

        const totalIcons = svgs.length;
        const halfTotal = Math.ceil(totalIcons / 2);

        const firstHalf = svgs.slice(0, halfTotal);
        const secondHalf = svgs.slice(halfTotal);

        let table = "| ID | Icon | Alias | ID | Icon | Alias |\n";
        table += "|----|------|-------|----|------|-------|\n";

        for (let i = 0; i < halfTotal; i++) {
            const leftSide = firstHalf[i];
            const rightSide = secondHalf[i];

            const leftId = leftSide.replace(".svg", "");
            const leftAlias = shortNamesReverse[leftId] ?
                `\`${shortNamesReverse[leftId].join(", ")}\`` : "-";
            let row = `| \`${leftId}\` | <img src="./icons/${leftId}.svg" width="48" /> | ${leftAlias}`;

            if (rightSide) {
                const rightId = rightSide.replace(".svg", "");
                const rightAlias = shortNamesReverse[rightId] ?
                    `\`${shortNamesReverse[rightId].join(", ")}\`` : "-";
                row += ` | \`${rightId}\` | <img src="./icons/${rightId}.svg" width="48" /> | ${rightAlias}`;
            } else {
                row += ` | | | `;
            }

            table += row + "|\n";
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

export default router;