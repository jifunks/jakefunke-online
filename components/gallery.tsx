import GalleryItem from "./gallery-item";
import style from "./Gallery.module.css";

export default function Gallery({}) {
  return (
    <div className={style.gallery}>
      <GalleryItem></GalleryItem>
      <GalleryItem></GalleryItem>
      <GalleryItem></GalleryItem>
      <GalleryItem></GalleryItem>
      <GalleryItem></GalleryItem>
      <GalleryItem></GalleryItem>
      <GalleryItem></GalleryItem>
      <GalleryItem></GalleryItem>
    </div>
  );
}
