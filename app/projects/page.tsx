import {projects} from '../../data/site'
import SectionHeading from '../../components/SectionHeading'
import ProjectCard from '../../components/ProjectCard'
export default function Projects(){return <main><section className="page-hero wrap"><p className="eyebrow">Projects</p><h1>Selected <i>work.</i></h1><p>Projects, experiments and case studies. Replace the reserved image areas with screenshots as your portfolio grows.</p></section><section className="wrap projects-page"><SectionHeading eyebrow="01 — Portfolio" title="Built, designed & explored."/><div className="project-grid">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></section></main>}
