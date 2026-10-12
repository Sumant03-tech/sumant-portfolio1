import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Check, Code2,
  ExternalLink, Gamepad2, Github, GraduationCap, Layers3, Linkedin, Mail,
  Menu, MonitorSmartphone, Sparkles, Terminal, X, Zap
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Sumant Padhy',
  role: 'Aspiring AI/ML Engineer',
  college: 'Gandhi Engineering College',
  degree: 'B.Tech · Computer Science & Engineering (AI & ML)',
  cgpa: '8.8',
  email: 'sum5328rocky@gmail.com',
  github: 'https://github.com/Sumant03-tech',
  linkedin: 'https://www.linkedin.com/in/sumant-padhy-4080ba305/',
};

const projects = [
  {
    id: 'campus-connect', number: '01', name: 'Campus Connect', category: 'WEB DEVELOPMENT', featured: true,
    summary: 'A campus-focused platform concept designed to make student–administration communication simpler.',
    description: 'Created as a BPUT Hackathon project concept, Campus Connect brings common campus workflows into one place. Students can submit a query or issue, track its status, and view notices. Administrators can review and respond to submissions and publish updates. This portfolio describes the React frontend prototype; backend integrations should only be listed once implemented.',
    tags: ['React', 'JavaScript', 'CSS', 'Responsive UI'],
    visual: 'campus', icon: MonitorSmartphone, status: 'Hackathon prototype',
    points: ['Student query and issue submission flow', 'Status tracking concept for submitted requests', 'Notices and campus updates', 'Separate student and administrator experiences'],
  },
  {
    id: 'movie-recommender', number: '02', name: 'Movie Recommendation System', category: 'AI / MACHINE LEARNING',
    summary: 'A content-based recommender that suggests movies using metadata similarity.',
    description: 'A Streamlit application built around movie metadata. The workflow uses Pandas for data preparation, CountVectorizer to represent text features, and cosine similarity to identify movies with similar content. Movie poster integration adds a more visual browsing experience.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Cosine Similarity'],
    visual: 'movies', icon: BrainCircuit, status: 'Project',
    points: ['Content-based recommendation approach', 'Text feature extraction with CountVectorizer', 'Similarity scoring with cosine similarity', 'Interactive Streamlit interface and poster display'],
  },
  {
    id: 'endless-runner', number: '03', name: '3D Endless Runner', category: 'GAME DEVELOPMENT',
    summary: 'A 3D runner with lane switching, jumping, coin collection, and scoring.',
    description: 'A Unity game inspired by lane-based endless runners. The prototype includes character movement, lane changes, jumping, gravity, coin collection, scoring, and Android build testing.',
    tags: ['Unity', 'C#', 'CharacterController', 'Android'],
    visual: 'runner', icon: Gamepad2, status: 'Playable Android build',
    points: ['Three-lane movement system', 'Jump and gravity mechanics', 'Collectible coins and score tracking', 'Obstacle and road-tile gameplay'],
  },
  {
    id: 'zombie-game', number: '04', name: 'Third-Person Zombie Game', category: 'GAME DEVELOPMENT',
    summary: 'A 3D action-game prototype exploring third-person controls and camera setup.',
    description: 'A Unity prototype focused on a third-person character controller, camera behavior, and the foundations of zombie-survival gameplay. It uses the New Input System and Cinemachine as part of the control and camera setup.',
    tags: ['Unity', 'C#', 'Cinemachine', 'New Input System'],
    visual: 'zombie', icon: Gamepad2, status: 'Prototype',
    points: ['Third-person player movement', 'Camera follow and look setup', 'Input System integration', 'Foundation for action and survival mechanics'],
  },
];

const skillGroups = [
  { title: 'AI & DATA', icon: BrainCircuit, skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Machine Learning fundamentals', 'Deep Learning fundamentals'] },
  { title: 'WEB DEVELOPMENT', icon: Code2, skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Streamlit', 'REST/API fundamentals'] },
  { title: 'GAME DEVELOPMENT', icon: Gamepad2, skills: ['Unity', 'C#', 'Character Controller', 'Cinemachine', 'New Input System', 'Gameplay mechanics'] },
  { title: 'TOOLS & WORKFLOW', icon: Terminal, skills: ['Git & GitHub', 'VS Code', 'Jupyter Notebook', 'Responsive UI', 'Debugging'] },
];

function ProjectVisual({ type, Icon }) {
  return <div className={`project-visual visual-${type}`} aria-hidden="true">
    <div className="visual-grid" />
    {type === 'campus' && <div className="campus-ui"><div className="mini-sidebar"><i /><i /><i /><i /></div><div className="mini-main"><div className="mini-topline" /><div className="mini-welcome" /><div className="mini-stats"><i /><i /><i /></div><div className="mini-ticket"><b /><span /><span /></div><div className="mini-ticket short"><b /><span /><span /></div></div></div>}
    {type === 'movies' && <div className="movie-stack"><i className="poster poster-one" /><i className="poster poster-two" /><i className="poster poster-three" /><div className="recommend-label"><Sparkles size={13} /> YOUR NEXT WATCH</div></div>}
    {type === 'runner' && <div className="runner-scene"><div className="runner-sun" /><div className="runner-track"><i /><i /><i /><b className="coin coin-one" /><b className="coin coin-two" /><b className="runner-player" /></div><div className="scene-caption">RUN · JUMP · COLLECT</div></div>}
    {type === 'zombie' && <div className="zombie-scene"><div className="moon" /><div className="city city-one" /><div className="city city-two" /><div className="zombie-player"><i /><b /></div><div className="zombie-caption">SURVIVE THE NIGHT</div></div>}
    <div className="visual-icon"><Icon size={19} /></div>
  </div>;
}

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const copyProfile = async () => {
    const text = `${profile.name}\n${profile.role}\n${profile.degree}\n${profile.college}\nCGPA: ${profile.cgpa}\nEmail: ${profile.email}\nGitHub: ${profile.github}\nLinkedIn: ${profile.linkedin}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = profile.linkedin;
    }
  };

  return <>
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Sumant Padhy home"><span className="brand-mark">SP</span><span>sumant<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
        {[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'], ['Contact', '#contact']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-cta" href={profile.linkedin} target="_blank" rel="noreferrer">Let's connect <ArrowUpRight size={15} /></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
          <h1>Building useful things<br />with <span className="gradient-text">code & curiosity.</span></h1>
          <p className="hero-description">I'm <strong>Sumant Padhy</strong> — a Computer Science student exploring AI/ML, crafting web experiences, and building interactive worlds with Unity.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a><a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={16} /></a></div>
          <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><span className="social-separator">/</span><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div>
        </div>
        <div className="hero-art" aria-label="Decorative abstract code and AI illustration">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="hero-core"><div className="core-glow" /><BrainCircuit size={82} strokeWidth={1.1} /><span className="core-label">LEARN · BUILD · ITERATE</span></div>
          <div className="float-card float-card-code"><Terminal size={16} /><span>const ideas = build();</span></div>
          <div className="float-card float-card-ai"><Zap size={16} /><span>AI / ML</span></div>
          <div className="float-card float-card-game"><Gamepad2 size={17} /><span>Unity · C#</span></div>
          <span className="art-star star-one">✳</span><span className="art-star star-two">✦</span>
        </div>
        <div className="hero-bottom"><span><span className="mono">01 / 04</span> &nbsp; WHAT I DO</span><span className="scroll-hint">SCROLL TO EXPLORE <span>↓</span></span></div>
      </section>

      <section className="quick-facts section-wrap" aria-label="Quick profile facts">
        <div className="fact"><span className="fact-icon"><GraduationCap size={19} /></span><div><small>EDUCATION</small><strong>B.Tech · CSE (AI & ML)</strong></div></div>
        <div className="fact"><span className="fact-icon"><Sparkles size={19} /></span><div><small>CGPA</small><strong>8.8 / 10</strong></div></div>
        <div className="fact"><span className="fact-icon"><Layers3 size={19} /></span><div><small>FOCUS AREAS</small><strong>AI/ML · Web · Games</strong></div></div>
        <div className="fact"><span className="fact-icon"><Code2 size={19} /></span><div><small>BASED AT</small><strong>Odisha, India</strong></div></div>
      </section>

      <section className="section-wrap section-block" id="about">
        <div className="section-heading"><div><span className="section-kicker">01 — A LITTLE ABOUT ME</span><h2>Curious by nature.<br /><span className="muted-heading">Builder by practice.</span></h2></div><p className="section-intro">I enjoy turning ideas into working projects — from data-driven applications to responsive interfaces and 3D gameplay systems.</p></div>
        <div className="about-grid"><div className="about-main"><div className="about-mark">“</div><p>I'm pursuing a B.Tech in Computer Science and Engineering (AI & ML) at Gandhi Engineering College. I like learning by building: experimenting with machine learning, improving my web development skills, and bringing game ideas to life in Unity.</p><p>I'm looking for opportunities where I can contribute, learn from experienced teams, and keep growing as an engineer.</p><a className="text-link" href="#contact">Let's work on something meaningful <ArrowRight size={16} /></a></div><div className="about-side"><div className="mini-info"><span className="mini-info-number">01</span><div><strong>Problem solving</strong><p>Breaking larger problems into clear, manageable steps.</p></div></div><div className="mini-info"><span className="mini-info-number">02</span><div><strong>Learning by building</strong><p>Applying concepts through hands-on projects and iteration.</p></div></div><div className="mini-info"><span className="mini-info-number">03</span><div><strong>Cross-disciplinary</strong><p>Bringing software, data, design, and gameplay together.</p></div></div></div></div>
      </section>

      <section className="skills-section" id="skills"><div className="section-wrap section-block"><div className="section-heading"><div><span className="section-kicker">02 — MY TOOLKIT</span><h2>Skills I'm <span className="gradient-text">growing.</span></h2></div><p className="section-intro">A practical toolkit across intelligent applications, frontend experiences, and interactive 3D projects.</p></div><div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><group.icon size={20} /></span><span className="mono">0{index + 1}</span></div><h3>{group.title}</h3><div className="skill-pills">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div><p className="skills-note"><span className="note-dot" /> Skill levels develop with practice; this list reflects tools and topics I've worked with or studied.</p></div></section>

      <section className="section-wrap section-block projects-section" id="projects"><div className="section-heading"><div><span className="section-kicker">03 — SELECTED WORK</span><h2>Projects with <span className="muted-heading">purpose.</span></h2></div><p className="section-intro">A mix of hackathon problem-solving, machine learning, and game development. Select a project to explore the details.</p></div><div className="projects-grid">{projects.map(project => <article className={`project-card ${project.featured ? 'featured-project' : ''}`} key={project.id}><ProjectVisual type={project.visual} Icon={project.icon} /><div className="project-content"><div className="project-meta"><span>{project.category}</span><span className="project-number">{project.number}</span></div><h3>{project.name}</h3><p>{project.summary}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><button className="project-link" onClick={() => setActiveProject(project)}>View case study <ArrowUpRight size={16} /></button></div></article>)}</div><div className="projects-footnote"><span className="note-dot" /> Student Performance Analysis is a possible next project, not listed as completed work.</div></section>

      <section className="journey-section" id="journey"><div className="section-wrap section-block"><div className="section-heading"><div><span className="section-kicker">04 — THE JOURNEY SO FAR</span><h2>Learning. Building.<br /><span className="muted-heading">Moving forward.</span></h2></div><p className="section-intro">A foundation in computer science, hands-on projects, and experience exploring web development in practical settings.</p></div><div className="journey-grid"><div className="journey-column"><h3><GraduationCap size={18} /> Education</h3><div className="timeline-item"><span className="timeline-dot" /><div><span className="timeline-label">CURRENT</span><h4>B.Tech — CSE (AI & ML)</h4><p>Gandhi Engineering College</p><span className="timeline-detail">CGPA: 8.8 / 10</span></div></div></div><div className="journey-column"><h3><Code2 size={18} /> Experience & practice</h3><div className="timeline-item"><span className="timeline-dot" /><div><span className="timeline-label">WEB DEVELOPMENT</span><h4>Internship experience</h4><p>Preppright · Internshala</p><span className="timeline-detail">Practical exposure to web development</span></div></div><div className="timeline-item"><span className="timeline-dot" /><div><span className="timeline-label">HACKATHON PROJECT</span><h4>Campus Connect</h4><p>Designed a campus workflow solution concept for students and administrators.</p></div></div></div></div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="contact-orb"><Mail size={29} /></div><span className="section-kicker">05 — YOUR TURN</span><h2>Have an idea?<br /><span className="gradient-text">Let's build it.</span></h2><p>I'm open to internship opportunities, collaborations, and conversations about AI/ML, web development, and game development.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={17} /> {profile.email} <ArrowUpRight size={16} /></a><a className="button button-secondary" href="/resume.pdf" download="Sumant_Padhy_AI_ML_Resume.pdf"><ExternalLink size={17} /> Download Resume <ArrowDownRight size={16} /></a><a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn <ArrowUpRight size={16} /></a><a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> Explore GitHub <ArrowUpRight size={16} /></a></div><button className="copy-profile" onClick={copyProfile}>{copied ? <Check size={15} /> : <ExternalLink size={15} />}{copied ? 'Profile details copied' : 'Copy profile details'}</button></div></section>
    </main>

    <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">SP</span><span>sumant<span className="brand-dot">.</span></span></a><span>Designed & built with curiosity.</span><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="footer-year">© {new Date().getFullYear()} Sumant Padhy</span></footer>

    {activeProject && <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setActiveProject(null); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={20} /></button><div className="modal-topline"><span className="section-kicker">PROJECT {activeProject.number}</span><span className="modal-status">{activeProject.status}</span></div><ProjectVisual type={activeProject.visual} Icon={activeProject.icon} /><p className="modal-category">{activeProject.category}</p><h2 id="modal-title">{activeProject.name}</h2><p className="modal-description">{activeProject.description}</p><h3>Highlights</h3><ul className="modal-points">{activeProject.points.map(point => <li key={point}><Check size={16} />{point}</li>)}</ul><div className="project-tags modal-tags">{activeProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="modal-disclaimer">Project descriptions reflect the current prototype and known implementation. Add repository or live-demo links when they're ready.</div></section></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
