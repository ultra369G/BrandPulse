import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080d18] text-[#f1f5f9] font-sans antialiased">
      <header className="sticky top-0 z-50 bg-[#080d18]/94 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1120px] mx-auto px-[5%] flex items-center justify-between min-h-[72px]">
          <a href="#home" className="text-[21px] font-extrabold text-[#64b5ff]">GK.DEV</a>
          <nav className="flex gap-[25px] list-none text-sm text-[#a7b3c5]">
            <a href="#about" className="hover:text-[#64b5ff] transition">About</a>
            <a href="#skills" className="hover:text-[#64b5ff] transition">Skills</a>
            <a href="#projects" className="hover:text-[#64b5ff] transition">Projects</a>
            <a href="#experience" className="hover:text-[#64b5ff] transition">Experience</a>
            <a href="#contact" className="hover:text-[#64b5ff] transition">Contact</a>
          </nav>
        </div>
      </header>
      <main>
        <section id="home" className="min-h-[570px] flex items-center py-[90px] bg-[radial-gradient(circle_at_80%_30%,rgba(37,112,190,0.16),transparent_35%)]">
          <div className="max-w-[1120px] mx-auto px-[5%] w-full">
            <div className="max-w-[780px]">
              <p className="text-[#65d6a0] text-[13px] font-bold tracking-[2px] uppercase mb-[18px]">ICT Graduate | Aspiring Software Engineer</p>
              <h1 className="text-[clamp(38px,7vw,65px)] leading-[1.12] mb-[22px] font-bold">
                Hello, I'm <span className="text-[#64b5ff]">George Kariuki.</span>
              </h1>
              <p className="max-w-[680px] text-[#a7b3c5] text-[17px] mb-[30px] leading-[1.7]">
                I am an Information and Communication Technology graduate interested in software development, backend systems, artificial intelligence and building practical technology solutions.
              </p>
              <div className="flex flex-wrap gap-[14px]">
                <a href="#projects" className="inline-block px-[23px] py-[12px] rounded-[7px] font-bold text-[14px] bg-[#64b5ff] text-[#07111e] hover:-translate-y-[3px] hover:bg-[#91ccff] transition">Explore My Projects</a>
                <a href="mailto:egroegkariuki@gmail.com" className="inline-block px-[23px] py-[12px] rounded-[7px] font-bold text-[14px] border border-white/10 text-white hover:border-[#64b5ff] hover:text-[#64b5ff] transition">Contact Me</a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-[85px]">
          <div className="max-w-[1120px] mx-auto px-[5%]">
            <div className="mb-[35px]">
              <p className="text-[#64b5ff] uppercase tracking-[2px] text-[12px] font-bold mb-[8px]">Introduction</p>
              <h2 className="text-[32px] font-bold">About Me</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[35px]">
              <div className="text-[#a7b3c5] space-y-[17px] leading-[1.7]">
                <p>I am an Information and Communication Technology graduate from Laikipia University with an interest in software engineering, application development and technology-driven problem solving.</p>
                <p>My practical experience includes working with IT personnel and other departments during my industrial attachment, where I gained exposure to IT support, data collection, information management and day-to-day technical operations.</p>
                <p>I have also worked on chatbot applications myself using different technology stacks, exploring application logic, data handling, user interaction and administrative functionality. I admire the idea of AI running locally in our gadgets; with this, most of my projects are intended to run locally with user personal data.</p>
                <p>I am continuously developing my technical skills through practical projects, experimentation and independent learning.</p>
              </div>
              <div className="bg-[#101827] border border-white/10 rounded-[12px] p-[25px] h-fit">
                <h3 className="text-xl font-bold mb-[15px]">Quick Information</h3>
                <p className="text-[#a7b3c5] text-[14px] mb-[10px]"><strong>Name:</strong> George Kariuki Kago</p>
                <p className="text-[#a7b3c5] text-[14px] mb-[10px]"><strong>Location:</strong> Githunguri, Kiambu, Kenya</p>
                <p className="text-[#a7b3c5] text-[14px] mb-[10px]"><strong>Education:</strong> BSc Information and Communication Technology</p>
                <p className="text-[#a7b3c5] text-[14px] mb-[10px]"><strong>University:</strong> Laikipia University</p>
                <p className="text-[#a7b3c5] text-[14px] mb-[10px]"><strong>Graduation:</strong> December 2025</p>
                <p className="text-[#a7b3c5] text-[14px] mb-[10px]"><strong>Career Focus:</strong> Software Engineering</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-[85px]">
          <div className="max-w-[1120px] mx-auto px-[5%]">
            <div className="mb-[35px]">
              <p className="text-[#64b5ff] uppercase tracking-[2px] text-[12px] font-bold mb-[8px]">Technical Background</p>
              <h2 className="text-[32px] font-bold">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px]">
              {['Python', 'JavaScript', 'Node.js', 'HTML5', 'CSS3', 'SQL', 'MySQL', 'JSON', 'Git & GitHub', 'Linux Fundamentals', 'Data Management', 'IT Support'].map((skill) => (
                <div key={skill} className="bg-[#101827] border border-white/10 p-[19px] rounded-[9px] text-center text-[#a7b3c5] text-[14px] hover:border-[#64b5ff] hover:text-[#64b5ff] transition">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-[85px] bg-[#0b1220]">
          <div className="max-w-[1120px] mx-auto px-[5%]">
            <div className="mb-[35px]">
              <p className="text-[#64b5ff] uppercase tracking-[2px] text-[12px] font-bold mb-[8px]">Selected Work</p>
              <h2 className="text-[32px] font-bold">My Projects</h2>
            </div>
            <div className="bg-[#101827] border border-white/10 rounded-[13px] p-[28px] mb-[35px]">
              <h3 className="text-[23px] font-bold mb-[15px]">01. Lily Model One Chatbot Application</h3>
              <p className="text-[#a7b3c5] mb-[20px]">A chatbot application developed using Node.js and frontend web technologies, focusing on user interaction and structured JSON data handling.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
                <img src="https://i.ibb.co/R4k4DWwB/3.png" alt="Chatbot UI" className="w-full h-[185px] object-cover rounded-[9px] border border-white/10" />
                <img src="https://i.ibb.co/LzjTLK6q/3a.png" alt="Chatbot Interface" className="w-full h-[185px] object-cover rounded-[9px] border border-white/10" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-[25px] text-center text-[#8b9bb4] text-[13px]">
        <p>&copy; {new Date().getFullYear()} George Kariuki Kago. Built with React & Vite.</p>
      </footer>
    </div>
  );
}
