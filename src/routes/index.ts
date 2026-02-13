import express from "express";
import * as cheerio from "cheerio";
import type { Router, Request, Response } from "express";
import path from "path";
import fs from "fs/promises";

import { generateSVG, sendError } from "../utils";

const router: Router = express.Router();

const shortNames: Record<string, string> = {
    "access": "microsoftaccess",
    "adonis": "adonisjs",
    "ae": "adobeaftereffects",
    "aftereffects": "adobeaftereffects",
    "angular": "angularjs",
    "arc": "arcbrowser",
    "arch": "archlinux",
    "audition": "adobeaudition",
    "aws": "amazonwebservices",
    "batchfile": "batch",
    "batchscript": "batch",
    "beam": "apachebeam",
    "beef": "beeflang",
    "beekeeper": "beekeeperstudio",
    "bigquery": "googlebigquery",
    "budgiedesktop": "buddiesofbudgie",
    "caddy": "caddyserver",
    "capacitor": "capacitorjs",
    "chrome": "googlechrome",
    "clipchamp": "microsoftclipchamp",
    "cloudcomposer": "googlecloudcomposer",
    "cloudfirestore": "firebasecloudfirestore",
    "cloudstorage": "googlecloudstorage",
    "cudacpp": "cudacplusplus",
    "copilot": "microsoftcopilot",
    "computeengine": "googlecomputeengine",
    "d3": "d3js",
    "dataflow": "googledataflow",
    "dataproc": "googledataproc",
    "davinci": "davinciresolve",
    "dreamweaver": "adobedreamweaver",
    "drive": "googledrive",
    "drf": "djangorestframework",
    "dvc": "dataversioncontrol",
    "elysia": "elysiajs",
    "es": "elasticsearch",
    "excel": "microsoftexcel",
    "express": "expressjs",
    "fb": "facebook",
    "fasm": "flatassembler",
    "featuresliceddesign": "featuresliceddesign",
    "firebaseai": "firebaseailogic",
    "firebasecloud": "firebasecloudfirestore",
    "fsd": "featuresliceddesign",
    "gadsense": "googleadsense",
    "gcloud": "googlecloud",
    "gcp": "googlecloud",
    "gemini": "googlegemini",
    "gh": "github",
    "ghactions": "githubactions",
    "ghcopilot": "githubcopilot",
    "ghpages": "githubpages",
    "go": "golang",
    "grunt": "gruntjs",
    "hadoop": "apachehadoop",
    "hive": "apachehive",
    "hop": "apachehop",
    "htb": "hackthebox",
    "idx": "googleidx",
    "ig": "instagram",
    "illustrator": "adobeillustrator",
    "indesign": "adobeindesign",
    "intellij": "intellijidea",
    "jmeter": "apachejmeter",
    "js": "javascript",
    "jsr": "javascriptregistry",
    "kali": "kalilinux",
    "lightroom": "adobelightroom",
    "looker": "lookerstudio",
    "lottie": "lottiefiles",
    "manifold": "manifoldjs",
    "maven": "apachemaven",
    "md": "markdown",
    "mcp": "modelcontextprotocol",
    "mongo": "mongodb",
    "mui": "materialui",
    "myshell": "myshellai",
    "nextauth": "authjs",
    "node": "nodejs",
    "notepadpp": "notepadplusplus",
    "nuxt": "nuxtjs",
    "oci": "oraclecloudinfrastructure",
    "office": "microsoftoffice",
    "onenote": "microsoftonenote",
    "ood": "openondemand",
    "otel": "opentelemetry",
    "oxfmt": "oxc",
    "oxlint": "oxc",
    "pb": "pocketbase",
    "photoshop": "adobephotoshop",
    "powerautomate": "microsoftpowerautomate",
    "powerpoint": "microsoftpowerpoint",
    "premierepro": "adobepremierepro",
    "project": "microsoftproject",
    "ps": "adobephotoshop",
    "pyspark": "apachespark",
    "react": "reactjs",
    "regle": "reglejs",
    "ros": "robotoperatingsystem",
    "s3": "amazons3",
    "sclearn": "scikitlearn",
    "sdl": "simpledirectmedialayer",
    "sheets": "googlesheets",
    "so": "stackoverflow",
    "solid": "solidjs",
    "spark": "apachespark",
    "tailwind": "tailwindcss",
    "teams": "microsoftteams",
    "truenas": "truenascore",
    "ts": "typescript",
    "tseslint": "typescripteslint",
    "upstage": "upstageai",
    "uv": "astraluv",
    "visio": "microsoftvisio",
    "vue": "vuejs",
    "vscode": "visualstudiocode",
    "vscodeinsiders": "visualstudiocodeinsiders",
    "wasdk": "windowsappsdk",
    "word": "microsoftword",
    "workspace": "googleworkspace",
    "wp": "wordpress",
    "ws": "websocket",
    "xd": "adobexd",
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