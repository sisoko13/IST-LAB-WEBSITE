"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ExternalLink, FileText, X } from "lucide-react"

interface PublicationsSectionProps {
  initialCategory?: string | null
}

export default function PublicationsSection({ initialCategory }: PublicationsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "All")
  const [selectedYear, setSelectedYear] = useState("All")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = ["All", "해외학술지", "국내학술지", "해외학술대회", "국내학술대회"]
  const years = ["All", "2025", "2024", "2023", "2022", "2021", "2020", "2019"]

  const publications = {
    "All": [
      {
        id: 1,
        title: "Efficient Query Processing in Distributed Big Data Environments",
        authors: "정동원, 박사과정 연구원",
        venue: "IEEE Transactions on Knowledge and Data Engineering",
        volume: "Vol. 35, No. 8",
        pages: "pp. 1567-1580",
        year: "2023",
        doi: "10.1109/TKDE.2023.1234567",
        paperUrl: "https://ieeexplore.ieee.org/document/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 2,
        title: "Machine Learning Approaches for Database Optimization",
        authors: "박사과정 연구원, 정동원",
        venue: "ACM Transactions on Database Systems",
        volume: "Vol. 48, No. 3",
        pages: "pp. 1-28",
        year: "2023",
        doi: "10.1145/3589334.3589335",
        paperUrl: "https://dl.acm.org/doi/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 3,
        title: "정보과학기술 분야의 혁신적 접근법에 관한 연구",
        authors: "정동원, 박사과정 연구원, 석사과정 연구원",
        venue: "한국정보과학회 논문지",
        volume: "Vol. 50, No. 12",
        pages: "pp. 1234-1245",
        year: "2024",
        doi: "10.5626/KTCP.2024.50.12.1234",
        paperUrl: "https://www.dbpia.co.kr/journal/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 4,
        title: "클라우드 환경에서의 분산 데이터 처리 최적화",
        authors: "석사과정 연구원, 정동원",
        venue: "정보처리학회논문지",
        volume: "Vol. 12, No. 4",
        pages: "pp. 156-167",
        year: "2023",
        doi: "10.3745/KTSDE.2023.12.4.156",
        paperUrl: "https://www.kci.go.kr/kciportal/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 5,
        title: "Efficient Query Processing in Distributed Big Data Environments",
        authors: "정동원, 박사과정 연구원",
        venue: "IEEE International Conference on Data Engineering (ICDE 2024)",
        location: "Utrecht, Netherlands",
        date: "May 13-17, 2024",
        year: "2024",
        pages: "pp. 567-578",
        paperUrl: "https://ieeexplore.ieee.org/conference/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 6,
        title: "Machine Learning Approaches for Database Optimization",
        authors: "정동원, 박사과정 연구원, 석사과정 연구원",
        venue: "ACM SIGMOD International Conference on Management of Data",
        location: "Seattle, WA, USA",
        date: "June 18-23, 2023",
        year: "2023",
        pages: "pp. 1456-1468",
        paperUrl: "https://dl.acm.org/conference/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 7,
        title: "AI 기반 데이터 분석 시스템 개발",
        authors: "박사과정 연구원, 정동원",
        venue: "2024 한국컴퓨터종합학술대회 (KCC 2024)",
        location: "제주국제컨벤션센터",
        date: "2024년 6월 26-28일",
        year: "2024",
        pages: "pp. 1234-1236",
        paperUrl: "https://www.kiise.or.kr/conference/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 8,
        title: "소프트웨어 품질 향상을 위한 새로운 방법론",
        authors: "석사과정 연구원, 정동원",
        venue: "2024 한국소프트웨어공학회 춘계학술대회",
        location: "강원대학교",
        date: "2024년 5월 23-24일",
        year: "2024",
        pages: "pp. 89-92",
        paperUrl: "https://www.kiise.or.kr/conference/example",
        image: "/placeholder.svg?height=200&width=150"
      }
    ],
    "Journal": [
      {
        id: 1,
        title: "Efficient Query Processing in Distributed Big Data Environments",
        authors: "정동원, 박사과정 연구원",
        venue: "IEEE Transactions on Knowledge and Data Engineering",
        volume: "Vol. 35, No. 8",
        pages: "pp. 1567-1580",
        year: "2023",
        doi: "10.1109/TKDE.2023.1234567",
        paperUrl: "https://ieeexplore.ieee.org/document/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 2,
        title: "Machine Learning Approaches for Database Optimization",
        authors: "박사과정 연구원, 정동원",
        venue: "ACM Transactions on Database Systems",
        volume: "Vol. 48, No. 3",
        pages: "pp. 1-28",
        year: "2023",
        doi: "10.1145/3589334.3589335",
        paperUrl: "https://dl.acm.org/doi/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 3,
        title: "정보과학기술 분야의 혁신적 접근법에 관한 연구",
        authors: "정동원, 박사과정 연구원, 석사과정 연구원",
        venue: "한국정보과학회 논문지",
        volume: "Vol. 50, No. 12",
        pages: "pp. 1234-1245",
        year: "2024",
        doi: "10.5626/KTCP.2024.50.12.1234",
        paperUrl: "https://www.dbpia.co.kr/journal/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 4,
        title: "클라우드 환경에서의 분산 데이터 처리 최적화",
        authors: "석사과정 연구원, 정동원",
        venue: "정보처리학회논문지",
        volume: "Vol. 12, No. 4",
        pages: "pp. 156-167",
        year: "2023",
        doi: "10.3745/KTSDE.2023.12.4.156",
        paperUrl: "https://www.kci.go.kr/kciportal/example",
        image: "/placeholder.svg?height=200&width=150"
      }
    ],
    "Conference": [
      {
        id: 5,
        title: "Efficient Query Processing in Distributed Big Data Environments",
        authors: "정동원, 박사과정 연구원",
        venue: "IEEE International Conference on Data Engineering (ICDE 2024)",
        location: "Utrecht, Netherlands",
        date: "May 13-17, 2024",
        year: "2024",
        pages: "pp. 567-578",
        paperUrl: "https://ieeexplore.ieee.org/conference/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 6,
        title: "Machine Learning Approaches for Database Optimization",
        authors: "정동원, 박사과정 연구원, 석사과정 연구원",
        venue: "ACM SIGMOD International Conference on Management of Data",
        location: "Seattle, WA, USA",
        date: "June 18-23, 2023",
        year: "2023",
        pages: "pp. 1456-1468",
        paperUrl: "https://dl.acm.org/conference/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 7,
        title: "AI 기반 데이터 분석 시스템 개발",
        authors: "박사과정 연구원, 정동원",
        venue: "2024 한국컴퓨터종합학술대회 (KCC 2024)",
        location: "제주국제컨벤션센터",
        date: "2024년 6월 26-28일",
        year: "2024",
        pages: "pp. 1234-1236",
        paperUrl: "https://www.kiise.or.kr/conference/example",
        image: "/placeholder.svg?height=200&width=150"
      },
      {
        id: 8,
        title: "소프트웨어 품질 향상을 위한 새로운 방법론",
        authors: "석사과정 연구원, 정동원",
        venue: "2024 한국소프트웨어공학회 춘계학술대회",
        location: "강원대학교",
        date: "2024년 5월 23-24일",
        year: "2024",
        pages: "pp. 89-92",
        paperUrl: "https://www.kiise.or.kr/conference/example",
        image: "/placeholder.svg?height=200&width=150"
      }
    ]
  }

  useEffect(() => {
    if (initialCategory && ["All", "Journal", "Conference"].includes(initialCategory)) {
      setSelectedCategory(initialCategory)
    }
  }, [initialCategory])

  const allPublications = publications[selectedCategory] || []
  const currentPublications = selectedYear === "All" 
    ? allPublications 
    : allPublications.filter(pub => pub.year === selectedYear)

  const showYearFilter = true // 모든 카테고리에서 연도 필터 표시

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Publications</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            IST Lab에서 발표한 논문과 연구 성과를 소개합니다.
          </p>
        </div>

        {/* Category and Year Dropdowns */}
        <div className="mb-8 flex justify-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center bg-white border border-gray-300 rounded-lg px-6 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-48"
            >
              {selectedCategory}
              <ChevronDown className={`ml-2 w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsDropdownOpen(false)
                      setSelectedYear("All") // Reset year when category changes
                    }}
                    className={`w-full text-left px-6 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                      selectedCategory === category ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Year Dropdown - only show for specific categories */}
          {showYearFilter && (
            <div className="relative">
              <button
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className="flex items-center bg-white border border-gray-300 rounded-lg px-6 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-32"
              >
                {selectedYear}
                <ChevronDown className={`ml-2 w-5 h-5 transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isYearDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year)
                        setIsYearDropdownOpen(false)
                      }}
                      className={`w-full text-left px-6 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                        selectedYear === year ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {currentPublications.map((pub) => (
            <div key={pub.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Paper Image */}
                <div className="flex-shrink-0">
                  <div className="w-40 h-52 bg-gray-100 rounded-lg overflow-hidden border">
                    <img
                      src={pub.image || "/placeholder.svg"}
                      alt={`${pub.title} paper`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedImage(pub.image || "/placeholder.svg")}
                    />
                  </div>
                </div>

                {/* Paper Details */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-blue-700 mb-3 leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-gray-600 mb-2">
                      {pub.venue}
                      {pub.volume && `, ${pub.volume}`}
                      {pub.pages && `, ${pub.pages}`}
                    </p>
                    {pub.location && (
                      <p className="text-gray-600 mb-2">
                        {pub.location}
                      </p>
                    )}
                    {pub.date && (
                      <p className="text-gray-600 mb-2">
                        {pub.date}
                      </p>
                    )}
                    {pub.doi && (
                      <p className="text-gray-600 mb-2">
                        {pub.doi}
                      </p>
                    )}
                    <p className="text-gray-600">
                      {pub.year}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentPublications.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">해당 카테고리에 논문이 없습니다.</p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Paper preview"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}