import { Mail } from "lucide-react"

export default function GraduatesPage() {
  const graduates = [
    {
      name: "졸업생 1",
      image: "/placeholder.svg?height=200&width=200",
      research: "빅데이터 처리",
      email: "graduate1@example.com",
      graduation: "2023년 졸업",
      currentPosition: "삼성전자 연구원",
    },
    {
      name: "졸업생 2",
      image: "/placeholder.svg?height=200&width=200",
      research: "머신러닝",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "네이버 개발자",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Alumni</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {graduates.map((person, personIndex) => (
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
              <p className="text-gray-600 mb-2">{person.research}</p>
              <p className="text-sm text-gray-500 mb-2">{person.graduation}</p>
              <p className="text-sm text-blue-600 font-medium mb-3">{person.currentPosition}</p>
              <div className="flex items-center justify-center text-gray-600">
                <Mail className="w-5 h-5 mr-2" />
                <span>{person.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}