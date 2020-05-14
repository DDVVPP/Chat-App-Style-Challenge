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
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  borderWidths: [0.5, 1, 1.5, 6],
  borderStyles: {
    solid: 'solid',
  },
  radii: [1, 2, 3, 4, 16, 50],

  // I wasn't quite sure how to implement this appropriately
  // I attempted to at FriendListPanel.js
  m: [0, 1, 2],
  breakpoints: ['500px', '1400px', '2000px'],
  mediaQueries: {
    small: `@media screen and (min-width: 500px`,
    medium: `@media screen and (min-width: 1400px)`,
    large: `@media screen and (min-width: 2000px)`,
  },
};

export default theme;
