"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import NewsSection from "@/components/news-section"
import MembersSection from "@/components/members-section"
import PublicationsSection from "@/components/publications-section"
import JournalPapersSection from "@/components/journal-papers-section"
import ConferencePapersSection from "@/components/conference-papers-section"
import PatentsSection from "@/components/patents-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function ClientHomePage() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="pt-16">
        {activeSection === "home" && <HeroSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "news" && <NewsSection />}
        {activeSection === "members" && <MembersSection />}
        {activeSection === "publications" && <PublicationsSection />}
        {activeSection === "publications-journal" && <JournalPapersSection />}
        {activeSection === "publications-conference" && <ConferencePapersSection />}
        {activeSection === "publications-patents" && <PatentsSection />}
        {activeSection === "publications-projects" && <ProjectsSection />}
        {activeSection === "contact" && <ContactSection />}
      </main>

      <Footer />
    </div>
  )
}