export const getDropoffColor = (rawPerc, min, max) => {
    const base = (max - min);
    const perc = base === 0 ? 100 : (rawPerc - min) / base * 100;
    const r = 255 * Math.log2(max + perc) - 16.9435 * max;
    const g = -255 * Math.log2(max + perc) + 19.4919 * max;
    const b = 60;
    const h = Math.round(r) * 0x10000 + Math.round(g) * 0x100 + b * 0x1;
    return `#${(`000000${h.toString(16)}`).slice(-6)}`;
};

export default { getDropoffColor };
