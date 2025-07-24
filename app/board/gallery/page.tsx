"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function BoardGalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [selectedYear, setSelectedYear] = useState("ALL")
  
  // 예시 갤러리 이미지들
  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Jeju MT",
      date: "2025.07.02. - 07.04.",
      year: "2025"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "CVPR 2025",
      date: "2025.06.15.",
      year: "2025"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Lab Dinner",
      date: "2025.05.30.",
      year: "2025"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "ICLR 2025",
      date: "2025.04.27.",
      year: "2025"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "V-Lab at Yonsei University",
      date: "2025.03.14.",
      year: "2025"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "AAAI 2025",
      date: "2025.02.26.",
      year: "2025"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Winter Workshop",
      date: "2024.12.15.",
      year: "2024"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Conference Presentation",
      date: "2024.11.20.",
      year: "2024"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Research Meeting",
      date: "2024.10.10.",
      year: "2024"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Lab Retreat",
      date: "2023.09.15.",
      year: "2023"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Summer School",
      date: "2023.08.20.",
      year: "2023"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Graduation Ceremony",
      date: "2023.07.25.",
      year: "2023"
    }
  ]

  const years = ["ALL", "2025", "2024", "2023"]
  
  const filteredImages = selectedYear === "ALL" 
    ? galleryImages 
    : galleryImages.filter(img => img.year === selectedYear)

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') closeModal()
    }
  }

  // 키보드 이벤트 리스너
  useState(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>

        {/* 연도 필터 */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-white rounded-lg border border-gray-300 p-1">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedYear === year 
                    ? "bg-blue-700 text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* 그리드 갤러리 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 모달 */}
        {selectedImageIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              {/* 닫기 버튼 */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* 이전 버튼 */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
              
              {/* 다음 버튼 */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
              
              {/* 이미지 */}
              <div className="flex items-center justify-center h-full">
                <img
                  src={filteredImages[selectedImageIndex].src}
                  alt={filteredImages[selectedImageIndex].title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              
              {/* 이미지 정보 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h3 className="text-xl font-bold mb-1">{filteredImages[selectedImageIndex].title}</h3>
                <p className="text-sm opacity-80">{filteredImages[selectedImageIndex].date}</p>
                <p className="text-xs opacity-60 mt-2">
                  {selectedImageIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}