/* eslint-disable no-undef *//* eslint-disable linebreak-style */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const axios = require('axios');

const outputDir = path.join(__dirname, 'src/public/images');
const restaurantListUrl = 'https://restaurant-api.dicoding.dev/list';
const imageUrl = 'https://restaurant-api.dicoding.dev/images/medium/';

// Pastikan output directory ada
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function untuk download dan optimasi gambar
async function optimizeImage(pictureId) {
  try {
    const response = await axios.get(`${imageUrl}${pictureId}`, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');

    await sharp(buffer)
      .resize(800) // Sesuaikan ukuran jika perlu
      .jpeg({ quality: 80 })
      .toFile(path.join(outputDir, `${pictureId}.jpg`));

    console.log(`Gambar ${pictureId} berhasil dioptimasi.`);
  } catch (error) {
    console.error(`Gagal mengoptimasi gambar ${pictureId}:`, error.message);
  }
}

// Ambil daftar restoran dan optimasi gambar
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

// Jalankan fungsi utama
fetchAndOptimizeImages();
