import express from "express";
import * as cheerio from "cheerio";
import type { Router, Request, Response } from "express";
import path from "path";
import fs from "fs/promises";

import { generateSVG } from "../utils";

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
    "hop": "apachehop",
    "jmeter": "apachejmeter",
    "maven": "apachemaven",
    "arc": "arcbrowser",
    "arch": "archlinux",
    "beef": "beeflang",
    "capacitor": "capacitorjs",
    "d3": "d3js",
    "drf": "djangorestframework",
    "es": "elasticsearch",
    "elysia": "elysiajs",
    "express": "expressjs",
    "fb": "facebook",
    "fsd": "featuresliceddesign",
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
    "react": "reactjs",
    "regle": "reglejs",
    "sclearn": "scikitlearn",
    "sdl": "simpledirectmedialayer",
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
    const { i, perline, radius = "25" } = req.query;
    const iconsDir = path.join(__dirname, "../../icons");
    const minRadius = 25
    const maxRadius = 125
    if (i && typeof i === "string") {
        const iconsList = i.split(",");
        const fullIconsList = iconsList.map(icon => shortNames[icon.trim()] || icon.trim());
        const icons: string[] = [];
        for (const icon of fullIconsList) {
            const iconPath = path.join(iconsDir, `${icon.trim()}.svg`);
            try {
                let content = await fs.readFile(iconPath, "utf-8");
                let radiusValue = Number(radius);
                if (isNaN(radiusValue) || radiusValue < minRadius) {
                    radiusValue = minRadius
                } else if (radiusValue > maxRadius) {
                    radiusValue = maxRadius
                }
                content = content.replace(/<rect([^>]*)rx="(\d+)"/, (match, before) => {
                    return `<rect${before}rx="${radiusValue}"`
                });
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
        try {
            const files = await fs.readdir(iconsDir);
            const icons = files
                .filter(file => file.endsWith(".svg"))
                .map(file => path.basename(file, ".svg"));

            return res.status(200).json({
                status: res.statusCode,
                icons
            });
        } catch (error) {
            res.status(500).json({
                status: res.statusCode,
                message: "Internal Server Error!"
            });
        }
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
                } catch (error) {
                    res.status(500).json({
                        status: res.statusCode,
                        message: "Internal Server Error!"
                    });
                }
            }
        }

        return res.status(200).json(icons);
    } catch (error) {
        return res.status(500).json({
            status: res.statusCode,
            message: "Internal Server Error!"
        });
    }
});

export default router;