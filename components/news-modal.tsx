"use client"

import { X } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  summary: string
  date: string
  author: string
  category: string
  featured: boolean
  content?: string
  image?: string
}

interface NewsModalProps {
  isOpen: boolean
  onClose: () => void
  newsItem: NewsItem | null
}

export default function NewsModal({ isOpen, onClose, newsItem }: NewsModalProps) {
  if (!isOpen || !newsItem) return null

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

  const getDetailedContent = (item: NewsItem) => {
    switch (item.id) {
      case 1:
        return `
          IST Lab의 "AI 기반 데이터베이스 최적화 연구"가 2024년 한국정보과학회에서 우수논문상을 수상하는 쾌거를 달성했습니다.
          
          이번 연구는 머신러닝 알고리즘을 활용하여 대용량 데이터베이스의 쿼리 성능을 획기적으로 향상시키는 새로운 방법론을 제시했습니다. 
          
          주요 성과:
          • 기존 대비 쿼리 처리 속도 40% 향상
          • 메모리 사용량 25% 절약
          • 다양한 데이터베이스 시스템에 적용 가능한 범용성 확보
          
          이번 수상은 IST Lab의 연구 역량을 대내외에 알리는 중요한 성과로 평가됩니다.
        `
      case 2:
        return `
          과학기술정보통신부의 지원을 받아 3년간 진행될 "스마트 시티 데이터 플랫폼 구축" 프로젝트가 본격 시작되었습니다.
          
          프로젝트 개요:
          • 총 연구비: 15억원 (3년간)
          • 참여 기관: IST Lab, 군산시청, 지역 IT 기업 5곳
          • 목표: 군산시 스마트 시티 인프라 구축 및 데이터 통합 플랫폼 개발
          
          주요 연구 내용:
          • IoT 센서 데이터 수집 및 분석 시스템
          • 실시간 교통 최적화 알고리즘
          • 시민 서비스 통합 플랫폼
          • 데이터 보안 및 프라이버시 보호 기술
          
          이 프로젝트를 통해 군산시가 대한민국 대표 스마트 시티로 발전할 것으로 기대됩니다.
        `
      case 3:
        return `
          IST Lab의 빅데이터 처리 효율성 향상 연구논문이 국제 데이터베이스 학술대회 ICDE 2024에 채택되었습니다.
          
          논문 정보:
          • 제목: "Efficient Query Processing in Distributed Big Data Environments"
          • 저자: 박사과정 연구원, 정동원 교수
          • 학회: IEEE International Conference on Data Engineering (ICDE) 2024
          • 발표 예정: 2024년 5월, 네덜란드 위트레흐트
          
          연구 내용:
          • 분산 환경에서의 빅데이터 쿼리 최적화 기법
          • 네트워크 트래픽 최소화 알고리즘
          • 실시간 데이터 처리 성능 향상 방안
          
          ICDE는 데이터베이스 분야 최고 권위의 국제학술대회로, 이번 논문 채택은 IST Lab의 국제적 연구 역량을 입증하는 성과입니다.
        `
      case 4:
        return `
          IST Lab과 지역 IT 기업들이 함께 진행한 산학협력 프로젝트의 성과 발표회가 성공적으로 개최되었습니다.
          
          발표회 개요:
          • 일시: 2024년 11월 20일 오후 2시
          • 장소: 군산대학교 디지털정보관 대강당
          • 참석자: 기업 관계자 50여명, 학생 및 교수진 100여명
          
          주요 발표 내용:
          • AI 기반 제조업 품질관리 시스템 개발 성과
          • 블록체인을 활용한 물류 추적 시스템
          • IoT 기반 스마트 팩토리 솔루션
          
          참여 기업:
          • (주)테크노벨리 - AI 품질관리 시스템
          • 군산소프트웨어 - 블록체인 물류 시스템
          • 새만금IT - IoT 스마트 팩토리
          
          이번 성과 발표회를 통해 지역 산업 발전에 기여하는 실질적인 연구 성과를 확인할 수 있었습니다.
        `
      case 5:
        return `
          IST Lab에서 2025년 봄학기 신입 대학원생을 모집합니다.
          
          모집 분야:
          • 석사과정: 데이터베이스, 인공지능, 소프트웨어공학
          • 박사과정: 정보과학기술 전 분야
          
          지원 자격:
          • 석사과정: 컴퓨터공학, 소프트웨어학 관련 학과 학사 졸업(예정)자
          • 박사과정: 관련 분야 석사 학위 소지자
          
          전형 일정:
          • 원서 접수: 2024년 12월 1일 ~ 12월 15일
          • 서류 심사: 2024년 12월 20일
          • 면접 심사: 2024년 12월 27일
          • 최종 발표: 2025년 1월 5일
          
          혜택:
          • 연구 장학금 지급 (석사 월 80만원, 박사 월 120만원)
          • 국제학회 발표 지원
          • 산업체 인턴십 기회 제공
          
          문의: istlab@kunsan.ac.kr
        `
      case 6:
        return `
          IST Lab에서 개발한 "지능형 데이터 분석 시스템"에 대한 특허 출원이 완료되었습니다.
          
          특허 정보:
          • 발명의 명칭: 지능형 데이터 분석 시스템 및 그 방법
          • 출원번호: 10-2024-0123456
          • 출원일: 2024년 11월 5일
          • 발명자: 정동원 교수, 박사과정 연구원
          
          기술 특징:
          • 머신러닝 기반 자동 데이터 전처리
          • 실시간 이상 데이터 탐지 및 보정
          • 다양한 데이터 형식 지원 (정형/비정형)
          • 사용자 친화적 시각화 인터페이스
          
          기대 효과:
          • 데이터 분석 시간 70% 단축
          • 분석 정확도 95% 이상 달성
          • 비전문가도 쉽게 사용 가능한 직관적 UI
          
          향후 기술 이전을 통해 산업계에 실질적인 도움을 제공할 예정입니다.
        `
      default:
        return item.summary
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
          <div className="flex-1 pr-4">
            <div className="flex items-center mb-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${getCategoryColor(newsItem.category)}`}
              >
                {newsItem.category}
              </span>
              <span className="text-sm text-gray-500">{newsItem.date}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{newsItem.title}</h2>
            <p className="text-sm text-gray-600">작성자: {newsItem.author}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* News Image */}
          {newsItem.image && (
            <div className="mb-6">
              <img
                src={newsItem.image || "/placeholder.svg"}
                alt={newsItem.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          <div className="prose max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">{getDetailedContent(newsItem)}</div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6">
          <button
            onClick={onClose}
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}
