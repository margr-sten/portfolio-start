'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Moon, Sun, Globe, ChevronLeft } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  details: string;
  imageUrl: string;
}

interface Language {
  [key: string]: {
    [key: string]: string;
  };
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isProjectModalOpen, setProjectModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [language, setLanguage] = useState<'en' | 'no'>('no')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen)
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'no' : 'en')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'blog', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects: Project[] = [
    {
      title: 'Internship at Tangify',
      description: 'Internship in Boston with Gründerskolen.',
      details: 'Sommeren 2024 dro jeg til Boston med Gründerskolen og hadde et internship i start-upen Tangify. Der fikk jeg ansvaret for å implementere email-sekvenseringen. Det inkluderte å skrive de ulike mailene, samt designet Jeg  alle e-postene fra bunn av, med fokus på å gi verdi til mottakerne, opprettholde kundeengasjement og sikre effektiv kommunikasjon med potensielle og eksisterende kunder. Jeg brukte React for å kode designet og Python for å implementere utsendingen av mailene fra nettsiden.Målet var å bygge en nettside som reflekterte Tangifys kjerneverdier og AI-drevne løsninger innen patentering, samtidig som den var brukervennlig og optimalisert for å konvertere besøkende til kunder.Designprosessen startet med en dyp forståelse av målgruppen  potensielle kunder som ofte var små bedrifter eller individuelle oppfinnere som søkte en mer effektiv og teknologisk avansert måte å håndtere patenteringsprosessen på. For å imøtekomme dette fokuserte jeg på å utvikle et design som kommuniserte enkelhet og tillit. Nettsiden ble delt inn i tydelige seksjoner som forklarte Tangifys tjenester, fordelene med deres AI-baserte løsninger, og hvordan disse kunne effektivisere og forbedre patenteringsprosessen. Navigasjonen ble strukturert for å sikre at brukerne enkelt kunne finne relevant informasjon uten å bli overveldet. Jeg integrerte også call-to-actions (CTAs) på strategiske steder for å oppfordre til kontakt, registrering og videre utforskning av tjenestene. Link til figma: https://www.figma.com/design/QOXYBukwcTNnkh42y3JEiO/Tangify-website?node-id=0-1&t=a2mUOUBauHCnzWHk-1 .Github koden til email designet: https://github.com/margr-sten/react-email-starter',
      imageUrl: '/images/tangify.png',
    },
    {
      title: 'Havvarsel',
      description: 'App lagd i emnet IN2000.',
      details: 'Detailed information about Project 2. Havvarsel was an exciting project developed as part of the IN2000 course. It is a mobile application designed to provide accurate and timely sea weather forecasts for coastal areas in Norway. The app integrates data from multiple sources to offer users comprehensive information about wave heights, wind speeds, and other relevant maritime conditions. This project allowed me to delve into mobile app development, API integration, and data visualization techniques.',
      imageUrl: '/images/havvarsel.png',
    },
    {
      title: 'Brukerorientert design',
      description: 'A brief description of Project 3.',
      details: 'Detailed information about Project 3. The Brukerorientert design (User-Oriented Design) project was a comprehensive study in creating user-centric digital solutions. This project involved conducting user research, creating personas, developing wireframes and prototypes, and iterating based on user feedback. The final product was a mobile application designed to help students manage their time and tasks more effectively. This project honed my skills in UX/UI design, user testing, and the principles of human-computer interaction.',
      imageUrl: '/images/Ontime.png',
    },
  ]

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setProjectModalOpen(true)
  }

  const BlogPostCard = ({ title, excerpt, date }: { title: string; excerpt: string; date: string }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
          {translations[language].readMore} <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  )

  const blogPosts = [
    {
      title: 'The Future of AI in Healthcare',
      excerpt: 'Exploring the potential applications and ethical considerations of AI in the medical field.',
      date: 'June 15, 2023'
    },
    {
      title: 'Optimizing Algorithms: A Deep Dive',
      excerpt: 'Analyzing various techniques to improve algorithm efficiency and performance.',
      date: 'May 22, 2023'
    },
    {
      title: 'Building Scalable Web Applications',
      excerpt: 'Best practices and architectures for creating web apps that can handle millions of users.',
      date: 'April 10, 2023'
    }
  ]

  const translations: Language = {
    en: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      blog: 'Blog',
      contact: 'Contact',
      aboutMe: 'About me',
      readMore: 'Read more',
      contactMe: 'Get in touch with me!',
      openToOpportunities: "I'm always open to new opportunities and collaborations. Feel free to reach out!",
      aboutMeContent: "Hi! My name is Margrethe Stenvaag, I'm 24 years old and from Oslo. I'm currently pursuing a master's degree in Informatics: design, use, and interaction at UiO. I previously completed a bachelor's degree in the same field. My interests within the field include: UU, front-end development, and user experience. When I'm not at school studying, I'm what many would call a classic sports enthusiast. I play football and follow almost all sports on TV.",
    },
    no: {
      home: 'Hjem',
      projects: 'Prosjekter',
      skills: 'Ferdigheter',
      blog: 'Blogg',
      contact: 'Kontakt',
      aboutMe: 'Om meg',
      readMore: 'Les mer',
      contactMe: 'Ta kontakt med meg!',
      openToOpportunities: 'Jeg er alltid åpen for nye muligheter og samarbeid. Ta gjerne kontakt!',
      aboutMeContent: 'Hei! Jeg heter Margrethe Stenvaag, er 24 år gammel og fra Oslo. Jeg tar for øyeblikket en master i Informatikk: design, bruk og interaksjon ved UiO. Fra tidligere har jeg bachelor i akkurat det samme som jeg tar master i nå. Mine interesser innen fagfeltet er: UU, front-end utvikling og brukeropplevelse. Ellers når jeg ikke sitter på skolen og leser, så er jeg det mange vil kalle en klassisk sportsidiot. Jeg spiller fotball og får med meg så og si alt av sport som går på TV.',
    },
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-background text-foreground dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Margrethe Stenvaag</h1>
            <div className="flex items-center space-x-4">
              <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle language">
                <Globe className="w-5 h-5" />
              </button>
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" aria-label="Toggle dark mode">
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <div className="hidden md:flex space-x-4">
                {['home', 'projects', 'skills', 'blog', 'contact'].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className={`hover:text-primary transition ${activeSection === section ? 'text-primary font-bold' : ''}`}
                  >
                    {translations[language][section]}
                  </a>
                ))}
              </div>
              <button onClick={toggleMenu} className="md:hidden" aria-label="Toggle menu">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </nav>
          {isMenuOpen && (
            <div className="md:hidden">
              {['home', 'projects', 'skills', 'blog', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block py-2 px-4 hover:bg-accent"
                  onClick={toggleMenu}
                >
                  {translations[language][section]}
                </a>
              ))}
            </div>
          )}
        </header>

        <main className="pt-16">
          <section id="home" className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/images/profile.JPG"  
                alt="Margrethe Stenvaag"
                width={300}
                height={300}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="text-4xl font-bold mb-4">Margrethe Stenvaag</h2>
              <p className="text-xl mb-8">{language === 'en' ? 'Informatics master student' : 'Informatikk masterstudent'}</p>
              <button
                onClick={toggleAbout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {translations[language].aboutMe}
              </button>
            </div>
          </section>

          <div
            className={`fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isAboutOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}
          >
            <div className="p-8 h-full overflow-y-auto">
              <button
                onClick={toggleAbout}
                className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Close about me"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold mb-4 mt-8">{translations[language].aboutMe}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {translations[language].aboutMeContent}
              </p>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">My Interests</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>User Experience (UX) Design</li>
                  <li>Front-end Development</li>
                  <li>Accessibility (UU)</li>
                  <li>Sports (Football)</li>
                </ul>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Education</h4>
                <p className="mb-2">Master's in Informatics: Design, Use, and Interaction - University of Oslo</p>
                <p>Bachelor's in Informatics: Design, Use, and Interaction - University of Oslo</p>
              </div>
            </div>
          </div>

          <section id="projects" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">{translations[language].projects}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <button
                        onClick={() => openProjectModal(project)}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {translations[language].readMore}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {isProjectModalOpen && selectedProject && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={() => setProjectModalOpen(false)} // Close modal when clicking outside
            >
              <div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the content
              >
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    width={400}
                    height={200}
                    className="w-full h-auto object-cover max-h-80 max-w-full" // Ensure the image doesn't exceed screen size
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.details}</p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setProjectModalOpen(false)}
                    className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-300 transform hover:scale-105"
                  >
                    {language === 'en' ? 'Close' : 'Lukk'}
                  </button>
                </div>
              </div>
            </div>
          )}

          <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">{translations[language].skills}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS', 'Docker'].map((skill) => (
                  <div key={skill} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 text-center transform hover:scale-105 transition duration-300">
                    <span className="font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="blog" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">{translations[language].blog}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <BlogPostCard key={index} title={post.title} excerpt={post.excerpt} date={post.date} />
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-16 bg-accent dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center">{translations[language].contactMe}</h2>
              <div className="max-w-md mx-auto">
                <p className="text-center mb-4">
                  {translations[language].openToOpportunities}
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="https://github.com/margr-sten" className="text-foreground hover:text-primary transition">
                    <Github className="w-6 h-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/margrethe-stenvaag-920b94235/" className="text-foreground hover:text-primary transition">
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="mailto:msten00@gmail.com" className="text-foreground hover:text-primary transition">
                    <Mail className="w-6 h-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-background dark:bg-gray-900 text-center py-4">
          <p>&copy; 2024 Margrethe Stenvaag. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}