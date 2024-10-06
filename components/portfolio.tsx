'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const ProjectCard = ({ title, description, tags }: { title: string; description: string; tags: string[] }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {tag}
        </span>
      ))}
    </div>
  </div>
)

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

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about')

  const skills = [
    'Python', 'Java', 'JavaScript', 'React', 'Node.js', 
    'Data Structures', 'Algorithms', 'Machine Learning',
    'Database Management', 'Web Development'
  ]

  const projects = [
    {
      title: 'AI Chatbot',
      description: 'Developed an AI-powered chatbot using natural language processing techniques.',
      tags: ['Python', 'NLP', 'Machine Learning']
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Created an interactive dashboard for visualizing complex datasets.',
      tags: ['React', 'D3.js', 'Node.js']
    },
    {
      title: 'Mobile Health App',
      description: 'Built a cross-platform mobile app for tracking personal health metrics.',
      tags: ['React Native', 'Firebase', 'HealthKit']
    }
  ]

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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">Margrethe Stenvaag</span>
            <div className="flex space-x-4">
              {['About', 'Skills', 'Projects', 'Blog'].map((item) => (
                <button
                  key={item}
                  className={`${
                    activeTab === item.toLowerCase()
                      ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  } font-medium transition-colors`}
                  onClick={() => setActiveTab(item.toLowerCase())}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        {activeTab === 'about' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Margrethe Stenvaag"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
              <div className="max-w-2xl">
                <p className="mb-4">
                  Hello! I'm Margrethe Stenvaag, an enthusiastic informatics student with a passion for solving complex problems through technology. My journey in the world of computer science has been driven by curiosity and a desire to make a positive impact.
                </p>
                <p className="mb-4">
                  I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in Vim's keystroke commands and tabs' flexibility for personal viewing preferences. This extends to my support for static typing, where its early error detection ensures cleaner code.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest developments in AI and machine learning, contributing to open-source projects, or writing about tech on my blog. I'm always eager to learn and take on new challenges in the ever-evolving field of informatics.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'skills' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                  {skill}
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>
        )}

        {activeTab === 'blog' && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.title} {...post} />
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">© 2023 Margrethe Stenvaag. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}