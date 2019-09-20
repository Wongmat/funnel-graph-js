export const getDropoffColor = (rawPerc, min, max) => {
    const base = (max - min);
    const perc = base === 0 ? 100 : (rawPerc - min) / base * 100;
    // const r = perc < 20 ? Math.round(12.5 * perc) : 255;
    // const g = perc < 20 ? 255 : Math.round(510 - 12.5 * perc);
    const r = 255 * Math.log2(max + perc) - 16.9435 * max;
    const g = -255 * Math.log2(max + perc) + 19.4919 * max;
    const b = 60;
    const h = Math.round(r) * 0x10000 + Math.round(g) * 0x100 + b * 0x1;
    console.log(perc, Math.round(r), Math.round(g), b);
    return `#${(`000000${h.toString(16)}`).slice(-6)}`;
};

export default { getDropoffColor };
