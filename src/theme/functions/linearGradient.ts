const linearGradient = (color: string, colorState: string, angle: number = 195): string =>
    `linear-gradient(${angle}deg, ${color}, ${colorState})`;

export default linearGradient;
