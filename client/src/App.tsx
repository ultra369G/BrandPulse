import React from 'react';

export default function App() {
  return (
    <div>
      {/* NAVIGATION */} 
      <header>
        <div className="container">
          <nav>
            <a href="#home" className="logo">GK.DEV</a>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */} 
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-content">
              <p className="eyebrow">ICT Graduate | Aspiring Software Engineer</p>
              <h1>Hello, I'm <span>George Kariuki.</span></h1>
              <p className="hero-description">
                I am an Information and Communication Technology graduate interested in software development, backend systems, artificial intelligence and building practical technology solutions.
              </p>
              <div className="buttons">
                <a href="#projects" className="btn btn-primary">Explore My Projects</a>
                <a href="mailto:egroegkariuki@gmail.com" className="btn btn-outline">Contact Me</a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */} 
        <section id="about">
          <div className="container">
            <div className="section-heading">
              <p>Introduction</p>
              <h2>About Me</h2>
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>I am an Information and Communication Technology graduate from Laikipia University with an interest in software engineering, application development and technology-driven problem solving.</p>
                <p>My practical experience includes working with IT personnel and other departments during my industrial attachment, where I gained exposure to IT support, data collection, information management and day-to-day technical operations.</p>
                <p>I have also worked on chatbot applications myself using different technology stacks, exploring application logic, data handling, user interaction and administrative functionality. I admire the idea of AI running locally in our gadgets; with this, most of my projects are intended to run locally with user personal data.</p>
                <p>I am continuously developing my technical skills through practical projects, experimentation and independent learning.</p>
              </div>
              <div className="info-card">
                <h3>Quick Information</h3>
                <p><strong>Name:</strong> George Kariuki Kago</p>
                <p><strong>Location:</strong> Githunguri, Kiambu, Kenya</p>
                <p><strong>Education:</strong> BSc Information and Communication Technology</p>
                <p><strong>University:</strong> Laikipia University</p>
                <p><strong>Graduation:</strong> December 2025</p>
                <p><strong>Career Focus:</strong> Software Engineering</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */} 
        <section id="skills">
          <div className="container">
            <div className="section-heading">
              <p>Technical Background</p>
              <h2>Technical Skills</h2>
              <p className="intro">Technologies and tools I have worked with or explored through academic learning and personal projects.</p>
            </div>
            <div className="skills-grid">
              {['Python', 'JavaScript', 'Node.js', 'HTML5', 'CSS3', 'SQL', 'MySQL', 'JSON', 'Git & GitHub', 'Linux Fundamentals', 'Data Management', 'IT Support'].map(s => (
                <div key={s} className="skill">{s}</div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */} 
        <section className="projects" id="projects">
          <div className="container">
            <div className="section-heading">
              <p>Selected Work</p>
              <h2>My Projects</h2>
              <p className="intro">A selection of personal software development projects demonstrating my experience with different technologies.</p>
            </div>

            {/* PROJECT 1 */} 
            <article className="project-card">
              <div className="project-content">
                <div className="project-top">
                  <h3>01. Lily Model One Chatbot Application</h3>
                  <span className="status">Project</span>
                </div>
                <p className="project-description">A chatbot application developed using Node.js and frontend web technologies (HTML, JS, CSS). The project focuses on user interaction, chatbot responses and the handling of structured application data.</p>
                <ul className="feature-list">
                  <li>Chat-based user interface.</li>
                  <li>Backend application logic using Node.js.</li>
                  <li>Structured data handling using JSON.</li>
                  <li>Web interface developed with HTML and CSS.</li>
                </ul>
                <div className="tech-list">
                  {['Node.js', 'JavaScript', 'HTML', 'CSS', 'JSON'].map(t => <span key={t} className="tech">{t}</span>)}
                </div>
                <h4 className="gallery-title">Project Screenshots</h4>
                <div className="gallery">
                  <img className="project-image" src="https://i.ibb.co/R4k4DWwB/3.png" alt="Chatbot conversation" loading="lazy" />
                  <img className="project-image" src="https://i.ibb.co/LzjTLK6q/3a.png" alt="Lily chatbot interface" loading="lazy" />
                </div>
              </div>
            </article>

            {/* PROJECT 2 */} 
            <article className="project-card">
              <div className="project-content">
                <div className="project-top">
                  <h3>02. Lily-🌸 Chatbot & Management System</h3>
                  <span className="status">Project</span>
                </div>
                <p className="project-description">A Python-based chatbot application with database integration and additional administrative and communication functionality. The project combines a web-based interface with structured data management.</p>
                <ul className="feature-list">
                  <li>Chatbot functionality implemented using Python, Node.js, HTML, CSS.</li>
                  <li>SQL-based data storage and management.</li>
                  <li>Email information storage and management.</li>
                  <li>Administrative section for managing application operations.</li>
                </ul>
                <div className="tech-list">
                  {['Python', 'SQL', 'HTML', 'CSS', 'JSON'].map(t => <span key={t} className="tech">{t}</span>)}
                </div>
                <h4 className="gallery-title">Project Screenshots</h4>
                <div className="gallery">
                  <img className="project-image" src="https://i.ibb.co/b9PKHqg/2.png" alt="Chatbot interface" loading="lazy" />
                  <img className="project-image" src="https://i.ibb.co/cc2w7nhg/1b.png" alt="Chatbot conversation" loading="lazy" />
                  <img className="project-image" src="https://i.ibb.co/zVRWB3gX/1.png" alt="Lily chatbot app interface" loading="lazy" />
                </div>
              </div>
            </article>

            {/* LIVE2D */} 
            <article className="live2d-card">
              <div className="project-top">
                <h3>03. Lily – Live2D Avatar Exploration</h3>
                <span className="status status-progress">In Progress</span>
              </div>
              <p>An early-stage development effort exploring the use of Live2D models to introduce a visual avatar to Lily, my personal chatbot project. The work is currently focused on exploring the avatar technology and its potential integration into the chatbot experience.</p>
              <div className="tech-list">
                {['Live2D', 'Avatar Development', 'Application Integration'].map(t => <span key={t} className="tech">{t}</span>)}
              </div>
              <h4 className="gallery-title">Project Screenshots</h4>
              <div className="gallery">
                <img className="project-image" src="https://i.ibb.co/HLTRYjJ9/4.png" alt="Lily avatar interface" loading="lazy" />
              </div>
            </article>
          </div>
        </section>

        {/* EXPERIENCE */} 
        <section id="experience">
          <div className="container">
            <div className="section-heading">
              <p>Professional Background</p>
              <h2>Experience</h2>
            </div>
            <div className="experience-card">
              <h3>ICT Support Intern</h3>
              <p><strong>AFS Holdings Limited</strong> | Nairobi CBD</p>
              <p className="date">Industrial Attachment | 2025</p>
              <p>Worked alongside the IT Manager, team leaders and other staff in supporting daily IT operations and handling company and customer-related information.</p>
              <ul>
                <li>Assisted with collecting, recording and organising company information.</li>
                <li>Supported information accuracy, confidentiality and proper data handling.</li>
                <li>Assisted with troubleshooting computer and technical issues.</li>
                <li>Gained exposure to network configuration and Ethernet cabling.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */} 
        <section className="contact" id="contact">
          <div className="container">
            <div className="section-heading">
              <p>Get In Touch</p>
              <h2>Let's Connect</h2>
            </div>
            <p className="contact-description">I am open to opportunities in software engineering, application development and IT-related roles. Feel free to reach out.</p>
            <div className="contact-links">
              <a href="mailto:egroegkariuki@gmail.com" className="btn btn-primary">Send Me an Email</a>
              <a href="https://github.com/ultra369G" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Visit My GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} George Kariuki Kago. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  );
}