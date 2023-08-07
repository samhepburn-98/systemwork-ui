import hexToRgb from "./hexToRgb";

const rgba = (color: string, opacity: number): string =>
    `rgba(${hexToRgb(color)}, ${opacity})`;

export default rgba;
