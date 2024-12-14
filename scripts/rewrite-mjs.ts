import { globSync, readFileSync, renameSync, writeFileSync } from 'node:fs';

globSync('./dist/esm/**/*.js').forEach((file) => {
  const newFile = file.replace(/\.js$/, '.mjs');
  renameSync(file, newFile);

  // Replace import statements in the file
  let content = readFileSync(newFile, 'utf-8');
  content = content.replace(/import (.*) from ['"](.*)\.js['"];/g, "import $1 from '$2.mjs';");

  // Replace side effect import statements in the file
  content = content.replace(/import ['"](.*)\.js['"];/g, "import '$1.mjs';");

  // Replace export statements in the file
  content = content.replace(/export (.*) from ['"](.*)\.js['"];/g, "export $1 from '$2.mjs';");

  writeFileSync(newFile, content);
});

globSync('./dist/esm/**/*.ts').forEach((file) => {
  const newFile = file.replace(/\.ts$/, '.mts');
  renameSync(file, newFile);

  // Replace import statements in the file
  let content = readFileSync(newFile, 'utf-8');
  content = content.replace(/import (.*) from ['"](.*)\.ts['"];/g, "import $1 from '$2.mts';");

  // Replace side effect import statements in the file
  content = content.replace(/import ['"](.*)\.ts['"];/g, "import '$1.mts';");

  // Replace export statements in the file
  content = content.replace(/export (.*) from ['"](.*)\.ts['"];/g, "export $1 from '$2.mts';");

  writeFileSync(newFile, content);
});
