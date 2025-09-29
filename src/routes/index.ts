import express from "express";
import * as cheerio from "cheerio";
import type { Router, Request, Response } from "express";
import path from "path";
import fs from "fs/promises";

import { generateSVG, sendError } from "../utils";

const router: Router = express.Router();

const shortNames: Record<string, string> = {
    "aftereffects": "adobeaftereffects",
    "audition": "adobeaudition",
    "dreamweaver": "adobedreamweaver",
    "illustrator": "adobeillustrator",
    "indesign": "adobeindesign",
    "lightroom": "adobelightroom",
    "photoshop": "adobephotoshop",
    "ps": "adobephotoshop",
    "premierepro": "adobepremierepro",
    "xd": "adobexd",
    "adonis": "adonisjs",
    "ae": "adobeaftereffects",
    "aws": "amazonwebservices",
    "angular": "angularjs",
    "hadoop": "apachehadoop",
    "hive": "apachehive",
    "hop": "apachehop",
    "jmeter": "apachejmeter",
    "maven": "apachemaven",
    "arc": "arcbrowser",
    "arch": "archlinux",
    "uv": "astraluv",
    "batchfile": "batch",
    "batchscript": "batch",
    "beef": "beeflang",
    "caddy": "caddyserver",
    "capacitor": "capacitorjs",
    "cudacpp": "cudacplusplus",
    "d3": "d3js",
    "drf": "djangorestframework",
    "es": "elasticsearch",
    "elysia": "elysiajs",
    "express": "expressjs",
    "fb": "facebook",
    "fsd": "featuresliceddesign",
    "firebaseai": "firebaseailogic",
    "fasm": "flatassembler",
    "gh": "github",
    "ghactions": "githubactions",
    "ghcopilot": "githubcopilot",
    "ghpages": "githubpages",
    "go": "golang",
    "gadsense": "googleadsense",
    "chrome": "googlechrome",
    "gcloud": "googlecloud",
    "gcp": "googlecloud",
    "drive": "googledrive",
    "gemini": "googlegemini",
    "idx": "googleidx",
    "grunt": "gruntjs",
    "htb": "hackthebox",
    "ig": "instagram",
    "intellij": "intellijidea",
    "js": "javascript",
    "jsr": "javascriptregistry",
    "kali": "kalilinux",
    "looker": "lookerstudio",
    "lottie": "lottiefiles",
    "manifold": "manifoldjs",
    "mui": "materialui",
    "md": "markdown",
    "mongo": "mongodb",
    "myshell": "myshellai",
    "node": "nodejs",
    "notepadpp": "notepadplusplus",
    "nuxt": "nuxtjs",
    "ood": "openondemand",
    "otel": "opentelemetry",
    "oci": "oraclecloudinfrastructure",
    "pb": "pocketbase",
    "react": "reactjs",
    "regle": "reglejs",
    "sclearn": "scikitlearn",
    "sdl": "simpledirectmedialayer",
    "solid": "solidjs",
    "so": "stackoverflow",
    "truenas": "truenascore",
    "tailwind": "tailwindcss",
    "ts": "typescript",
    "upstage": "upstageai",
    "vscode": "visualstudiocode",
    "vscodeinsiders": "visualstudiocodeinsiders",
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
    const { i, perline, radius = "40" } = req.query;
    const iconsDir = path.join(__dirname, "../../icons");
    const minRadius = 25
    const maxRadius = 85
    if (i && typeof i === "string") {
        const iconsList = i.split(",");
        const fullIconsList = iconsList.map(icon => shortNames[icon.trim()] || icon.trim());
        const icons: string[] = [];
        for (const icon of fullIconsList) {
            const iconPath = path.join(iconsDir, `${icon.trim()}.svg`);
            try {
                let content = await fs.readFile(iconPath, "utf-8");
                let radiusValue = Math.min(Math.max(Number(radius) || minRadius, minRadius), maxRadius);
                content = content.replace(/<rect([^>]*)rx="(\d+)"/, (match, before) => {
                    return `<rect${before}rx="${radiusValue}"`
                });
                icons.push(content);
            } catch {
                continue;
            }
        }
        if (icons.length === 0) {
            sendError(res, 404, "Not Found", "The requested resource could not be found.");
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
            res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=3600");
            res.status(200).statusMessage = "OK";
            return res.send(response);
        }
    } else {
        sendError(res, 400, "Bad Request", "The request couldn't be understood or was missing required parameters.");
    }
});

router.get("/icons/all", async (req: Request, res: Response) => {
    const iconsDir = path.join(__dirname, "../../icons");
    const baseUrl = "https://raw.githubusercontent.com/syvixor/skills-icons/refs/heads/main/icons";

    try {
        const files = await fs.readdir(iconsDir);
        const icons: { id: string; name: string; url: string; }[] = [];

        for (const file of files) {
            if (file.endsWith(".svg")) {
                const id = path.basename(file, ".svg");
                const filePath = path.join(iconsDir, file);
                try {
                    const content = await fs.readFile(filePath, "utf-8");
                    const $ = cheerio.load(content, { xmlMode: true });
                    const title = $("svg").attr("title") || id

                    icons.push({
                        id,
                        name: title,
                        url: `${baseUrl}/${id}.svg`
                    });
                } catch {
                    sendError(res, 500, "Internal Server Error", "An unexpected error occurred on the server.");
                }
            }
        }

        res.status(200).statusMessage = "OK";
        res.json({
            statusCode: res.statusCode,
            statusMessage: res.statusMessage,
            data: icons
        });
    } catch {
        sendError(res, 500, "Internal Server Error", "An unexpected error occurred on the server.");
    }
});

export default router;