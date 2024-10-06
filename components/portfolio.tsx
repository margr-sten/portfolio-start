'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  details: string;
  imageUrl: string;
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen); // Toggle the visibility
  };

  const [isProjectModalOpen, setProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[]= [
    {
      title: 'Internship at Tangify',
      description: 'A brief description of Project 1.',
      details: 'Detailed information about Project 1. This project involved making a website and implementing the email sequences ',
      imageUrl: '/images/tangify.png',
    },
    {
      title: 'Havvarsel',
      description: 'App lagd i emnet IN2000.',
      details: 'Detailed information about Project 2. This project involved... ',
      imageUrl: '/images/havvarsel.png',
    },
    {
      title: 'Brukerorientert design',
      description: 'A brief description of Project 3.',
      details: 'Detailed information about Project 3. This project involved... ',
      imageUrl: '/images/Ontime.png',
    },
  ];
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setProjectModalOpen(true);
  };

  const BlogPostCard = ({ title, excerpt, date }: { title: string; excerpt: string; date: string }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{excerpt}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
          Read more <ArrowRight className="ml-1 h-4 w-4" />
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

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Margrethe Stenvaag</h1>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-primary transition">Home</a>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            <a href="#skills" className="hover:text-primary transition">Skills</a>
            <a href="#blog" className="hover:text-primary transition">Blog</a> {/* Added Blog link */}
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden">
            <a href="#home" className="block py-2 px-4 hover:bg-accent" onClick={toggleMenu}>Home</a>
            <a href="#projects" className="block py-2 px-4 hover:bg-accent" onClick={toggleMenu}>Projects</a>
            <a href="#skills" className="block py-2 px-4 hover:bg-accent" onClick={toggleMenu}>Skills</a>
            <a href="#blog" className="block py-2 px-4 hover:bg-accent" onClick={toggleMenu}>Blog</a> {/* Added Blog link */}
            <a href="#contact" className="block py-2 px-4 hover:bg-accent" onClick={toggleMenu}>Contact</a>
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
            <p className="text-xl mb-8">Informatic master student</p>
            <button onClick={toggleAbout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              About me
            </button>
          </div>
        </section>

        {isAboutOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-4">About Me</h3>
              <p className="text-gray-700">
                Hei! Jeg heter Margrethe Stenvaag, er 24 år gammel og fra Oslo. Jeg tar for øyeblikket en master i Informatikk: design, bruk og interaksjon ved UiO.
                Fra tidligere har jeg bachelor i akkurat det samme som jeg tar master i nå. 
                Mine interesser innen fagfeltet er: UU, front-end utvikling og brukeropplevelse. 
                Ellers når jeg ikke sitter på skolen og leser, så er jeg det mange vil kalle en klassisk sportsidiot. 
                Jeg spiller fotball og får med meg så og si alt av sport som går på TV. 
              </p>
              <button onClick={toggleAbout} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
                Close
              </button>
            </div>
          </div>
        )}

        <section id="projects" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                      className="text-blue-600 hover:underline"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {isProjectModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-700 mb-4">{selectedProject.details}</p>
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                width={400}
                height={200}
                className="mb-4"
              />
              <button
                onClick={() => setProjectModalOpen(false)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <section id="skills" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS', 'Docker'].map((skill) => (
            <div key={skill} className="bg-white rounded-lg shadow-md p-4 text-center">
              <span className="font-semibold">{skill}</span>
            </div>
           ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogPostCard key={index} title={post.title} excerpt={post.excerpt} date={post.date} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Ta kontakt med meg!</h2>
            <div className="max-w-md mx-auto">
              <p className="text-center mb-4">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
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

      <footer className="bg-background text-center py-4">
        <p>&copy; 2024 Margrethe Stenvaag. All rights reserved.</p>
      </footer>
    </div>
  )
}
