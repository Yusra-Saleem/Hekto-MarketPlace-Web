"use client"

import * as React from "react"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState(images[0])

  return (
    <div className=" md:flex gap-4">
        <div className="hidden h-[500px] md:grid grid-rows-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`aspect-square overflow-hidden border-2 bg-[#F6F7FB] p-2 ${
              selectedImage === image
                ? "border-[#FB2E86]"
                : "border-transparent hover:border-gray-200"
            }`}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="h-full w-full object-contain"
            />
          </button>
        ))}
      </div>
      <div className="aspect-square overflow-hidden w-full bg-[#F6F7FB]">
        <img
          src={selectedImage}
          alt="Product image"
          className="h-[500px] w-full object-contain p-4"
        />
      </div>
      <div className="grid md:hidden grid-cols-4 mt-4 md:mt-0 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`aspect-square overflow-hidden border-2 bg-[#F6F7FB] p-2 ${
              selectedImage === image
                ? "border-[#FB2E86]"
                : "border-transparent hover:border-gray-200"
            }`}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className="h-full w-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

