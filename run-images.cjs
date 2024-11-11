/* eslint-disable no-undef *//* eslint-disable linebreak-style */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const sourceImagesDir = path.resolve(__dirname, 'src/public/images');
const webpImagesDir = path.resolve(__dirname, 'dist/images');
const destinationDir = path.resolve(__dirname, 'dist/images/processed');


// Pastikan folder tujuan ada
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

// Fungsi untuk mengoptimasi gambar lokal
const processLocalImages = (dir, prefix) => {
  fs.readdirSync(dir).forEach((image) => {
    const extname = path.extname(image).toLowerCase();
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.tiff'];
    const imageNameWithoutExt = image.split('.').slice(0, -1).join('.');

    if (validExtensions.includes(extname)) {
      const largeImagePath = path.resolve(destinationDir, `${imageNameWithoutExt}-${prefix}-large${extname}`);
      const smallImagePath = path.resolve(destinationDir, `${imageNameWithoutExt}-${prefix}-small${extname}`);

      if (!fs.existsSync(largeImagePath)) {
        sharp(`${dir}/${image}`).resize(800).toFile(largeImagePath);
        console.log(`Gambar ${image} berhasil di proses ke ${prefix}-large.`);
      }
      if (!fs.existsSync(smallImagePath)) {
        sharp(`${dir}/${image}`).resize(480).toFile(smallImagePath);
        console.log(`Gambar ${image} berhasil di proses ke ${prefix}-small.`);
      }
    } else {
      console.warn(`Skipping unsupported file: ${image}`);
    }
  });
};



// Jalankan proses untuk gambar lokal
processLocalImages(sourceImagesDir, 'jpg');
processLocalImages(webpImagesDir, 'webp');


