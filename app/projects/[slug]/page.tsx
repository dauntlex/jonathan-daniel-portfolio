import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjects } from '../../../lib-github'

export const dynamic = 'force-dynamic'

export default async function ProjectPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params
  let projects
  try { projects = await getProjects() } catch { notFound() }
  const project = projects.find(p=>p.slug===slug && p.published)
  if(!project) notFound()
  return <main><section className="project-detail wrap"><Link className="back-link" href="/projects">← All projects</Link><p className="eyebrow">{project.number} — {project.category}</p><h1>{project.title}</h1><p className="project-detail-lede">{project.description}</p><div className="project-detail-meta">{project.tools.map(t=><span key={t}>{t}</span>)}</div>{project.cover&&<div className="project-detail-cover"><Image src={project.cover} alt={project.title} fill sizes="(max-width: 1200px) 100vw, 1200px"/></div>}<div className="project-detail-grid"><div><p className="eyebrow">CASE STUDY</p></div><div className="prose">{(project.caseStudy||'Case study details will be added here.').split(/\n+/).map((p,i)=><p key={i}>{p}</p>)}{(project.liveUrl||project.githubUrl)&&<div className="project-links">{project.liveUrl&&<a href={project.liveUrl} target="_blank" rel="noreferrer">Live project ↗</a>}{project.githubUrl&&<a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>}</div>}</div></div>{project.screenshots.length>0&&<div className="project-gallery">{project.screenshots.map((s,i)=><div className="gallery-image" key={s}><Image src={s} alt={`${project.title} screenshot ${i+1}`} fill sizes="(max-width: 900px) 100vw, 50vw"/></div>)}</div>}</section></main>
}
