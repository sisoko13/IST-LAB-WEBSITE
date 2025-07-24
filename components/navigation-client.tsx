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
    { 
      id: "about", 
      label: "About", 
      path: "/about",
      dropdown: [
        { label: "인사말", path: "/about" },
        { label: "비전 및 연혁", path: "/about" },
        { label: "Research Areas", path: "/about" },
        { label: "Career Map", path: "/about" },
        { label: "Lectures", path: "/about" },
      ]
    },
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
    { 
      id: "publications", 
      label: "Publications", 
      path: "/publications",
      dropdown: [
        { label: "Projects", path: "/publications/projects" },
        { label: "Publications", path: "/publications" },
      ]
    },
    { 
      id: "board", 
      label: "Board", 
      path: "/board",
      dropdown: [
        { label: "News", path: "/board/news" },
      ]
    },
    { 
      id: "contact", 
      label: "Contact", 
      path: "/contact",
      dropdown: [
        { label: "Gallery", path: "/board/gallery" },
      ]
    },
  ]

  const handleMouseEnter = (itemId: string) => {
    setOpenDropdown(itemId)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  return (
    <nav className="fixed top-0 w-full bg-blue-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              className="text-xl font-bold hover:text-blue-300 transition-colors"
              onClick={() => router.push("/")}
            >
              IST Lab
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => router.push(item.path)}
                  className={`px-3 py-2 text-sm font-medium transition-colors focus:outline-none ${
                    activeSection === item.id ? "text-white font-bold" : "text-blue-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>

          {/* University Info */}
          <div className="hidden md:block text-right">
            <div className="text-sm">Kunsan National University</div>
            <div className="text-xs opacity-80">Software Department</div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Full Width Dropdown Menu */}
        {openDropdown && (
          <div className="absolute left-0 right-0 top-full bg-blue-800 shadow-lg z-50 animate-dropdown">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-6 gap-8">
                {menuItems.map((item) => (
                  <div key={item.id} className="space-y-3">
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wide">
                      {item.label}
                    </h3>
                    {item.dropdown && (
                      <div className="space-y-2">
                        {item.dropdown.map((dropdownItem, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              router.push(dropdownItem.path)
                              setOpenDropdown(null)
                            }}
                            className="block text-blue-200 hover:text-white transition-colors text-sm"
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
                    className={`block px-3 py-2 text-base font-medium transition-colors focus:outline-none ${
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