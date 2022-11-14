/* eslint-disable react/no-unescaped-entities */
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
      Various posters and album artwork I've created
      <Gallery galleryImages={galleryImages}></Gallery>
    </Layout>
  );
}
