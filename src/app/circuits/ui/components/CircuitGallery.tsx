"use client";

import { useState } from "react";
import Modal from "react-modal";

interface CircuitGalleryProps {
  images: string[];
}

export const CircuitGallery = ({ images }: CircuitGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer overflow-hidden rounded-lg" onClick={() => openModal(image)}>
            <img
              src={image}
              alt={`image-${index}`}
              className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70"
          contentLabel="Image Modal"
        >
          <div className="relative bg-white p-1 rounded-lg max-w-4xl max-h-full mx-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
            >
              ✕
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-[80vh] object-contain" />
          </div>
        </Modal>
      )}
    </div>
  );
};
