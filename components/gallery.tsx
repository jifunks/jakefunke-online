import Image from "next/image";
import React from "react";
import GalleryItem from "./gallery-item";
import style from "./Gallery.module.css";

export default function Gallery({ galleryImages }: { galleryImages: any }) {
  const [openImage, setOpenImage] = React.useState(null);

  function setImage(image: any) {
    setOpenImage(image);
    return;
  }
  return (
    <>
      <div className={style.gallery}>
        {galleryImages.map((imagePath: string, i: string) => (
          <GalleryItem
            imageUrl={imagePath}
            key={i}
            onClick={() => setImage(imagePath)}
          />
        ))}
      </div>
      {openImage !== null && (
        <div className={style["hero-image"]}>
          <Image
            src={openImage}
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
