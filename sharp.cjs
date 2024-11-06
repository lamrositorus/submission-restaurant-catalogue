/* eslint-disable no-undef *//* eslint-disable linebreak-style */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceImagesDir = path.resolve(__dirname, 'src/public/images');
const webpImagesDir = path.resolve(__dirname, 'dist/images');
const destinationDir = path.resolve(__dirname, 'dist/images/processed');

// Pastikan folder tujuan ada
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

// Fungsi untuk memproses gambar
const processImages = (dir, prefix) => {
  fs.readdirSync(dir)
    .forEach((image) => {
      const extname = path.extname(image).toLowerCase();
      const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.tiff'];

      // Memastikan hanya memproses file dengan ekstensi yang valid
      if (validExtensions.includes(extname)) {
        // Mengubah ukuran gambar dengan lebar 800px
        sharp(`${dir}/${image}`)
          .resize(800)
          .toFile(path.resolve(
            __dirname,
            `${destinationDir}/${image.split('.').slice(0, -1).join('.')}-${prefix}-large${extname}`),
          );

        // Mengubah ukuran gambar dengan lebar 480px
        sharp(`${dir}/${image}`)
          .resize(480)
          .toFile(path.resolve(
            __dirname,
            `${destinationDir}/${image.split('.').slice(0, -1).join('.')}-${prefix}-small${extname}`),
          );
      } else {
        console.warn(`Skipping unsupported file: ${image}`);
      }
    });
};

// Mengonversi gambar dari src/public/images
processImages(sourceImagesDir, 'jpg');

// Mengonversi gambar dari dist/images (WebP)
processImages(webpImagesDir, 'webp');