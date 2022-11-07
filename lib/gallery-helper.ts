import fs from "fs";
import path from "path";

const galleryDirectory = path.join(process.cwd(), "public/gallery");

export default function getGalleryImages(): string[] {
  const fileNames = fs.readdirSync(galleryDirectory);
  return fileNames
    .filter((file) => {
      return path.extname(file).toLowerCase() === ".jpg";
    })
    .map((filename) => {
      // TODO: make this use real path
      return `/gallery/${filename}`;
    });
}
