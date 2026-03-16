"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface CircuitGalleryProps {
  images: string[];
}

export const CircuitGallery = ({ images }: CircuitGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const goTo = useCallback(
    (index: number) => {
      if (!images.length) {
        return;
      }
      const boundedIndex = (index + images.length) % images.length;
      setActiveIndex(boundedIndex);
    },
    [images.length],
  );

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) {
      return;
    }
    deltaX.current = event.clientX - startX.current;
  };

  const handlePointerUp = () => {
    if (startX.current === null) {
      return;
    }
    const threshold = 60;
    if (deltaX.current > threshold) {
      goTo(activeIndex - 1);
    }
    if (deltaX.current < -threshold) {
      goTo(activeIndex + 1);
    }
    startX.current = null;
    deltaX.current = 0;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isZoomOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isZoomOpen]);

  if (!images.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div
        className="relative overflow-hidden rounded-2xl border border-black/10 bg-white"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onKeyDown={handleKeyDown}
        role="region"
        aria-label="Galeria de imagenes del circuito"
        tabIndex={0}
      >
        <div className="relative w-full bg-[rgba(0,0,0,0.02)]">
          <button
            type="button"
            onClick={() => {
              if (isMobile) {
                setIsZoomOpen(true);
              }
            }}
            className="relative mx-auto flex h-[260px] w-full items-center justify-center sm:h-[420px]"
            aria-label="Ampliar imagen"
          >
            <Image
              src={images[activeIndex]}
              alt={`imagen-${activeIndex + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 720px"
              className="object-contain p-4"
              priority={activeIndex === 0}
            />
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-4 hidden items-center sm:flex">
          <span className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs text-black/60">
            {activeIndex + 1}/{images.length}
          </span>
        </div>
        <div className="absolute inset-y-0 left-3 hidden items-center sm:flex">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm text-black/70 transition hover:border-black/20"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Imagen anterior"
          >
            <span aria-hidden>{"<"}</span>
          </button>
        </div>
        <div className="absolute inset-y-0 right-3 hidden items-center sm:flex">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm text-black/70 transition hover:border-black/20"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Imagen siguiente"
          >
            <span aria-hidden>{">"}</span>
          </button>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-16 w-24 flex-none overflow-hidden rounded-xl border transition ${
                isActive ? "border-black/40" : "border-black/10"
              }`}
              aria-label={`Ver imagen ${index + 1}`}
            >
              <Image
                src={image}
                alt={`miniatura-${index + 1}`}
                fill
                sizes="96px"
                className={`object-cover ${isActive ? "opacity-100" : "opacity-70"}`}
              />
            </button>
          );
        })}
      </div>

      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          onClick={() => setIsZoomOpen(false)}
        >
          <div className="relative h-[80vh] w-[90vw] max-w-3xl rounded-2xl bg-black/90">
            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-xs text-white"
            >
              Cerrar
            </button>
            <Image
              src={images[activeIndex]}
              alt={`imagen-${activeIndex + 1} ampliada`}
              fill
              sizes="100vw"
              className="object-contain p-6"
            />
          </div>
        </div>
      )}
    </div>
  );
};
