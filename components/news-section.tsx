"use client"

import { useState } from "react"
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import NewsModal from "./news-modal"

interface NewsItem {
  id: number
  title: string
  summary: string
  date: string
  author: string
  category: string
  featured: boolean
  image?: string
}

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)

  const news: NewsItem[] = [
    {
      id: 1,
      title: "2024년 한국정보과학회 우수논문상 수상",
      summary: "IST Lab의 AI 기반 데이터베이스 최적화 연구가 한국정보과학회에서 우수논문상을 수상했습니다.",
      date: "2024-12-15",
      author: "정동원 교수",
      category: "수상",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "신규 연구 프로젝트 '스마트 시티 데이터 플랫폼' 시작",
      summary: "과학기술정보통신부 지원으로 3년간 진행될 스마트 시티 데이터 플랫폼 구축 프로젝트가 시작되었습니다.",
      date: "2024-12-10",
      author: "IST Lab",
      category: "연구",
      featured: true,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "국제 학술대회 ICDE 2024 논문 채택",
      summary: "빅데이터 처리 효율성 향상에 관한 연구논문이 국제 데이터베이스 학술대회에 채택되었습니다.",
      date: "2024-11-28",
      author: "박사과정 연구원",
      category: "논문",
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "산학협력 프로젝트 성과 발표회 개최",
      summary: "지역 IT 기업들과 함께 진행한 산학협력 프로젝트의 성과를 발표하는 자리가 마련되었습니다.",
      date: "2024-11-20",
      author: "IST Lab",
      category: "행사",
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "신입 대학원생 모집 설명회",
      summary: "2025년 봄학기 신입 대학원생 모집을 위한 연구실 설명회가 개최됩니다.",
      date: "2024-11-15",
      author: "IST Lab",
      category: "모집",
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "특허 출원 완료: '지능형 데이터 분석 시스템'",
      summary: "머신러닝 기반의 지능형 데이터 분석 시스템에 대한 특허 출원이 완료되었습니다.",
      date: "2024-11-05",
      author: "정동원 교수",
      category: "특허",
      featured: false,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "수상":
        return "bg-yellow-100 text-yellow-800"
      case "연구":
        return "bg-blue-100 text-blue-800"
      case "논문":
        return "bg-green-100 text-green-800"
      case "행사":
        return "bg-purple-100 text-purple-800"
      case "모집":
        return "bg-red-100 text-red-800"
      case "특허":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleNewsClick = (newsItem: NewsItem) => {
    setSelectedNews(newsItem)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedNews(null)
  }

  // 주요 소식과 전체 소식 분리
  const featuredNews = news.filter(item => item.featured).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const allNews = news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // 주요소식 캐러셀 네비게이션
  const nextFeaturedSlide = () => {
    setCurrentFeaturedIndex(prev => (prev + 1) % featuredNews.length)
  }

  const prevFeaturedSlide = () => {
    setCurrentFeaturedIndex(prev => (prev - 1 + featuredNews.length) % featuredNews.length)
  }

  // 자동 슬라이드 (5초마다)
  React.useEffect(() => {
    const interval = setInterval(nextFeaturedSlide, 5000)
    return () => clearInterval(interval)
  }, [featuredNews.length])

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3
  const maxIndex = Math.max(0, allNews.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">News & Updates</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">IST Lab의 최신 연구 성과와 소식을 확인하세요.</p>
        </div>

        {/* 주요 소식 - 사진 캐러셀 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">주요 소식</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentFeaturedIndex * 100}%)` }}
              >
                {featuredNews.map((item) => (
                  <div
                    key={item.id}
                    className="w-full flex-shrink-0 relative cursor-pointer"
                    onClick={() => handleNewsClick(item)}
                  >
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {/* 오버레이 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      {/* 텍스트 오버레이 */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="flex items-center mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                          <span className="text-sm opacity-90">{item.date}</span>
                        </div>
                        <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                        <p className="text-sm opacity-90 line-clamp-2">{item.summary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 주요소식 네비게이션 버튼 */}
            {featuredNews.length > 1 && (
              <>
                <button
                  onClick={prevFeaturedSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextFeaturedSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* 주요소식 인디케이터 */}
                <div className="flex justify-center mt-4 space-x-2">
                  {featuredNews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeaturedIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentFeaturedIndex === index ? 'bg-blue-700' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* 전체 소식 */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">전체 소식</h3>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {allNews.map((item) => (
                <div
                  key={item.id}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full"
                    onClick={() => handleNewsClick(item)}
                  >
                    {/* News Image */}
                    {item.image && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.date}
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{item.title}</h4>
                      <p className="text-gray-600 mb-4 line-clamp-3">{item.summary}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          {item.author}
                        </div>
                        <button className="flex items-center text-blue-700 hover:text-blue-800 font-medium">
                          자세히 보기
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {maxIndex > 0 && Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-700' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* News Modal */}
      <NewsModal isOpen={isModalOpen} onClose={handleCloseModal} newsItem={selectedNews} />
    </section>
  )
}
