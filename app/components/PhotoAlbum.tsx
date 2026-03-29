"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type PhotoAlbumProps = {
  photos: string[];
};

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export default function PhotoAlbum({ photos }: PhotoAlbumProps) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"album" | "grid">("album");

  const total = photos.length;

  useEffect(() => {
    if (total === 0) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + total) % total);
      }

      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % total);
      }

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [total]);

  if (total === 0) {
    return <p>No photos yet.</p>;
  }

  const currentPhoto = photos[index];
  const prev = () => setIndex((current) => (current - 1 + total) % total);
  const next = () => setIndex((current) => (current + 1) % total);
  const countLabel = `${pad(index + 1)} / ${pad(total)}`;
  const modeLabel = mode === "album" ? "Album" : "Catalog";
  const summaryLabel = mode === "album" ? countLabel : `${total} photos`;

  return (
    <>
      <section className="photo-album" aria-label="Photo album">
        <div className="photo-album-top">
          <div>
            <p className="photo-album-kicker">{modeLabel}</p>
            <p className="photo-album-count">{summaryLabel}</p>
          </div>
          <button
            type="button"
            className="photo-expand"
            onClick={() =>
              setMode((current) => (current === "album" ? "grid" : "album"))
            }
          >
            {mode === "album" ? "Grid View" : "Album View"}
          </button>
        </div>

        {mode === "album" ? (
          <div className="photo-stage">
            <button
              type="button"
              className="photo-nav"
              onClick={prev}
              aria-label="Previous photo"
            >
              &larr;
            </button>

            <button
              type="button"
              className="photo-frame-button"
              onClick={() => setIsOpen(true)}
              aria-label={`Open photo ${index + 1} in fullscreen`}
            >
              <div className="photo-frame" key={currentPhoto}>
                <Image
                  src={`/images/${currentPhoto}`}
                  alt={`Photo ${index + 1} of ${total}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="photo-image"
                  priority={index === 0}
                />
              </div>
            </button>

            <button
              type="button"
              className="photo-nav"
              onClick={next}
              aria-label="Next photo"
            >
              &rarr;
            </button>
          </div>
        ) : (
          <div className="photo-catalog">
            {photos.map((photo, photoIndex) => (
              <button
                key={photo}
                type="button"
                className="photo-thumb-button"
                onClick={() => {
                  setIndex(photoIndex);
                  setIsOpen(true);
                }}
                aria-label={`Open photo ${photoIndex + 1} in fullscreen`}
              >
                <div className="photo-thumb">
                  <Image
                    src={`/images/${photo}`}
                    alt={`Photo ${photoIndex + 1} of ${total}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 220px"
                    className="photo-thumb-image"
                  />
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {isOpen && (
        <div className="photo-lightbox" role="dialog" aria-modal="true" aria-label="Expanded photo">
          <button
            type="button"
            className="photo-lightbox-backdrop"
            aria-label="Close full view"
            onClick={() => setIsOpen(false)}
          />

          <div className="photo-lightbox-shell">
            <div className="photo-lightbox-top">
              <span className="photo-lightbox-count">{countLabel}</span>
              <button
                type="button"
                className="photo-lightbox-close"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="photo-lightbox-stage">
              <button
                type="button"
                className="photo-nav photo-nav-lightbox"
                onClick={prev}
                aria-label="Previous photo"
              >
                &larr;
              </button>

              <div className="photo-lightbox-frame" key={`${currentPhoto}-full`}>
                <Image
                  src={`/images/${currentPhoto}`}
                  alt={`Photo ${index + 1} of ${total}`}
                  fill
                  sizes="100vw"
                  className="photo-lightbox-image"
                />
              </div>

              <button
                type="button"
                className="photo-nav photo-nav-lightbox"
                onClick={next}
                aria-label="Next photo"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
