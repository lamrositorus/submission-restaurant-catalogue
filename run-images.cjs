/* eslint-disable linebreak-style */
const { exec } = require('child_process');

// Jalankan list.cjs terlebih dahulu
exec('node list.cjs', (error, stdout, stderr) => {
  if (error) {
    console.error(`Gagal menjalankan list.cjs: ${error.message}`);
    return;
  }
  console.log(stdout);
  console.error(stderr);

  // Jika berhasil, lanjutkan dengan sharp.cjs
  exec('node sharp.cjs', (error, stdout, stderr) => {
    if (error) {
      console.error(`Gagal menjalankan sharp.cjs: ${error.message}`);
      return;
    }
    console.log(stdout);
    console.error(stderr);
  });
});
