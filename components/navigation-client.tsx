"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const pathname = usePathname()
  const router = useRouter()

  // 현재 경로를 기반으로 활성 섹션 결정
  const getActiveSection = () => {
    if (pathname === '/') return 'home'
    if (pathname.startsWith('/about')) return 'about'
    if (pathname.startsWith('/board')) return 'board'
    if (pathname.startsWith('/members')) return 'members'
    if (pathname.startsWith('/publications')) return 'publications'
    if (pathname.startsWith('/contact')) return 'contact'
    return 'home'
  }

  const activeSection = getActiveSection()
  
  const menuItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { 
      id: "members", 
      label: "Members", 
      path: "/members",
      dropdown: [
        { label: "Professor", path: "/members/professor" },
        { label: "Researchers", path: "/members/researchers" },
        { label: "IST Alumni", path: "/members/graduates" },
      ]
    },
    { id: "publications", label: "Publications", path: "/publications" },
    { 
      id: "board", 
      label: "Board", 
      path: "/board",
      dropdown: [
        { label: "News", path: "/board/news" },
        { label: "Gallery", path: "/board/gallery" },
      ]
    },
    { id: "contact", label: "Contact", path: "/contact" },
  ]

  const handleMouseEnter = (itemId: string) => {
    setOpenDropdown(itemId)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  return (
    <nav className="fixed top-0 w-full bg-blue-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <button
              className="text-xl font-bold hover:text-blue-300 transition-colors focus:outline-none"
              onClick={() => router.push("/")}
            >
              IST Lab
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => router.push(item.path)}
                  className={`px-3 py-2 text-lg font-bold transition-colors focus:outline-none ${
                    activeSection === item.id ? "text-white font-bold" : "text-blue-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>

          {/* University Info */}
          <div className="hidden md:block text-right flex-shrink-0">
            <div className="text-sm">Kunsan National University</div>
            <div className="text-xs opacity-80">Software Department</div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Full Width Dropdown Menu */}
        {openDropdown === 'board' && (
          <div className="absolute left-0 right-0 top-full bg-blue-800 z-50 animate-dropdown">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex space-x-8">
                <div className="space-y-3">
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                    BOARD
                  </h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        router.push('/board/news')
                        setOpenDropdown(null)
                      }}
                      className="block text-blue-200 hover:text-white transition-colors text-sm focus:outline-none"
                    >
                      News
                    </button>
                    <button
                      onClick={() => {
                        router.push('/board/gallery')
                        setOpenDropdown(null)
                      }}
                      className="block text-blue-200 hover:text-white transition-colors text-sm focus:outline-none"
                    >
                      Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      router.push(item.path)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`block px-3 py-2 text-lg font-bold transition-colors focus:outline-none ${
                      activeSection === item.id ? "text-white font-bold" : "text-blue-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            router.push(dropdownItem.path)
                            setIsMobileMenuOpen(false)
                          }}
                          className="block px-3 py-2 text-sm text-blue-200 hover:text-white transition-colors focus:outline-none"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}