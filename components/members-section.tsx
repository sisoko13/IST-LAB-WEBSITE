import { Mail, GraduationCap } from "lucide-react"

export default function MembersSection() {
  const professor = {
    name: "정동원",
    title: "Professor",
    image: "/placeholder.svg?height=300&width=240",
    research: "데이터베이스, 모빌리티",
    email: "professor@kunsan.ac.kr",
    homepage: "https://sites.google.com/site/withimp/home?authuser=0",
  }

  const members = [
    {
      category: "Master's Students",
      people: [
        {
          name: "Master's Student",
          image: "/placeholder.svg?height=200&width=200",
          research: "데이터베이스 시스템",
          email: "masters@kunsan.ac.kr",
        },
      ],
    },
    {
      category: "Undergraduate Researchers",
      people: [
        {
          name: "Undergraduate Researcher",
          image: "/placeholder.svg?height=200&width=200",
          research: "모빌리티 데이터 분석",
          email: "undergrad@kunsan.ac.kr",
        },
      ],
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Members</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">IST Lab의 우수한 연구원들을 소개합니다.</p>
        </div>

        {/* Professor Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">Professor</h3>
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

        {/* Researchers Section */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-8 text-center">Researchers</h3>
          {members.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h4 className="text-xl font-semibold text-blue-600 mb-6">{category.category}</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.people.map((person, personIndex) => (
                  <div
                    key={personIndex}
                    className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
                  >
                    <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                      <img
                        src={person.image || "/placeholder.svg"}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h5 className="text-xl font-bold text-blue-700 mb-3">{person.name}</h5>
                    <p className="text-gray-600 mb-4">{category.category}</p>
                    <div className="space-y-2 text-base text-gray-600">
                      <div className="flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 mr-3" />
                        <span>
                          <strong>연구 분야:</strong> {person.research}
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Mail className="w-5 h-5 mr-3" />
                        <span>{person.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
