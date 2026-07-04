const projects = [
  {
    title: 'AI Productivity Desk',
    description: 'A full-stack assistant that summarizes tasks, drafts updates, and turns notes into action plans.',
    stack: ['React', 'Node.js', 'OpenAI API'],
    link: 'https://github.com/yourname/ai-productivity-desk'
  },
  {
    title: 'Pulse Analytics',
    description: 'A business intelligence dashboard for tracking product metrics, engagement, and revenue trends.',
    stack: ['TypeScript', 'Express', 'Chart.js'],
    link: 'https://github.com/yourname/pulse-analytics'
  },
  {
    title: 'Launchpad Studio',
    description: 'A design-forward project management platform for teams running fast-moving product launches.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL'],
    link: 'https://github.com/yourname/launchpad-studio'
  }
];

const skills = ['React', 'TypeScript', 'Node.js', 'UI Design', 'Testing', 'CI/CD'];

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero-content">
          <div>
            <p className="eyebrow">Full-Stack Developer • Product-minded builder</p>
            <h1>I craft thoughtful digital experiences that feel polished and perform well.</h1>
            <p className="hero-copy">
              I build modern web apps with clean architecture, strong UX, and production-ready workflows.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">See Projects</a>
              <a className="btn secondary" href="#contact">Let's Talk</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-label">Available for</div>
            <ul>
              <li>Frontend engineering</li>
              <li>Product-focused prototypes</li>
              <li>Scalable SaaS features</li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">About me</p>
            <h2>Bridging design, code, and business impact.</h2>
          </div>
          <div className="about-grid">
            <p>
              I enjoy transforming complex ideas into intuitive interfaces and reliable systems. My work focuses on
              thoughtful product decisions, crisp visual design, and maintainable implementation.
            </p>
            <div className="stats">
              <div>
                <strong>6+</strong>
                <span>Years building products</span>
              </div>
              <div>
                <strong>20+</strong>
                <span>Launches shipped</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Focus on quality</span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects that mix strategy, craft, and execution.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="chip-row">
                  {project.stack.map((item) => (
                    <span className="chip" key={item}>{item}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Toolkit</p>
            <h2>Technologies I use to turn ideas into products.</h2>
          </div>
          <div className="chip-row">
            {skills.map((skill) => (
              <span className="chip large" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Open to interesting opportunities and collaborations.</h2>
          </div>
          <div className="contact-box">
            <p>Let’s build something useful, elegant, and memorable.</p>
            <div className="hero-actions">
              <a className="btn primary" href="mailto:hello@yourname.dev">Email Me</a>
              <a className="btn secondary" href="https://github.com/yourname" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">Designed and built with React + Vite.</footer>
    </div>
  );
}

export default App;
