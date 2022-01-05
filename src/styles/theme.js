import mixins from './mixins';

const theme = {
  bp: {
    mobileS: `(min-width: 280px)`,
    mobileM: `(min-width: 320px)`,
    mobileL: `(min-width: 425px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
    laptopL: `(min-width: 1440px)`,
    laptopXL: `(min-width: 2560px)`,
  },
  mixins,
};

export default theme;
