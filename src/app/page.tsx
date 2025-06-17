"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Star, Heart, Code, Video, Database, Award, ChevronDown } from 'lucide-react';
type VisibilityState = {
  skills: boolean;
  research: boolean;
  [key: string]: boolean; // For any other potential sections
};

const Portfolio = () => {
 const [isVisible, setIsVisible] = useState<VisibilityState>({
  skills: false,
  research: false
});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, color: 'bg-yellow-300' },
    { name: 'React.js', level: 85, color: 'bg-blue-300' },
    { name: 'Next.js', level: 80, color: 'bg-gray-800' },
    { name: 'Node.js', level: 85, color: 'bg-green-400' },
    { name: 'MongoDB', level: 75, color: 'bg-green-500' },
    { name: 'Python', level: 65, color: 'bg-blue-500' },
    { name: 'Content Creation', level: 88, color: 'bg-pink-400' },
    { name: 'Data Science', level: 60, color: 'bg-purple-400' }
  ];

  const projects = [
    {
      title: 'Eco-Sync Waste Management',
      description: 'Full-stack waste management system with billing features and transport management.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      achievement: '2nd in Code Samurai Hackathon',
      color: 'bg-green-100 border-green-300'
    },
    {
      title: 'SUST Autorickshaw System',
      description: 'Automated management system for university transport with scheduling and payment features.',
      tech: ['React.js', 'Node.js', 'MySQL', 'Express.js'],
      achievement: 'Project 350 Implementation',
      color: 'bg-blue-100 border-blue-300'
    },
    {
      title: 'Twitter Clone with Chat',
      description: 'Real-time social media platform with WebSocket chat, OAuth, and email verification.',
      tech: ['Next.js', 'MongoDB', 'WebSockets', 'OAuth'],
      achievement: 'Internship Project',
      color: 'bg-purple-100 border-purple-300'
    }
  ];

  const achievements = [
    { year: '2024', title: 'Code Samurai Finalist', desc: 'Score: 89/100, 2nd in Preliminary' },
    { year: '2023', title: 'DU ITverse Top 10', desc: 'API Category, 150+ teams' },
    { year: '2023', title: 'IEEE Branch Fest', desc: '1st Runners-up, Project Showcase' },
    { year: '2020-24', title: '500+ Problems Solved', desc: 'Multiple competitive platforms' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Promi ✨
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-bounce mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center text-6xl">
              🌸
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Promi Mojumder
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Software Engineer 💻 | Content Creator 🎥 | Data Science Explorer 📊
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-pink-500" />
              <span>Sylhet, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-5 h-5 text-purple-500" />
              <span>(+880) 171-062-8068</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:promimojumder8@gmail.com" className="p-3 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors">
              <Mail className="w-6 h-6 text-pink-600" />
            </a>
            <a href="https://github.com/PromiMojumder38" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a href="https://linkedin.com/in/promimojumder" className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
              <Linkedin className="w-6 h-6 text-blue-600" />
            </a>
          </div>
          <ChevronDown className="w-8 h-8 mx-auto text-gray-400 animate-pulse" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            About Me ✨
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Currently Working On 🚀</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-pink-500" />
                    <span>Software Engineer Intern at Shellbeehaken</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-purple-500" />
                    <span>YouTube Content Creator for Tech Topics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-blue-500" />
                    <span>Exploring Python for Data Science Research</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-green-500" />
                    <span>Freelancing & Content Creation at SeptaAI</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-purple-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Education 🎓</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-purple-600">B.Sc. Software Engineering</h4>
                    <p className="text-gray-600">SUST, Sylhet • CGPA: 3.80</p>
                    <p className="text-sm text-gray-500">Graduating June 2025</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-600">Thesis Project</h4>
                    <p className="text-gray-600 text-sm">Multiclass Sentiment Analysis of Bengali Bhagavad Gita using BERT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise 💫
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible.skills ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
            Featured Projects 🎨
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${project.color} backdrop-blur-sm rounded-2xl p-6 border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="font-bold text-lg text-gray-800">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/60 rounded-full text-xs font-medium text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
                  <Award className="w-4 h-4" />
                  <span>{project.achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section id="youtube" className="py-16 px-6 bg-gradient-to-r from-red-50 to-pink-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
            YouTube Channel 🎥
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-red-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-red-500 rounded-full p-3">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800">Tech Content Creator</h3>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <p className="text-lg leading-relaxed">
                      Creating engaging tech content to help fellow developers learn and grow in their journey.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-red-600">Tech Tutorials</div>
                        <div className="text-sm text-gray-600">Programming Guides</div>
                      </div>
                      <div className="bg-pink-50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-pink-600">Project Reviews</div>
                        <div className="text-sm text-gray-600">Code Walkthroughs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-200">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                    <span className="text-2xl">🎬</span>
                    Content Creation Skills
                  </h3>
                  <div className="space-y-4">
                    {[
                      { skill: 'Video Editing', desc: 'Professional editing with smooth transitions', icon: '✂️' },
                      { skill: 'Voice Over', desc: 'Clear narration and explanation', icon: '🎙️' },
                      { skill: 'Content Planning', desc: 'Structured tutorials and guides', icon: '📝' },
                      { skill: 'Tech Communication', desc: 'Making complex topics simple', icon: '💡' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-800">{item.skill}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Research & Data Science 🔬
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Current Research */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-blue-600 rounded-full p-3">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Current Research Focus</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-xl font-semibold text-blue-700 mb-2">Thesis: Bengali NLP with BERT</h4>
                      <p className="text-gray-700 mb-3">Multiclass Sentiment Analysis of Bengali Translations of the Bhagavad Gita using BERT model</p>
                      <div className="flex flex-wrap gap-2">
                        {['NLP', 'BERT', 'Bengali Language', 'Sentiment Analysis', 'Machine Learning'].map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="text-xl font-semibold text-purple-700 mb-2">Python Data Science Exploration</h4>
                      <p className="text-gray-700 mb-3">Currently learning advanced Python libraries and data analysis techniques for research applications</p>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Data Visualization'].map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-200">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                    <span className="text-2xl">🏢</span>
                    Current Opportunities
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-2">Datakothon Internship</h4>
                      <p className="text-blue-700 text-sm">Seeking researcher internship position</p>
                      <p className="text-blue-600 text-xs mt-2">Focus: Data analysis and research methodologies</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                      <h4 className="font-bold text-purple-800 mb-2">Freelancing Course</h4>
                      <p className="text-purple-700 text-sm">Participating in professional development</p>
                      <p className="text-purple-600 text-xs mt-2">Enhancing research and consulting skills</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Skills */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-200">
                  <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                    <span className="text-xl">🧠</span>
                    Research Skills
                  </h3>
                  <div className="space-y-4">
                    {[
                      { skill: 'Data Collection', level: 75, color: 'bg-blue-400' },
                      { skill: 'Statistical Analysis', level: 70, color: 'bg-indigo-400' },
                      { skill: 'Machine Learning', level: 65, color: 'bg-purple-400' },
                      { skill: 'Research Writing', level: 80, color: 'bg-pink-400' }
                    ].map((skill) => (
                      <div key={skill.skill}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-gray-700">{skill.skill}</span>
                          <span className="text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                            style={{
                              width: isVisible.research ? `${skill.level}%` : '0%'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                    <span className="text-xl">🎯</span>
                    Research Goals
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Complete BERT-based sentiment analysis thesis</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Master Python data science stack</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Contribute to NLP research community</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">Publish research findings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-6 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Achievements 🏆
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-pink-200 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-pink-400 to-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">
                    {achievement.year}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{achievement.title}</h3>
                    <p className="text-gray-600 text-sm">{achievement.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
            Let&apos;s Connect! 💌
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I&apos;m always excited to collaborate on new projects, discuss tech, or chat about content creation!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="mailto:promimojumder8@gmail.com"
              className="flex items-center gap-3 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a
              href="https://linkedin.com/in/promimojumder"
              className="flex items-center gap-3 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/PromiMojumder38"
              className="flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-pink-400" /> by Promi Mojumder
          </p>
          <p className="text-gray-400 text-sm mt-2">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;