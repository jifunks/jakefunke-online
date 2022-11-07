import React from "react";
import GalleryItem from "./gallery-item";
import style from "./Gallery.module.css";
import Image from "next/image";

export default function Gallery({}) {
  const [openImage, setOpenImage] = React.useState(null);

  const galleryItems = ["1", "2", "3", "4", "5", "6"];

  function setImage(image: any) {
    console.log(`clicked image ${image}`);
    setOpenImage(image);
    return;
  }

  return (
    <>
      <div className={style.gallery}>
        {galleryItems.map((imagePath, i) => (
          <GalleryItem
            imageUrl={imagePath}
            key={i}
            onClick={() => setImage(i)}
          />
        ))}
      </div>
      {openImage !== null && (
        <div className={style["hero-image"]}>
          <Image
            src={
              "https://images.unsplash.com/photo-1619538189873-3f511db5fec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            }
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
