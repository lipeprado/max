import zlib from 'zlib';
import fs from 'fs';

fs.readdir('dist', (e, files) => {
  if (e) {
    return console.error(e); // eslint-disable-line no-console
  }
  files.forEach(compressFile);
});

function compressFile(filename) {
  const compress = zlib.createGzip();
  const input = fs.createReadStream(`dist/${filename}`);
  const output = fs.createWriteStream(`dist_gzip/${filename}`);

  input.pipe(compress).pipe(output);
}
