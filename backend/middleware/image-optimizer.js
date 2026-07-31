const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = async (file) => {
  const optimizedFilename = file.filename.replace(/\.[^.]+$/, '.webp');

  await sharp(file.path)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join('images', optimizedFilename));
  fs.unlinkSync(file.path);

  return optimizedFilename;
};