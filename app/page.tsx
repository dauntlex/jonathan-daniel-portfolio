import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    slug: "shewhead-shoes",
    title: "Shewhead Shoes",
    category: "Mobile eCommerce App",
    description: "A mobile shopping experience covering discovery, product detail and checkout.",
    tags: ["Product Design", "UI/UX", "eCommerce"],
  },
  {
    number: "02",
    slug: "smart-brain",
    title: "Smart Brain",
    category: "Full Stack Web Application",
    description: "A full-stack face recognition application built with React, Node.js, Express.js, PostgreSQL and REST APIs.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    number: "03",
    slug: "coming-soon",
    title: "Next Project",
    category: "Coming Soon",
    description: "A new project will live here as the portfolio grows.",
    tags: ["Future Work"],
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero home-section">
        <div className="hero-copy">
          <p className="eyebrow">FULL STACK DEVELOPER · PRODUCT DESIGNER</p>
          <h1>
            Jonathan
            <br />
            <em>Daniel</em>
          </h1>
          <p className="hero-lede">
            I build modern, responsive and user-centered digital experiences —
            from intuitive interfaces to full-stack applications.
          </p>
          <div className="hero-actions">
            <a className="button dark" href="#work">View projects ↗</a>
            <a className="button" href="#contact">Contact me</a>
          </div>
          <div className="hero-meta">
            <span>Abuja, Nigeria</span>
            <span>08143413806</span>
            <span>jonathaandaniels@gmail.com</span>
          </div>
        </div>
        <div className="hero-image">
          <Image src="/profile.jpg" alt="Jonathan Daniel" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section id="work" className="work-section home-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 — THINGS I'VE BUILT</p>
            <h2>Selected work.</h2>
          </div>
          <p className="section-note">Drag or scroll horizontally to explore.</p>
        </div>

        <div className="project-rail" aria-label="Things I've built">
          {projects.map((project) => (
            <Link
              className="project-card"
              href={project.slug === "coming-soon" ? "#contact" : `/projects/${project.slug}`}
              key={project.slug}
            >
              <div className="project-card-top">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>
              <div className="project-card-space" aria-hidden="true" />
              <div className="project-card-bottom">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="work-footer">
          <Link href="/projects">View all projects ↗</Link>
        </div>
      </section>

      <section id="about" className="split-section home-section">
        <div><p className="eyebrow">02 — ABOUT</p><h2>Designing with intention.</h2></div>
        <div><p>I’m a full-stack developer and product designer focused on turning ideas into clear, useful digital products. I care about thoughtful interfaces, solid engineering and experiences that feel effortless to use.</p></div>
      </section>

      <section id="skills" className="list-section home-section">
        <p className="eyebrow">03 — SKILLS</p>
        <div className="skill-grid">
          <div><h3>Development</h3><p>React · Next.js · JavaScript · TypeScript · Node.js · Express · PostgreSQL · REST APIs</p></div>
          <div><h3>Design</h3><p>Figma · UI/UX · Product Design · Responsive Design · Design Systems</p></div>
        </div>
      </section>

      <section id="experience" className="split-section home-section">
        <div><p className="eyebrow">04 — EXPERIENCE</p><h2>Building across design and development.</h2></div>
        <div><p>My work spans product thinking, interface design and full-stack implementation. Each project is an opportunity to simplify a problem and make the final experience better.</p></div>
      </section>

      <section id="education" className="split-section home-section">
        <div><p className="eyebrow">05 — EDUCATION</p><h2>Continuous learning.</h2></div>
        <div><p>Education, courses and practical project work that support my development across software engineering and product design.</p></div>
      </section>

      <section id="contact" className="contact-section home-section">
        <p className="eyebrow">06 — CONTACT</p>
        <h2>Have a project in mind?</h2>
        <a href="mailto:jonathaandaniels@gmail.com">jonathaandaniels@gmail.com ↗</a>
      </section>
    </main>
  );
}
