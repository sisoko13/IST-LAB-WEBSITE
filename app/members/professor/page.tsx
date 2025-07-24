import { Mail, GraduationCap } from "lucide-react"

export default function ProfessorPage() {
  const professor = {
    name: "정동원",
    title: "Professor",
    image: "/placeholder.svg?height=300&width=240",
    research: "데이터베이스, 모빌리티",
    email: "professor@kunsan.ac.kr",
    homepage: "https://sites.google.com/site/withimp/home?authuser=0",
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Professor</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-xl p-10 max-w-md">
            <div className="text-center">
              <div className="w-56 h-72 mx-auto mb-8 overflow-hidden rounded-lg">
                <img
                  src={professor.image || "/placeholder.svg"}
                  alt={professor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-3xl font-bold text-gray-800 mb-3">{professor.name}</h4>
              <p className="text-blue-600 font-medium mb-6">{professor.title}</p>
              <div className="space-y-3 text-base text-gray-600">
                <div className="flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 mr-3" />
                  <span>
                    <strong>연구 분야:</strong> {professor.research}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>{professor.email}</span>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <a
                    href={professor.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors text-base font-medium"
                  >
                    [홈페이지]
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}