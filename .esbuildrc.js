module.exports = {
  minify: true,
  target: 'node18',
  platform: 'node',
  bundle: true,
  external: ['@prisma/client', 'next', 'react', 'react-dom', 'sharp'],
  treeShaking: true,
  sourcemap: false,
  format: 'cjs',
  metafile: true,
  define: {
    'process.env.NODE_ENV': '"production"'
  }
} 