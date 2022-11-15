import Image from "next/image";
import React from "react";
import GalleryItem from "./gallery-item";
import style from "./Gallery.module.css";

export interface ImageData {
  path: string;
  toggledIndex: string;
}
export default function Gallery({ galleryImages }: { galleryImages: any }) {
  const [imageState, setOpenImage] = React.useState<ImageData | null>(null);

  function setImage(path: string, toggledIndex: string) {
    if (imageState?.toggledIndex == toggledIndex) {
      setOpenImage(null);
      return;
    }
    setOpenImage({ path, toggledIndex });
    return;
  }
  return (
    <>
      <div className={style.gallery}>
        {galleryImages.map((path: string, i: string) => (
          <GalleryItem
            imageUrl={path}
            key={i}
            onClick={() => setImage(path, i)}
            toggled={imageState?.toggledIndex == i}
          />
        ))}
      </div>
      {imageState !== null && (
        <div className={style["hero-image"]}>
          <Image
            src={imageState.path}
            alt={""}
            width={500}
            height={500}
            onClick={() => {
              setOpenImage(null);
            }}
          ></Image>
        </div>
      )}
    </>
  );
}
