import React from "react";
import Gallery from "../components/gallery";
import Layout from "../components/layout";
import getGalleryImages from "../lib/gallery-helper";

export async function getStaticProps() {
  const galleryImages = getGalleryImages();
  return {
    props: {
      galleryImages,
    },
  };
}

export default function Work({ galleryImages }: { galleryImages: string[] }) {
  return (
    <Layout title={"Work"}>
      Its hotdog time
      <Gallery galleryImages={galleryImages}></Gallery>
    </Layout>
  );
}
