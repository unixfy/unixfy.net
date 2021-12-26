module.exports = {
  globDirectory: 'public',
  globPatterns: ['**/*.{js,css,svg}', '__app.html'],
  swSrc: `public/sw.generated.js`,
  swDest: `dist/sw.generated.js`,
  maximumFileSizeToCacheInBytes: 10000000, // 10 MB,
}
