import style from "./Gallery.module.css";
import Image from "next/image";

export default function GalleryItem({ imageUrl }: { imageUrl?: string }) {
  function onClick() {
    console.log("hot dog time");
  }
  return (
    <div onClick={onClick} className={style["gallery-item"]}>
      <Image
        src={
          imageUrl ??
          "https://images.unsplash.com/photo-1619538189873-3f511db5fec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
        }
        alt={""}
        width={500}
        height={500}
      ></Image>
    </div>
  );
}
