import { mkdir, readdir } from "fs/promises";
import path from "path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");
const imagesDir = path.join(publicDir, "images");

async function optimizePhotos() {
  const files = (await readdir(imagesDir)).filter((file) => file.endsWith(".jpg"));

  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace(/\.jpg$/, ".webp"));

    await sharp(inputPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);
  }
}

async function optimizeLogo() {
  const inputPath = path.join(publicDir, "ustawilogo.png");

  await sharp(inputPath)
    .resize({ width: 208, height: 208, fit: "inside" })
    .webp({ quality: 85 })
    .toFile(path.join(publicDir, "ustawilogo.webp"));

  await sharp(inputPath)
    .resize({ width: 208, height: 208, fit: "inside" })
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, "ustawilogo-nav.png"));
}

async function generateIcons() {
  const inputPath = path.join(publicDir, "ustawilogo.png");

  await sharp(inputPath)
    .resize(48, 48, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, "icon.png"));

  await sharp(inputPath)
    .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, "apple-icon.png"));

  await mkdir(path.join(publicDir), { recursive: true });

  for (const size of [192, 512]) {
    await sharp(inputPath)
      .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(publicDir, `icon-${size}.png`));
  }
}

await optimizePhotos();
await optimizeLogo();
await generateIcons();

console.log("Images optimized.");
