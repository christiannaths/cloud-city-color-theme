export const mapTokensByKey = (tokenMap, colors) =>
  Object.keys(tokenMap).map((colorName) => {
    const color = colors[colorName];
    const tokens = tokenMap[colorName];

    return {
      name: colorName,
      scope: tokens,
      settings: { foreground: color }
    };
  });
