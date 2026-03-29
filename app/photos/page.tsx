import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import PhotoAlbum from "../components/PhotoAlbum";

export const metadata: Metadata = {
  title: "Photos - Raj Chinagundi",
  description: "A collection of my photography and memorable moments.",
};

// Non-photo images that live in /public/images but aren't gallery photos
const EXCLUDED = new Set([
  "auto-meet.png",
  "shadowsearch.png",
  "snapp.png",
  "star-project.jpeg",
]);

function getPhotos(): string[] {
  const dir = path.join(process.cwd(), "public", "images");
  return fs
    .readdirSync(dir)
    .filter((f) => {
      const ext = f.toLowerCase();
      return (
        (ext.endsWith(".jpg") ||
          ext.endsWith(".jpeg") ||
          ext.endsWith(".png") ||
          ext.endsWith(".webp")) &&
        !EXCLUDED.has(f)
      );
    })
    .sort();
}

export default function Photos() {
  const photos = getPhotos();

  return (
    <article>
      <h1>Photos</h1>
      <p>A minimal album of moments worth keeping.</p>
      <PhotoAlbum photos={photos} />
    </article>
  );
}
