import { Shield, ExternalLink } from "lucide-react"

export default function PatentsSection() {
  const patents = [
    {
      id: 1,
      title: "지능형 데이터 분석 시스템 및 그 방법",
      inventors: "정동원, 박사과정 연구원",
      applicationNumber: "10-2024-0123456",
      applicationDate: "2024년 11월 5일",
      publicationNumber: "10-2024-0234567",
      publicationDate: "2024년 12월 1일",
      status: "출원",
      classification: "G06F 16/00",
      abstract: "머신러닝 기반 자동 데이터 전처리, 실시간 이상 데이터 탐지 및 보정 기능을 포함하는 지능형 데이터 분석 시스템에 관한 발명이다."
    },
    {
      id: 2,
      title: "분산 데이터베이스 최적화 장치 및 방법",
      inventors: "정동원, 박사과정 연구원, 석사과정 연구원",
      applicationNumber: "10-2023-0987654",
      applicationDate: "2023년 8월 15일",
      publicationNumber: "10-2023-0876543",
      publicationDate: "2023년 10월 20일",
      registrationNumber: "10-2567890",
      registrationDate: "2024년 3월 10일",
      status: "등록",
      classification: "G06F 16/22",
      abstract: "분산 환경에서 데이터베이스 쿼리 처리 성능을 향상시키기 위한 최적화 장치 및 그 방법에 관한 발명이다."
    },
    {
      id: 3,
      title: "실시간 빅데이터 처리 시스템",
      inventors: "박사과정 연구원, 정동원",
      applicationNumber: "10-2023-0555666",
      applicationDate: "2023년 5월 20일",
      publicationNumber: "10-2023-0666777",
      publicationDate: "2023년 7월 15일",
      status: "심사중",
      classification: "G06F 16/25",
      abstract: "대용량 데이터를 실시간으로 처리하고 분석하는 시스템으로, 스트림 데이터 처리 최적화 기술을 포함한다."
    },
    {
      id: 4,
      title: "IoT 기반 스마트 데이터 수집 및 분석 장치",
      inventors: "석사과정 연구원, 정동원",
      applicationNumber: "10-2022-0333444",
      applicationDate: "2022년 12월 10일",
      publicationNumber: "10-2023-0111222",
      publicationDate: "2023년 2월 5일",
      registrationNumber: "10-2345678",
      registrationDate: "2023년 8월 25일",
      status: "등록",
      classification: "H04L 12/28",
      abstract: "IoT 디바이스로부터 데이터를 효율적으로 수집하고 분석하는 장치 및 방법에 관한 발명이다."
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "등록":
        return "bg-green-100 text-green-800"
      case "출원":
        return "bg-blue-100 text-blue-800"
      case "심사중":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Patents</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            IST Lab에서 출원 및 등록한 특허들을 소개합니다.
          </p>
        </div>

        <div className="space-y-8">
          {patents.map((patent) => (
            <div key={patent.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${getStatusColor(patent.status)}`}>
                    {patent.status}
                  </span>
                  <span className="text-sm text-gray-500">{patent.classification}</span>
                </div>
                <Shield className="w-6 h-6 text-blue-700" />
              </div>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">{patent.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>발명자:</strong> {patent.inventors}
                  </p>
                  <p className="text-gray-700">
                    <strong>출원번호:</strong> {patent.applicationNumber}
                  </p>
                  <p className="text-gray-700">
                    <strong>출원일:</strong> {patent.applicationDate}
                  </p>
                  <p className="text-gray-700">
                    <strong>공개번호:</strong> {patent.publicationNumber}
                  </p>
                  <p className="text-gray-700">
                    <strong>공개일:</strong> {patent.publicationDate}
                  </p>
                </div>
                
                {patent.registrationNumber && (
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <strong>등록번호:</strong> {patent.registrationNumber}
                    </p>
                    <p className="text-gray-700">
                      <strong>등록일:</strong> {patent.registrationDate}
                    </p>
                    <p className="text-gray-700">
                      <strong>분류:</strong> {patent.classification}
                    </p>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">요약</h4>
                <p className="text-gray-600 leading-relaxed">{patent.abstract}</p>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  특허 상세보기
                </button>
                <button className="flex items-center border border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  기술이전 문의
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}