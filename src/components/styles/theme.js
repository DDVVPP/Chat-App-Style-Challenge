const theme = {
  fontFamily: { Lato: 'Lato', SansSerif: 'sans-serif' },
  fontWeights: [100, 200, 300, 400, 600, 700],
  fontSizes: [12, 14, 16, 18, 20, 22, 28, 32],
  colors: {
    transparent: 'transparent',
    backgroundGrey: '#f1f1f1',
    lightGrey: '#eeeeee',
    offLineGrey: '#d6d6d6',
    black: '#000e1a',
    white: '#fff',
    searchbarGrey1: '#e9e9e9',
    searchbarGrey2: '#f3f3f3',
    tomato: '#f34848',
    deepBlue: '#292f4c',
  },
  textAlignment: {
    center: 'center',
    left: 'left',
    right: 'right',
  },
  space: [-4, -2, 0, 2, 4, 6, 7, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 40, 50],
  borderWidths: [0.5, 1, 1.5, 6],
  borderStyles: {
    solid: 'solid',
  },
  radii: [1, 2, 3, 4, 16, 50],
  // breakpoints: ['40em', '52em', '64em'],

  // wasn't quite sure how to implement this appropriately
  mediaQueries: {
    small: `@media screen and (min-width: 500px`,
    medium: `@media screen and (min-width: 1400px)`,
    large: `@media screen and (min-width: 2000px)`,
  },
};

export default theme;
