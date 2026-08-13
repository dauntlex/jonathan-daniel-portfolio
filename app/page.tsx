import Image from "next/image";
import Link from "next/link";
import { site } from "../data/site";

const projects = [
  { number: "01", slug: "shewhead-shoes", title: "Shewhead Shoes", category: "Mobile eCommerce App", description: "A mobile shopping experience covering discovery, product detail and checkout.", tags: ["Product Design", "UI/UX", "eCommerce"] },
  { number: "02", slug: "smart-brain", title: "Smart Brain", category: "Full Stack Web Application", description: "A full-stack face recognition application built with React, Node.js, Express.js, PostgreSQL and REST APIs.", tags: ["React", "Node.js", "PostgreSQL"] },
  { number: "03", slug: "coming-soon", title: "Next Project", category: "Coming Soon", description: "A new project will live here as the portfolio grows.", tags: ["Future Work"] },
];

export default function Home() {
  return (
    <main>
      <section className="hero home-section">
        <div className="hero-copy">
          <p className="eyebrow">FULL STACK DEVELOPER · PRODUCT DESIGNER</p>
          <h1>Jonathan<br />Daniel</h1>
          <p className="hero-lede">I design and build modern digital products that bring thoughtful user experiences together with dependable full-stack engineering.</p>
          <div className="hero-actions">
            <a className="button dark" href="#work">View projects ↗</a>
            <a className="button" href="#contact">Contact me</a>
          </div>
        </div>
        <div className="hero-image">
          <Image src="/profile.jpg" alt="Jonathan Daniel" fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </section>

      <section id="work" className="work-section home-section">
        <div className="section-heading">
          <div><p className="eyebrow">01 — THINGS I'VE BUILT</p><h2>Selected work.</h2></div>
          <p className="section-note">Drag or scroll horizontally to explore the work.</p>
        </div>
        <div className="project-rail" aria-label="Things I've built">
          {projects.map((project) => (
            <Link className="project-card" href={project.slug === "coming-soon" ? "#contact" : `/projects/${project.slug}`} key={project.slug}>
              <div className="project-card-top"><span>{project.number}</span><span>{project.category}</span></div>
              <div className="project-card-space" aria-hidden="true" />
              <div className="project-card-bottom">
                <div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <span className="project-arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="work-footer"><Link href="/projects">View all projects ↗</Link></div>
      </section>

      <section id="about" className="split-section home-section">
        <div><p className="eyebrow">02 — ABOUT ME</p><h2>Designing with intention. Building with purpose.</h2></div>
        <div className="prose"><p>I’m a full-stack software developer and product designer focused on turning ideas into clear, useful digital products. My work sits between interface design and implementation — shaping the experience in Figma, then building it into responsive, functional software.</p><p>I care about clarity, usability and the small details that make a product feel considered.</p></div>
      </section>

      <section id="skills" className="list-section home-section">
        <div className="section-heading"><div><p className="eyebrow">03 — SKILLS</p><h2>Design + development.</h2></div><p className="section-note">A practical toolkit for taking a product from idea to interface to implementation.</p></div>
        <div className="skill-grid">
          <div className="skill"><span className="skill-no">01</span><h3>Frontend</h3><p>HTML, CSS, JavaScript, React, responsive design.</p></div>
          <div className="skill"><span className="skill-no">02</span><h3>UI / UX</h3><p>Figma, wireframing, prototyping, user research and UI design.</p></div>
          <div className="skill"><span className="skill-no">03</span><h3>Backend</h3><p>Node.js, Express, REST APIs and databases.</p></div>
          <div className="skill"><span className="skill-no">04</span><h3>AI</h3><p>Prompt engineering, AI APIs and practical AI integration.</p></div>
          <div className="skill"><span className="skill-no">05</span><h3>Tools</h3><p>Git, GitHub and Figma.</p></div>
          <div className="skill"><span className="skill-no">06</span><h3>Core</h3><p>Problem-solving, creativity and user-centered design.</p></div>
        </div>
      </section>

      <section id="resume" className="resume-section home-section">
        <div className="resume-inner">
          <div><p className="eyebrow">04 — RESUME</p><h2>The detailed version.</h2></div>
          <div className="resume-copy"><p>For experience, education, certifications and the full technical skill set, see my resume.</p><div className="resume-actions"><a className="button dark" href="/Jonathan-Daniel-Resume.docx" download>Download resume ↓</a><a className="button" href="/Jonathan-Daniel-Resume.docx" target="_blank" rel="noreferrer">Open resume ↗</a></div></div>
        </div>
      </section>

      <section id="contact" className="contact-section home-section">
        <div className="contact-grid">
          <div><p className="eyebrow">05 — CONTACT</p><h2>Have a project in mind?</h2><p className="section-intro">Tell me what you’re building, what you need help with, and where you want to take it.</p><div className="contact-direct"><a href={`mailto:${site.email}`}>{site.email} ↗</a><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div>
          <form className="contact-form" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <label>Name<input name="name" type="text" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>Message<textarea name="message" rows={5} placeholder="Tell me about your project..." required /></label>
            <button className="button light" type="submit">Send enquiry ↗</button>
            <p className="form-note">Submitting opens your email app with the message ready to send.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
