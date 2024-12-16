export const genSVG = (icons: string[]) => {
    const limit = 15
    const length = Math.min(limit * 300, icons.length * 300) - 44
    const height = Math.ceil(icons.length / limit) * 300 - 44
    const scaled_height = height * (48 / (300 - 44));
    const scaled_width = length * (48 / (300 - 44));
    return `<svg width="${scaled_width}" height="${scaled_height}" viewBox="0 0 ${length} ${height}" 
        fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
        ${icons.map((icon, index) => `
            <g transform="translate(${(index % limit) * 300}, ${Math.floor(index / limit) * 300})">
                ${icon}
            </g>`).join(" ")}
        </svg>`
}