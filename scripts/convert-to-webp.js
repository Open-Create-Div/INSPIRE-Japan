const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images');

const imagesToConvert = [
  'first-desk.png',
  'first-sp.png',
  'logo.png'
];

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`Successfully converted ${path.basename(inputPath)} to WebP`);
  } catch (error) {
    console.error(`Error converting ${path.basename(inputPath)}:`, error);
  }
}

async function main() {
  for (const image of imagesToConvert) {
    const inputPath = path.join(inputDir, image);
    const outputPath = path.join(outputDir, image.replace('.png', '.webp'));
    
    if (fs.existsSync(inputPath)) {
      await convertToWebP(inputPath, outputPath);
    } else {
      console.error(`File not found: ${inputPath}`);
    }
  }
}

main(); 