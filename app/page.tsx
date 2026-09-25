"use client";

import Image from "next/image";
import { useState } from "react";

const skills = [
  {
    title: "Artificial Intelligence",
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "Transformers"],
  },
  {
    title: "Python & Data",
    items: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  },
  {
    title: "Deep Learning",
    items: ["TensorFlow", "Keras", "CNNs", "Transfer Learning", "Grad-CAM"],
  },
  {
    title: "Computer Vision",
    items: ["OpenCV", "Image Classification", "Image Processing"],
  },
  {
    title: "Development",
    items: ["JavaScript", "HTML", "CSS", "React Native", "Node.js"],
  },
  {
    title: "Data & Big Data",
    items: ["SQL", "Oracle", "MongoDB", "Hadoop", "MapReduce"],
  },
];

const education = [
  {
    year: "2025 — 2026",
    title: "Master 2 — Artificial Intelligence",
    place: "Béjaïa, Algeria",
    description:
      "Advanced academic training in artificial intelligence, deep learning, computer vision, data analysis and research.",
  },
  {
    year: "2024 — 2025",
    title: "Master 1 — Artificial Intelligence",
    place: "Béjaïa, Algeria",
    description:
      "Training in machine learning, artificial intelligence, data processing and software development.",
  },
  {
    year: "2023 — 2024",
    title: "Licence 3 — Computer Science",
    place: "Béjaïa, Algeria",
    description:
      "Computer science studies with a foundation in programming, databases and software engineering.",
  },
  {
    year: "2022 — 2023",
    title: "Licence 2 — Computer Science",
    place: "Béjaïa, Algeria",
    description:
      "Continued studies in computer science, programming and mathematical foundations.",
  },
  {
    year: "2021 — 2022",
    title: "Licence 1 — Mathematics & Computer Science",
    place: "Béjaïa, Algeria",
    description:
      "Foundation in mathematics and computer science.",
  },
];

const projects = [
  {
    number: "01",
    title: "Automatic Leukemia Classification",
    category: "Master's Final Project",
    description:
      "A computer vision system designed to classify microscopic white blood cell images into ALL, AML and Healthy classes.",
    technologies: ["Python", "TensorFlow", "InceptionV3", "Transformer", "Grad-CAM"],
    featured: true,
  },
  {
    number: "02",
    title: "HeavyTrans",
    category: "Licence Final Project",
    description:
      "A cross-platform mobile application for managing heavy transport requests, connecting clients and drivers through separate interfaces.",
    technologies: ["React Native", "MongoDB"],
    featured: false,
  },
  {
    number: "03",
    title: "Distributed Purchase Analysis",
    category: "Big Data Project",
    description:
      "A distributed data analysis project focused on studying online purchasing behavior and extracting purchasing trends.",
    technologies: ["Hadoop", "MapReduce"],
    featured: false,
  },
  {
    number: "04",
    title: "Deep Learning & Data Mining",
    category: "Academic Project",
    description:
      "Analysis of real-world datasets using preprocessing, visualization and neural-network-based classification.",
    technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
    featured: false,
  },
];

const languages = [
  { name: "French", level: "Professional" },
  { name: "English", level: "Professional" },
  { name: "Arabic", level: "Native" },
  { name: "Kabyle", level: "Native" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">

      {/* Background */}
      <div className="ambient-grid" />
      <div className="ambient-glow ambient-glow-one" />
      <div className="ambient-glow ambient-glow-two" />

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Adam<span>.L</span>
        </a>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero section-container">

        <div className="hero-content">

          <div className="status-line reveal">
            <span className="status-dot" />
            AI ENGINEER / DEEP LEARNING
          </div>

          <p className="hero-kicker reveal delay-1">
            Artificial Intelligence · Computer Vision · Transformers
          </p>

          <h1 className="hero-title reveal delay-2">
            Building intelligent
            <br />
            systems with{" "}
            <span className="gradient-text">AI.</span>
          </h1>

          <p className="hero-description reveal delay-3">
            I&apos;m Adam Lebsir, an Artificial Intelligence engineer
            interested in Machine Learning, Deep Learning, Computer Vision
            and intelligent systems.
          </p>

          <div className="hero-actions reveal delay-4">
            <a href="#projects" className="button-primary">
              Explore my work
              <span>↗</span>
            </a>

            <a
              href="https://github.com/AdamLebs"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              GitHub
            </a>
          </div>

          <div className="hero-meta reveal delay-4">
            <span>Based in Béjaïa, Algeria</span>
            <span className="meta-line" />
            <span>MSc Artificial Intelligence</span>
          </div>

        </div>

        {/* Neural visual */}
        <div className="neural-visual" aria-hidden="true">
          <div className="neural-orbit orbit-one" />
          <div className="neural-orbit orbit-two" />
          <div className="neural-orbit orbit-three" />

          <div className="neural-core">
            <span>AI</span>
          </div>

          <i className="node node-1" />
          <i className="node node-2" />
          <i className="node node-3" />
          <i className="node node-4" />
          <i className="node node-5" />
          <i className="node node-6" />
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section-container section-padding">

        <div className="section-heading">
          <span>01 / ABOUT</span>
          <h2>
            AI Engineer.
            <br />
            <em>Always learning.</em>
          </h2>
        </div>

        <div className="about-grid">

          <div className="about-main">
            <p className="large-text">
              I&apos;m an Artificial Intelligence engineer with a
              Master&apos;s degree in AI, interested in understanding
              intelligent systems and turning ideas into practical
              applications.
            </p>

            <p>
              My academic work has focused on machine learning,
              deep learning, computer vision, data analysis and
              distributed computing. My Master&apos;s final project
              explored automatic classification of white blood cell
              images using deep learning and Transformer-based
              modeling.
            </p>

            <p>
              I&apos;m currently continuing to strengthen my foundations
              in mathematics, machine learning and modern AI architectures
              while building practical projects.
            </p>
          </div>

          <div className="about-cards">

            <div className="info-card">
              <span>FOCUS</span>
              <strong>Artificial Intelligence</strong>
            </div>

            <div className="info-card">
              <span>INTEREST</span>
              <strong>Computer Vision</strong>
            </div>

            <div className="info-card">
              <span>RESEARCH</span>
              <strong>Deep Learning & Transformers</strong>
            </div>

            <div className="info-card">
              <span>APPROACH</span>
              <strong>Learn → Build → Improve</strong>
            </div>

          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section-container section-padding">

        <div className="section-heading">
          <span>02 / EDUCATION</span>
          <h2>
            Academic
            <br />
            <em>foundation.</em>
          </h2>
        </div>

        <div className="timeline">

          {education.map((item) => (
            <div className="timeline-item" key={item.year + item.title}>

              <div className="timeline-marker" />

              <div className="timeline-year">
                {item.year}
              </div>

              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="timeline-place">{item.place}</p>
                <p>{item.description}</p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section-container section-padding">

        <div className="section-heading">
          <span>03 / SELECTED WORK</span>
          <h2>
            Projects that
            <br />
            <em>made me learn.</em>
          </h2>
        </div>

        {/* FEATURED MASTER PROJECT */}
        <article className="featured-project">

          <div className="project-header">

            <div>
              <div className="project-label">
                MASTER&apos;S FINAL PROJECT
              </div>

              <h3>
                Automatic Leukemia
                <br />
                <span>Classification.</span>
              </h3>

              <p className="project-description">
                A deep learning computer vision system for automatically
                classifying microscopic white blood cell images into
                ALL, AML and Healthy classes.
              </p>

              <div className="tech-list">
                {[
                  "Python",
                  "TensorFlow",
                  "InceptionV3",
                  "Transformer",
                  "Grad-CAM",
                ].map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="score-card">
              <span>F1 SCORE</span>
              <strong>98.83%</strong>
              <small>Final experimental result</small>
            </div>

          </div>

          {/* ARCHITECTURE */}
          <div className="architecture-section">

            <div className="mini-label">ARCHITECTURE</div>

            <div className="architecture">

              <div className="architecture-box">
                <span>01</span>
                <strong>Cell Image</strong>
                <small>Input</small>
              </div>

              <div className="architecture-connector">→</div>

              <div className="architecture-split">

                <div className="architecture-box">
                  <span>02</span>
                  <strong>InceptionV3</strong>
                  <small>Local features</small>
                </div>

                <div className="architecture-box">
                  <span>03</span>
                  <strong>Transformer</strong>
                  <small>Global relationships</small>
                </div>

              </div>

              <div className="architecture-connector">→</div>

              <div className="architecture-box">
                <span>04</span>
                <strong>Classification</strong>
                <small>Prediction</small>
              </div>

              <div className="architecture-connector">→</div>

              <div className="architecture-box">
                <span>05</span>
                <strong>Output</strong>
                <small>Healthy / ALL / AML</small>
              </div>

            </div>

            <p className="architecture-note">
              The CNN and Transformer components contribute complementary
              representations: local visual features and global
              relationships within the image.
            </p>

          </div>

          {/* METRICS */}
          <div className="metric-grid">

            <div>
              <span>F1 SCORE</span>
              <strong>98.83%</strong>
            </div>

            <div>
              <span>ACCURACY</span>
              <strong>98.41%</strong>
            </div>

            <div>
              <span>AUC</span>
              <strong>99.74%</strong>
            </div>

            <div>
              <span>CLASSES</span>
              <strong>3</strong>
            </div>

          </div>

          {/* RESULTS */}
          <div className="project-subsection">

            <div className="mini-label">EXPERIMENTAL RESULTS</div>

            <h4>Performance on the test set.</h4>

            <p>
              Training and validation curves were analyzed alongside
              the ensemble confusion matrix to evaluate classification
              performance across ALL, AML and Healthy samples.
            </p>

            <div className="result-grid">

              <div className="image-card">
                <div className="image-card-header">
                  <strong>Accuracy</strong>
                  <span>Training / validation</span>
                </div>

                <div className="image-wrapper white-image">
                  <Image
                    src="/projects/leukemia/accuracy.png"
                    alt="Training and validation accuracy curve"
                    width={628}
                    height={404}
                  />
                </div>
              </div>

              <div className="image-card">
                <div className="image-card-header">
                  <strong>Loss</strong>
                  <span>Training / validation</span>
                </div>

                <div className="image-wrapper white-image">
                  <Image
                    src="/projects/leukemia/loss.png"
                    alt="Training and validation loss curve"
                    width={628}
                    height={405}
                  />
                </div>
              </div>

            </div>

            <div className="image-card large-image-card">

              <div className="image-card-header">
                <strong>Ensemble Confusion Matrix</strong>
                <span>Test set</span>
              </div>

              <div className="image-wrapper white-image centered-image">
                <Image
                  src="/projects/leukemia/confusion-matrix.png"
                  alt="Ensemble confusion matrix on the test set"
                  width={628}
                  height={466}
                />
              </div>

            </div>

          </div>

          {/* GRAD CAM */}
          <div className="project-subsection">

            <div className="mini-label">EXPLAINABILITY</div>

            <h4>Understanding model attention.</h4>

            <p>
              Grad-CAM was used to visualize regions contributing to
              the model&apos;s predictions. The resulting heatmaps
              provide a visual interpretation of the model&apos;s
              activations across ALL, AML and Healthy examples.
            </p>

            <div className="image-card gradcam-card">

              <div className="image-card-header">
                <strong>Grad-CAM</strong>
                <span>Model attention visualization</span>
              </div>

              <div className="image-wrapper white-image">
                <Image
                  src="/projects/leukemia/gradcam.png"
                  alt="Grad-CAM visualization for leukemia classification"
                  width={1405}
                  height={1080}
                />
              </div>

            </div>

          </div>

          {/* METHODOLOGY */}
          <div className="method-grid">

            <div>
              <div className="mini-label">METHODOLOGY</div>

              <h4>
                From visual features to global relationships.
              </h4>

              <p>
                InceptionV3 is used to extract discriminative visual
                representations from blood cell images. Transformer-based
                modeling is then used to capture relationships between
                features before the final classification stage.
              </p>
            </div>

            <div>
              <div className="mini-label">TRAINING</div>

              <ul className="training-list">
                <li><span>Optimizer</span> AdamW</li>
                <li><span>Epochs</span> 120</li>
                <li><span>Batch size</span> 32</li>
                <li><span>Learning rate</span> 3 × 10⁻⁴</li>
                <li><span>Weight decay</span> 1 × 10⁻⁴</li>
                <li><span>Validation</span> Stratified K-Fold</li>
              </ul>
            </div>

          </div>

        </article>

        {/* OTHER PROJECTS */}
        <div className="other-projects">

          <div className="mini-label">OTHER PROJECTS</div>

          <div className="project-list">

            {projects
              .filter((project) => !project.featured)
              .map((project) => (
                <article className="project-row" key={project.number}>

                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-row-main">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <span className="project-arrow">↗</span>

                </article>
              ))}

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section-container section-padding">

        <div className="section-heading">
          <span>04 / TECHNICAL STACK</span>
          <h2>
            Tools for
            <br />
            <em>building AI.</em>
          </h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>

              <div className="skill-card-top">
                <span className="skill-index">
                  {String(skills.indexOf(skill) + 1).padStart(2, "0")}
                </span>

                <h3>{skill.title}</h3>
              </div>

              <div className="skill-items">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* LANGUAGES */}
      <section className="section-container section-padding">

        <div className="section-heading compact-heading">
          <span>05 / LANGUAGES</span>
          <h2>
            Communication
            <br />
            <em>across cultures.</em>
          </h2>
        </div>

        <div className="languages-grid">

          {languages.map((language) => (
            <div className="language-card" key={language.name}>
              <strong>{language.name}</strong>
              <span>{language.level}</span>
            </div>
          ))}

        </div>

      </section>

      {/* LEARNING JOURNEY */}
      <section className="section-container section-padding">

        <div className="learning-panel">

          <div>
            <div className="mini-label">CURRENT DIRECTION</div>

            <h2>
              From fundamentals
              <br />
              to <em>modern AI.</em>
            </h2>

            <p>
              My current learning direction is focused on strengthening
              mathematical foundations, deep learning and modern
              Transformer architectures through theory and implementation.
            </p>
          </div>

          <div className="learning-path">

            <div>
              <span>01</span>
              <strong>Mathematics</strong>
              <small>Linear algebra · calculus · probability</small>
            </div>

            <div>
              <span>02</span>
              <strong>Deep Learning</strong>
              <small>Neural networks · CNNs · optimization</small>
            </div>

            <div>
              <span>03</span>
              <strong>Transformers</strong>
              <small>Attention · architectures · representation</small>
            </div>

            <div>
              <span>04</span>
              <strong>Implementation</strong>
              <small>Build · experiment · understand</small>
            </div>

          </div>

        </div>

      </section>

      {/* RESUME */}
      <section className="section-container section-padding">

        <div className="resume-panel">

          <div>
            <div className="mini-label">RESUME</div>

            <h2>
              A deeper look at
              <br />
              <em>my background.</em>
            </h2>

            <p>
              Education, academic projects, technical skills and
              professional information in one document.
            </p>
          </div>

          <a
            href="/Curriculum_Vitae.pdf"
            target="_blank"
            className="button-primary"
          >
            View CV
            <span>↗</span>
          </a>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div className="contact-inner">

          <div className="mini-label">06 / CONTACT</div>

          <h2>
            Let&apos;s build something
            <br />
            <em>intelligent.</em>
          </h2>

          <p>
            Open to opportunities in Artificial Intelligence,
            Machine Learning, Computer Vision and related fields.
          </p>

          <div className="contact-actions">

            <a
              href="mailto:adamlebsir0@gmail.com"
              className="button-primary"
            >
              Email me
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/AdamLebs"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              GitHub
            </a>

          </div>

          <div className="contact-email">
            adamlebsir0@gmail.com
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer section-container">

        <span>Adam.L</span>

        <span>
          Artificial Intelligence · Béjaïa, Algeria
        </span>

        <span>
          © {new Date().getFullYear()}
        </span>

      </footer>

    </main>
  );
}