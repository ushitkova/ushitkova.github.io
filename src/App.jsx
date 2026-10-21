import { useEffect, useState } from "react";
import heroImage from "../assets/hero.png";
import resumeUrl from "../Files/UshitkovaMeri.pdf?url";
import { projects } from "./data";

const email = "ushitkovameri@outlook.com";

function Icon({ name }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    external: <><path d="M15 4h5v5"/><path d="m10 14 10-10"/><path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    back: <><path d="m15 18-6-6 6-6"/><path d="M9 12h11"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function navigate(project) {
  const url = project ? `/?project=${project}` : "/";
  window.history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function Header({ projectView = false }) {
  const [open, setOpen] = useState(false);
  const goHome = (event) => {
    event.preventDefault();
    setOpen(false);
    if (projectView) navigate();
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="wordmark" href="/" onClick={goHome} aria-label="Meri Ushitkova, home">Meri<span>.</span></a>
        <button className="menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          {projectView ? (
            <a href="/" onClick={goHome}><Icon name="back" />All work</a>
          ) : (
            <><a href="#work" onClick={() => setOpen(false)}>Work</a><a href="#about" onClick={() => setOpen(false)}>About</a></>
          )}
          <a href={resumeUrl} target="_blank" rel="noreferrer">Résumé</a>
          <a className="nav-cta" href={`mailto:${email}`}>Let’s talk <Icon name="arrow" /></a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-intro">
        <p className="eyebrow">Have a problem worth untangling?</p>
        <h2>Let’s make it clear.</h2>
        <a className="text-link light" href={`mailto:${email}`}>{email} <Icon name="arrow" /></a>
      </div>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Meri Ushitkova</span>
        <div>
          <a href="https://www.linkedin.com/in/meri-ushitkova-048b1a220" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.behance.net/meriushitkova" target="_blank" rel="noreferrer">Behance</a>
        </div>
      </div>
    </footer>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card ${project.accent}`}>
      <button className="project-image" onClick={() => navigate(project.slug)} aria-label={`Read ${project.shortTitle} case study`}>
        <img src={project.cover} alt="" />
        <span className="project-number">0{index + 1}</span>
        <span className="project-open">View case study <Icon name="arrow" /></span>
      </button>
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <button className="text-link" onClick={() => navigate(project.slug)}>Read the case study <Icon name="arrow" /></button>
      </div>
    </article>
  );
}

function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">UX/UI designer · North Macedonia</p>
            <h1>I turn complex journeys into <em>clear</em> digital experiences.</h1>
            <p className="hero-lede">I’m Meri, a designer focused on research-led products that help people understand what to do next—and feel confident doing it.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">Explore selected work <Icon name="arrow" /></a>
              <a className="button secondary" href={resumeUrl} target="_blank" rel="noreferrer">View résumé <Icon name="external" /></a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-ring" aria-hidden="true" />
            <img src={heroImage} alt="Meri Ushitkova" />
            <span className="availability">Open to thoughtful product work</span>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2>Two problems, deeply explored.</h2></div>
            <p>Case studies are structured for fast reading: context, evidence, decisions, solution, and an honest reflection on what still needs validation.</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
          </div>
        </section>

        <section className="approach section-shell" aria-labelledby="approach-title">
          <div><p className="eyebrow">How I work</p><h2 id="approach-title">Evidence before decoration.</h2></div>
          <ol className="approach-list">
            <li><span>01</span><div><h3>Frame the right problem</h3><p>Align user needs, business goals, assumptions, constraints, and success signals before choosing a solution.</p></div></li>
            <li><span>02</span><div><h3>Make the evidence usable</h3><p>Turn interviews, surveys, and behavioral patterns into prioritized decisions—not a gallery of research artifacts.</p></div></li>
            <li><span>03</span><div><h3>Design and learn</h3><p>Prototype the riskiest moments first, test the journey, then refine the system across screens and breakpoints.</p></div></li>
          </ol>
        </section>

        <section className="about section-shell" id="about">
          <div className="about-statement"><p className="eyebrow">A little about me</p><h2>Curious by nature, structured by practice.</h2></div>
          <div className="about-copy">
            <p>I enjoy taking products from an early, ambiguous idea to a usable interface. My work spans user research, information architecture, interaction design, prototyping, and responsive UI.</p>
            <p>I’m most useful where people are overwhelmed by choices, information, or unclear processes. That’s where good structure makes the biggest difference.</p>
            <div className="skill-row" aria-label="Core skills">
              {['User research','Information architecture','Interaction design','Prototyping','Responsive UI','Design systems'].map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CaseStudy({ project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${project.shortTitle} — Meri Ushitkova`;
    return () => { document.title = "Meri Ushitkova — UX/UI Designer"; };
  }, [project]);

  return (
    <>
      <Header projectView />
      <main id="main-content" className={`case-study ${project.accent}`}>
        <section className="case-hero section-shell">
          <div className="case-title"><p className="eyebrow">{project.eyebrow}</p><h1>{project.title}</h1><p>{project.summary}</p></div>
          <div className="case-cover"><img src={project.cover} alt={`${project.shortTitle} project cover`} /></div>
          <dl className="case-meta">
            {project.meta.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </section>

        <section className="case-section section-shell split-intro">
          <div><p className="eyebrow">01 · The challenge</p><h2>A real need, not a feature list.</h2></div>
          <div className="reading-copy"><p>{project.challenge}</p><blockquote><span>The user need</span>{project.job}</blockquote></div>
        </section>

        <section className="case-section tinted">
          <div className="section-shell evidence-grid">
            <div className="sticky-heading"><p className="eyebrow">02 · Research</p><h2>What the evidence revealed.</h2></div>
            <div>
              <ul className="evidence-list">{project.evidence.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ul>
              <figure className="artifact"><img src={project.researchImage} alt={project.researchAlt} /><figcaption>Selected research artifact from the original study.</figcaption></figure>
            </div>
          </div>
        </section>

        <section className="case-section section-shell decisions-section">
          <div className="section-heading compact"><div><p className="eyebrow">03 · Decisions</p><h2>From findings to design moves.</h2></div></div>
          <div className="decision-grid">{project.decisions.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
          <figure className="artifact wide"><img src={project.processImage} alt={project.processAlt} /><figcaption>A process artifact shown as supporting evidence—not the story itself.</figcaption></figure>
        </section>

        <section className="case-section solution-section">
          <div className="section-shell">
            <div className="solution-intro"><p className="eyebrow">04 · The solution</p><h2>Designed as one coherent journey.</h2><p>{project.solution}</p></div>
            <div className="showcase desktop"><span>Desktop</span><img src={project.desktopImage} alt={project.desktopAlt} /></div>
            <div className="showcase mobile"><span>Mobile</span><img src={project.mobileImage} alt={project.mobileAlt} /></div>
          </div>
        </section>

        <section className="case-section section-shell reflection">
          <div><p className="eyebrow">05 · {project.impactLabel}</p><h2>Separate what we know from what we expect.</h2></div>
          <p>{project.impact}</p>
        </section>

        <section className="next-project section-shell">
          <p className="eyebrow">Next case study</p>
          {projects.filter(item => item.slug !== project.slug).map(item => <button key={item.slug} onClick={() => navigate(item.slug)}><span>{item.shortTitle}</span><Icon name="arrow" /></button>)}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [projectSlug, setProjectSlug] = useState(() => new URLSearchParams(window.location.search).get("project"));
  useEffect(() => {
    const onPopState = () => setProjectSlug(new URLSearchParams(window.location.search).get("project"));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  const project = projects.find(item => item.slug === projectSlug);
  return project ? <CaseStudy project={project} /> : <Home />;
}
