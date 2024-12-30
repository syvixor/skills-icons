export const generateSVG = (icons: string[], perLine: number = 15) => {
    const length = Math.min(perLine * 300, icons.length * 300) - 44;
    const height = Math.ceil(icons.length / perLine) * 300 - 44;
    const scaledHeight = height * (48 / (300 - 44));
    const scaledWidth = length * (48 / (300 - 44));

    const processSVG = (svg: string, index: number) => {
        const gradientMatches = svg.match(/<(?:linear|radial)Gradient.*?<\/(?:linear|radial)Gradient>/gs) || [];
        let modified = svg;
        const defs: string[] = [];

        gradientMatches.forEach(gradient => {
            const match = gradient.match(/id="([^"]+)"/);
            if (match) {
                const oldID = match[1];
                const newID = `icon_${index}_${oldID}`;
                const newGradient = gradient.replace(
                    `id="${oldID}"`,
                    `id="${newID}"`
                );
                modified = modified.replace(
                    new RegExp(`url\\(#${oldID}\\)`, "g"),
                    `url(#${newID})`
                );
                defs.push(newGradient);
                modified = modified.replace(gradient, "");
            }
        });

        return {
            defs: defs.join("\n"),
            content: modified
        }
    }

    const processedIcons = icons.map((icon, index) => processSVG(icon, index));

    return `<svg width="${scaledWidth}" height="${scaledHeight}" viewBox="0 0 ${length} ${height}" 
        fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        <defs>
            ${processedIcons.map(icon => icon.defs).join("\n")}
        </defs>
        ${processedIcons.map((icon, index) => `
            <g transform="translate(${(index % perLine) * 300}, ${Math.floor(index / perLine) * 300})">
                ${icon.content}
            </g>`).join("\n")}
    </svg>`
}