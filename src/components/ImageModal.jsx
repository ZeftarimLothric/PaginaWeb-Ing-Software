import React from "react";

export function ImageModal({ isOpen, onClose, imgSrc, imgAlt }) {
  if (!isOpen) return null; // No renderizar si el modal no está abierto

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full m-2"
        >
          Cerrar
        </button>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="max-w-full max-h-screen object-contain"
        />
      </div>
    </div>
  );
}
