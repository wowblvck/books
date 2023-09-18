export default {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '0',
        'mantine-breakpoint-sm': '36em',
        'mantine-breakpoint-md': '48em',
        'mantine-breakpoint-lg': '62em',
        'mantine-breakpoint-xl': '75em',
      },
    },
  },
};
