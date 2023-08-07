const pxToRem = (number: number, baseNumber: number = 16): string =>
    `${number / baseNumber}rem`;

export default pxToRem;
