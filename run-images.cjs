/* eslint-disable no-undef *//* eslint-disable linebreak-style */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const sourceImagesDir = path.resolve(__dirname, 'src/public/images');
const webpImagesDir = path.resolve(__dirname, 'dist/images');
const destinationDir = path.resolve(__dirname, 'dist/images/processed');
const restaurantListUrl = 'https://restaurant-api.dicoding.dev/list';
const imageUrl = 'https://restaurant-api.dicoding.dev/images/medium/';

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

// Fungsi untuk mengunduh dan mengoptimasi gambar dari API
async function optimizeImage(pictureId) {
  try {
    const response = await axios.get(`${imageUrl}${pictureId}`, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');

    await sharp(buffer)
      .resize(800) // Sesuaikan ukuran jika perlu
      .jpeg({ quality: 80 })
      .toFile(path.join(sourceImagesDir, `${pictureId}.jpg`));

    console.log(`Gambar ${pictureId} berhasil dioptimasi.`);
  } catch (error) {
    console.error(`Gagal mengoptimasi gambar ${pictureId}:`, error.message);
  }
}

// Fungsi utama untuk mengambil daftar restoran dan mengoptimasi gambarnya
async function fetchAndOptimizeImages() {
  try {
    const response = await axios.get(restaurantListUrl);
    const restaurants = response.data.restaurants;

    // Loop melalui setiap restoran dan optimasi gambar
    for (const restaurant of restaurants) {
      await optimizeImage(restaurant.pictureId);
    }
  } catch (error) {
    console.error('Gagal mengambil daftar restoran:', error.message);
  }
}

// Jalankan proses untuk gambar lokal
processLocalImages(sourceImagesDir, 'jpg');
processLocalImages(webpImagesDir, 'webp');

// Jalankan proses untuk gambar dari API
fetchAndOptimizeImages();
