import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Mail,
  Linkedin,
  Github,
  Download,
  ChevronRight,
  Code,
  Database,
  BarChart3,
  Brain,
  Award,
  Briefcase,
} from "lucide-react";

const MyPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Apply 'dark' class to HTML Appliquer la classe 'dark' au HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // ✅ Charger le thème sauvegardé au démarrage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "experience",
        "education",
        "projects",
        "skills",
        "leadership",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "leadership", label: "Leadership" },
    { id: "contact", label: "Contact" },
  ];

  const experiences = [
    {
      period: "Sept. 2024 – Sept. 2025",
      role: "Data Scientist – AI Vision Project Manager",
      company: "Groupe BEL",
      location: "Suresnes, France",
      achievements: [
        "Designed and developed consolidated international tracking reports on Power BI",
        "Automated label traceability online using PowerApps, Power Automate, Power BI, and SharePoint",
        "Collected, integrated, and processed data from diverse sources (Power Query)",
        "Drafted Computer Vision specifications in collaboration with business teams",
        "Optimized production line quality via AI vision system (YOLO, PyTorch)",
        "Virtual factory simulation (Plant Simulation)",
      ],
      results:
        "Designed and deployed a unified AI architecture (edge/cloud) for 27 factories, integrating an AI Model Foundry, Dataset Repository, and AI Marketplace. Result: standardized solutions, reduced costs, and accelerated international AI model deployment.",
      stack: [
        "Power BI",
        "PowerApps",
        "Power Automate",
        "SharePoint",
        "YOLO",
        "PyTorch",
        "Plant Simulation",
        "Power Query",
      ],
    },
    {
      period: "Mar. 2024 – Sept. 2024",
      role: "Data Quality Analyst",
      company: "Business France",
      location: "Paris, France",
      achievements: [
        "Facilitated workshops to identify key business indicators",
        "Designed data models, created KPIs and reports (Power BI)",
        "Collected, extracted, and transformed data from various sources",
        "Performed statistical and quantitative data analysis to ensure quality",
        "Implemented quality test protocols and automation (Azure Data Factory)",
        "Contributed to data migration and consistency",
      ],
      results:
        "Scoped requirements, modeled and industrialized KPIs, quality testing, and migration to Azure. Result: more stable dashboards, reduced testing time, and improved cross-application consistency.",
      stack: ["Power BI", "Azure Data Factory", "SQL", "Python", "Excel"],
    },
    {
      period: "June 2023 – Sept. 2023",
      role: "Business Intelligence Analyst",
      company: "Sector Alarm",
      location: "Massy, France",
      achievements: [
        "Identified business needs and prepared data (SQL & Python)",
        "Built and tracked KPIs, implemented dashboards (Power BI & Excel)",
        "Developed and automated weekly reports (Power BI)",
        "Conducted ad hoc analyses and participated in budget construction",
      ],
      results:
        "Established indicators, automated reports, and consolidated data foundation. Result: unified performance view and weekly time savings on reporting.",
      stack: ["Power BI", "SQL", "Python", "Excel"],
    },
  ];

  const projects = [
    {
      category: "AI/ML",
      items: [
        {
          title: "Real-time Hand Gesture Detection for Sign Language",
          description:
            "Developed a system to detect and recognize hand gestures in real-time for sign language interpretation",
          stack: ["OpenCV", "MediaPipe", "TensorFlow"],
          icon: <Brain className="w-6 h-6" />,
        },
        {
          title: "Emotion Detection and Recognition",
          description:
            "Built a facial emotion recognition system capable of identifying human emotions",
          stack: ["Keras", "YOLO"],
          icon: <Brain className="w-6 h-6" />,
        },
        {
          title: "Medical Intelligent Chatbot",
          description:
            "Created an AI-powered medical chatbot for intelligent healthcare assistance",
          stack: ["NLTK", "Transformers", "LangChain", "LLaMA"],
          icon: <Brain className="w-6 h-6" />,
        },
        {
          title: "Movie Recommendation System",
          description:
            "Designed a recommendation engine using collaborative filtering and matrix factorization",
          stack: ["Collaborative Filtering", "Matrix Factorization"],
          icon: <Brain className="w-6 h-6" />,
        },
        {
          title: "Speech Transcription",
          description:
            "Implemented automatic speech-to-text transcription system",
          stack: ["DeepSpeech", "Whisper", "Librosa"],
          icon: <Brain className="w-6 h-6" />,
        },
        {
          title: "Customer Review Sentiment Analysis",
          description:
            "Analyzed customer sentiment from reviews using NLP techniques",
          stack: ["NLTK", "BERT"],
          icon: <Brain className="w-6 h-6" />,
        },
      ],
    },
    {
      category: "Data Engineering & Visualization",
      items: [
        {
          title: "End-to-End Azure Data Pipeline",
          description:
            "Built complete data injection pipeline for Adventure Works and Yahoo data using Microsoft Azure",
          stack: [
            "Azure Data Factory",
            "Databricks",
            "Azure Synapse",
            "Azure Data Lake",
            "Power BI",
          ],
          icon: <Database className="w-6 h-6" />,
        },
        {
          title: "URSAFF Power BI Report",
          description:
            "Created comprehensive Power BI report analyzing URSAFF data",
          stack: ["Power Query", "DAX", "Data Modeling"],
          icon: <BarChart3 className="w-6 h-6" />,
        },
      ],
    },
  ];

  const skills = {
    languages: ["Python", "SQL", "R", "PySpark"],
    dataViz: ["Power BI (Expert)", "Looker Studio", "Excel (Advanced)"],
    etl: ["Azure Data Factory", "Dataiku", "Talend"],
    ml: [
      "PyTorch",
      "Scikit-learn",
      "TensorFlow",
      "YOLO",
      "OpenCV",
      "Roboflow",
      "Label Studio",
      "Librosa",
      "LLM/NLP",
      "Transformers",
      "KNN",
      "Time Series",
      "DINO",
      "RT-DETR",
    ],
    databases: ["SQL Server", "SAP"],
    tools: [
      "Microsoft Azure",
      "Azure DevOps",
      "Azure Data Factory",
      "Azure AI Foundry",
      "Microsoft Fabric",
    ],
    methodologies: ["Agile Scrum", "Kanban"],
  };

  const certifications = [
    "Databricks Fundamentals",
    "Databricks Lakehouse Platform",
    "Dataiku Core Designer",
    "Dataiku Generative AI Practitioner",
    "Dataiku Advanced Designer",
    "Dataiku MLOps Practitioner",
    "Microsoft Power BI – PL300 (in progress)",
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-colors duration-300 bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-xl">JH</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-blue-400 ${
                    activeSection === item.id ? "text-blue-400 font-medium" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full mb-6 bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400">
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Available for opportunities</span>
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Julien{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  HODONOU
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl mb-6 text-gray-400">
                Data Analyst | Data Scientist
              </h2>
              <p className="text-lg mb-8 leading-relaxed text-gray-600 dark:text-gray-300">
                Passionate about data with proven expertise in data analysis,
                machine learning, statistical modeling, and data visualization.
                I master SQL, Python, and other key tools. I have the ability to
                translate business needs into relevant analytical solutions and
                effectively communicate results. I want to leverage my skills
                and experience in service of a dynamic company to contribute to
                its growth by exploiting the value of its data.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:julienhodonou21@gmail.com"
                  className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </a>
                <button
                  onClick={() => window.open("#", "_blank")}
                  className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </button>
              </div>
              <div className="flex space-x-6 mt-8">
                <a
                  href="https://www.linkedin.com/in/julien-hodonou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-6 h-6" />
                </a>

                <a
                  href="https://github.com/JulBiDaBi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mb-4">
                    <span className="text-6xl font-bold text-gray-500">JH</span>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    Professional headshot placeholder
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 px-6 py-4 rounded-xl bg-blue-500 dark:bg-blue-600 text-white shadow-xl">
                <div className="text-3xl font-bold">2+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <Briefcase className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold">Professional Experience</h2>
          </div>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-xl p-8 transition-all hover:shadow-xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                      {exp.role}
                    </h3>
                    <p className="text-xl font-semibold mb-1">{exp.company}</p>
                    <p className="text-gray-500">{exp.location}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-lg mb-4 bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-600/20">
                  <p className="font-medium mb-2 text-blue-600 dark:text-blue-400">
                    Key Results:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.results}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <Award className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl p-8 transition-all hover:shadow-xl bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
              <div className="inline-block px-4 py-2 rounded-full mb-4 bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400">
                2022 - 2024
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Master's in Big Data & Business Intelligence
              </h3>
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
                Université Sorbonne Paris Nord
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Specialized in advanced data analytics, machine learning,
                statistical modeling, and business intelligence solutions.
              </p>
            </div>
            <div className="rounded-xl p-8 transition-all hover:shadow-xl bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
              <div className="inline-block px-4 py-2 rounded-full mb-4 bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400">
                2020 - 2022
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Master's Research in International Economics & Development
              </h3>
              <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
                Université de Kara
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Research-focused program in economic analysis, quantitative
                methods, and development economics.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border-2 transition-all hover:scale-105 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-600"
                >
                  <div className="flex items-start">
                    <Award className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {cert}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-4">
            <Code className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400">
            Personal projects demonstrating expertise in AI/ML, computer vision,
            NLP, and data engineering
          </p>

          {projects.map((category, catIdx) => (
            <div key={catIdx} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((project, projIdx) => (
                  <div
                    key={projIdx}
                    className="rounded-xl p-6 transition-all hover:shadow-2xl hover:scale-105 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-blue-100 dark:bg-blue-600/20">
                      <div className="text-blue-600 dark:text-blue-400">
                        {project.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-4">
            <Database className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold">Technical Skills</h2>
          </div>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400">
            Comprehensive skill set across data analysis, machine learning, and
            business intelligence
          </p>

          {/* Key Strengths */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Key Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Statistical Analysis & Modeling",
                  desc: "Forecasting, classification, and predictive analytics",
                },
                {
                  title: "Data Quality & Structure",
                  desc: "Data validation, consistency checks, and freshness monitoring",
                },
                {
                  title: "Visualization & Reporting",
                  desc: "Power BI, Looker Studio, and advanced Excel dashboards",
                },
                {
                  title: "Automation & Integration",
                  desc: "ETL pipelines, Azure Data Factory, and Dataiku workflows",
                },
                {
                  title: "Cross-team Collaboration",
                  desc: "Translating business needs into technical solutions",
                },
                {
                  title: "Technical Communication",
                  desc: "Presenting insights to stakeholders and documentation",
                },
              ].map((strength, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl transition-all hover:shadow-xl bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <h4 className="font-bold mb-2 text-blue-600 dark:text-blue-400">
                    {strength.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {strength.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl p-8 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg font-medium bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-8 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Data Visualization
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.dataViz.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg font-medium bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-8 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Database className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                ETL & Data Engineering
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.etl.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg font-medium bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="rounded-xl p-8 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Brain className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Machine Learning & AI
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.ml.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-8 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Database className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((db, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg font-medium bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="rounded-xl p-8 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-8 bg-white dark:bg-gray-900">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
                Methodologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.methodologies.map((method, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-lg font-medium bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        id="leadership"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-12">
            <Award className="w-8 h-8 mr-4 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold">Leadership & Community</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl p-8 transition-all hover:shadow-xl bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                Community Involvement
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Active participant in data science communities, sharing
                knowledge and contributing to open-source projects.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Regular contributor to data science forums and Stack
                    Overflow
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Mentor for junior data professionals
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Speaker at local tech meetups
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl p-8 transition-all hover:shadow-xl bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                Professional Development
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Committed to continuous learning and staying at the forefront of
                data science and AI technologies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Pursuing advanced certifications in cloud platforms and AI
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Active in online learning platforms (Coursera, edX, Udacity)
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Researching cutting-edge AI and machine learning techniques
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's
            connect and discuss how we can work together!
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:julienhodonou21@gmail.com"
              className="inline-flex items-center px-8 py-4 rounded-lg font-medium transition-all bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
            >
              <Mail className="w-6 h-6 mr-3" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/julien-hodonou"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-lg font-medium transition-all border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="w-6 h-6 mr-3" />
              LinkedIn
            </a>
            <a
              href="https://github.com/JulBiDaBi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-lg font-medium transition-all border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="w-6 h-6 mr-3" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPortfolio;
