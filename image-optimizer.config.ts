export const DEFAULT_OPTIONS = {
  ansiColors: true,
  avif: {
    // https://sharp.pixelplumbing.com/api-output#avif
    lossless: true,
  },
  cache: false,
  cacheLocation: undefined,
  exclude: undefined,
  // https://sharp.pixelplumbing.com/api-output#gif
  gif: {},
  include: undefined,
  includePublic: true,
  jpeg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 80,
  },
  jpg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 80,
  },
  logStats: true,
  // gif does not support lossless compression
  png: {
    // https://sharp.pixelplumbing.com/api-output#png
    quality: 80,
  },
  svg: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false, // https://github.com/svg/svgo/issues/1128
          },
        },
      },
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
        },
      },
    ],
  },
  test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
  tiff: {
    // https://sharp.pixelplumbing.com/api-output#tiff
    quality: 80,
  },
  webp: {
    // https://sharp.pixelplumbing.com/api-output#webp
    lossless: true,
  },
};
