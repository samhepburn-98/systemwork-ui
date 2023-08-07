// chroma-js is a library for all kinds of color conversions and color scales.
import chroma from "chroma-js";

const hexToRgb = (color: string): string =>
    chroma(color).rgb().join(", ");


export default hexToRgb;
