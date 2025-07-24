import { Briefcase, ExternalLink, Calendar, DollarSign } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "스마트 시티 데이터 플랫폼 구축",
      agency: "과학기술정보통신부",
      period: "2023.03 - 2026.02 (3년)",
      budget: "15억원",
      role: "연구책임자",
      participants: "정동원, 박사과정 연구원 2명, 석사과정 연구원 3명",
      status: "진행중",
      description: "군산시 스마트 시티 인프라 구축을 위한 통합 데이터 플랫폼 개발 및 IoT 센서 데이터 수집·분석 시스템 구축",
      objectives: [
        "IoT 센서 데이터 수집 및 분석 시스템 개발",
        "실시간 교통 최적화 알고리즘 구현",
        "시민 서비스 통합 플랫폼 구축",
        "데이터 보안 및 프라이버시 보호 기술 개발"
      ]
    },
    {
      id: 2,
      title: "AI 기반 제조업 품질관리 시스템 개발",
      agency: "중소벤처기업부",
      period: "2024.01 - 2024.12 (1년)",
      budget: "3억원",
      role: "공동연구원",
      participants: "정동원, 박사과정 연구원 1명, 석사과정 연구원 2명",
      status: "완료",
      description: "머신러닝 기술을 활용한 제조업 품질관리 자동화 시스템 개발 및 현장 적용",
      objectives: [
        "제품 품질 예측 모델 개발",
        "실시간 불량품 탐지 시스템 구축",
        "품질관리 데이터 시각화 대시보드 개발",
        "현장 적용 및 성능 검증"
      ]
    },
    {
      id: 3,
      title: "블록체인 기반 물류 추적 시스템",
      agency: "정보통신기획평가원(IITP)",
      period: "2022.06 - 2024.05 (2년)",
      budget: "8억원",
      role: "연구책임자",
      participants: "정동원, 박사과정 연구원 2명, 석사과정 연구원 1명",
      status: "완료",
      description: "블록체인 기술을 활용한 투명하고 안전한 물류 추적 시스템 개발",
      objectives: [
        "블록체인 기반 물류 데이터 관리 시스템 개발",
        "스마트 컨트랙트를 활용한 자동화 프로세스 구현",
        "물류 정보 투명성 및 보안성 향상",
        "실제 물류업체와의 파일럿 테스트 수행"
      ]
    },
    {
      id: 4,
      title: "빅데이터 기반 교통 최적화 연구",
      agency: "국토교통부",
      period: "2021.03 - 2023.02 (2년)",
      budget: "5억원",
      role: "공동연구원",
      participants: "정동원, 박사과정 연구원 1명, 석사과정 연구원 2명",
      status: "완료",
      description: "도시 교통 데이터 분석을 통한 교통 흐름 최적화 알고리즘 개발",
      objectives: [
        "교통 빅데이터 수집 및 전처리 시스템 구축",
        "교통 패턴 분석 및 예측 모델 개발",
        "실시간 교통 최적화 알고리즘 구현",
        "교통 관제 시스템과의 연동 테스트"
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "진행중":
        return "bg-blue-100 text-blue-800"
      case "완료":
        return "bg-green-100 text-green-800"
      case "계획":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            IST Lab에서 수행한 연구 프로젝트들을 소개합니다.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-gray-500">{project.agency}</span>
                </div>
                <Briefcase className="w-6 h-6 text-blue-700" />
              </div>

              <h3 className="text-2xl font-bold text-blue-700 mb-4">{project.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span><strong>연구기간:</strong> {project.period}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span><strong>연구비:</strong> {project.budget}</span>
                  </div>
                  <p className="text-gray-700">
                    <strong>역할:</strong> {project.role}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>참여연구원:</strong> {project.participants}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">연구 내용</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                
                <h4 className="font-semibold text-gray-800 mb-2">주요 목표</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {project.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  프로젝트 상세보기
                </button>
                <button className="flex items-center border border-blue-700 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  연구성과 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}