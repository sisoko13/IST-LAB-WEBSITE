import { Mail, GraduationCap } from "lucide-react"

export default function ProfessorPage() {
  const professor = {
    name: "정동원",
    title: "Professor",
    image: "/placeholder.svg?height=300&width=240",
    research: "데이터베이스, 모빌리티",
    email: "professor@kunsan.ac.kr",
    homepage: "https://sites.google.com/site/withimp/home?authuser=0",
    education: [
      "Ph.D. in Computer Science, KAIST (2005)",
      "M.S. in Computer Science, KAIST (2001)",
      "B.S. in Computer Science, Seoul National University (1999)"
    ],
    career: [
      "Professor, Kunsan National University (2010 - Present)",
      "Associate Professor, Kunsan National University (2006 - 2010)",
      "Assistant Professor, Kunsan National University (2005 - 2006)",
      "Research Engineer, Samsung Electronics (2001 - 2005)"
    ],
    interests: [
      "Database Systems",
      "Big Data Processing",
      "Smart Mobility Systems",
      "IoT Data Management",
      "Machine Learning for Databases"
    ]
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Professor</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-xl p-16 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Photo and Basic Info */}
              <div className="text-center">
                <div className="w-96 h-[500px] mx-auto mb-8 overflow-hidden rounded-lg">
                  <img
                    src={professor.image || "/placeholder.svg"}
                    alt={professor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-5xl font-bold text-gray-800 mb-6">{professor.name}</h4>
                <p className="text-blue-600 font-medium text-2xl mb-8">{professor.title}</p>
                <div className="space-y-6 text-xl text-gray-600">
                  <div className="flex items-center justify-center">
                    <Mail className="w-8 h-8 mr-4" />
                    <span>{professor.email}</span>
                  </div>
                  <div className="flex items-center justify-center mt-8">
                    <a
                      href={professor.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-700 text-white px-12 py-6 rounded-lg hover:bg-blue-800 transition-colors text-xl font-medium"
                    >
                      [홈페이지]
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Detailed Information */}
              <div className="space-y-12">
                {/* Education */}
                <div>
                  <h5 className="text-3xl font-bold text-blue-700 mb-6 flex items-center">
                    <GraduationCap className="w-8 h-8 mr-4" />
                    Education
                  </h5>
                  <div className="space-y-4">
                    {professor.education.map((edu, index) => (
                      <p key={index} className="text-gray-700 text-xl">{edu}</p>
                    ))}
                  </div>
                </div>

                {/* Career */}
                <div>
                  <h5 className="text-3xl font-bold text-blue-700 mb-6">Career</h5>
                  <div className="space-y-4">
                    {professor.career.map((career, index) => (
                      <p key={index} className="text-gray-700 text-xl">{career}</p>
                    ))}
                  </div>
                </div>

                {/* Research Interests */}
                <div>
                  <h5 className="text-3xl font-bold text-blue-700 mb-6">Research Interests</h5>
                  <div className="grid grid-cols-1 gap-4">
                    {professor.interests.map((interest, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-3 h-3 bg-blue-700 rounded-full mr-4"></div>
                        <p className="text-gray-700 text-xl">{interest}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}