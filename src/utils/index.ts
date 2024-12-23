export const genSVG = (icons: string[]) => {
    const limit = 15;
    const length = Math.min(limit * 300, icons.length * 300) - 44;
    const height = Math.ceil(icons.length / limit) * 300 - 44;
    const scaled_height = height * (48 / (300 - 44));
    const scaled_width = length * (48 / (300 - 44));

    const processSVG = (svg: string, index: number) => {
        const gradient_matches = svg.match(/<(?:linear|radial)Gradient.*?<\/(?:linear|radial)Gradient>/gs) || [];
        let modified = svg;
        const defs: string[] = [];

        gradient_matches.forEach(gradient => {
            const match = gradient.match(/id="([^"]+)"/);
            if (match) {
                const old_identifier = match[1];
                const new_identifier = `icon_${index}_${old_identifier}`;
                const new_gradient = gradient.replace(
                    `id="${old_identifier}"`,
                    `id="${new_identifier}"`
                );
                modified = modified.replace(
                    new RegExp(`url\\(#${old_identifier}\\)`, "g"),
                    `url(#${new_identifier})`
                );
                defs.push(new_gradient);
                modified = modified.replace(gradient, "");
            }
        });

        return {
            defs: defs.join("\n"),
            content: modified
        }
    }

    const processed_icons = icons.map((icon, index) => processSVG(icon, index));

    return `<svg width="${scaled_width}" height="${scaled_height}" viewBox="0 0 ${length} ${height}" 
        fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        <defs>
            ${processed_icons.map(icon => icon.defs).join('\n')}
        </defs>
        ${processed_icons.map((icon, index) => `
            <g transform="translate(${(index % limit) * 300}, ${Math.floor(index / limit) * 300})">
                ${icon.content}
            </g>`).join("\n")}
    </svg>`
}