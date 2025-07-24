"use client"

import React from "react"
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
      featured: true,
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

  const allNews = news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">News & Updates</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>

        {/* 소식 목록 */}
        <div>
          <div className="space-y-6">
            {allNews.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleNewsClick(item)}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-blue-700 mb-3">{item.title}</h4>
                    <p className="text-gray-600 mb-2">{item.summary}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {item.author}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <button className="flex items-center text-blue-700 hover:text-blue-800 font-medium">
                      자세히 보기
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News Modal */}
      <NewsModal isOpen={isModalOpen} onClose={handleCloseModal} newsItem={selectedNews} />
    </section>
  )
}
