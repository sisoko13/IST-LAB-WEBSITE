"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BoardGalleryPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // 예시 갤러리 이미지들
  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "연구실 전경"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "연구 활동"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "학회 발표"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "팀 미팅"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "연구 장비"
    }
  ]

  // 자동 슬라이드 기능
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    
    return () => clearInterval(timer)
  }, [galleryImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>

        {/* 메인 슬라이드 */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* 이전/다음 버튼 */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          {/* 슬라이드 인디케이터 */}
          <div className="flex justify-center mt-4 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-blue-700' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 썸네일 갤러리 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`cursor-pointer rounded-lg overflow-hidden transition-all ${
                index === currentSlide ? 'ring-4 ring-blue-700' : 'hover:opacity-75'
              }`}
              onClick={() => goToSlide(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-24 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}