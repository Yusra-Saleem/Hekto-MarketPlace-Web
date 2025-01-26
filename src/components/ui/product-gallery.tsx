"use client"

import * as React from "react"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = React.useState(images[0])

  return (
    <div className="md:flex gap-6">
      {/* Thumbnails (Desktop) */}
      <div className="hidden md:grid grid-rows-4 gap-3 space-y-[4px] h-[500px] w-[120px]">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`h-[110px] overflow-hidden border-2 bg-[#edeef3] p-1 ${
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

      {/* Main Image */}
      <div className="w-full  flex items-center justify-center">
        <img
          src={selectedImage}
          alt="Product image"
          className="md:h-[500px] h-[400px] w-full object-contain p-4  border-gray-300 border-4 "
        />
      </div>

      {/* Thumbnails (Mobile) */}
      <div className="grid md:hidden grid-cols-4  gap-y-4 gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`h-[75px] overflow-hidden border-2 bg-[#edeef3] p-1 ${
              selectedImage === image
                ? "border-[#FB2E86]"
                : "border-transparent hover:border-gray-200"
            }`}
          >
            <img
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              className=" w-full object-contain bg-[#F6F7FB] h-full"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
