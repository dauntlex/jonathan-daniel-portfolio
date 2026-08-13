import Link from 'next/link'
import { projects as localProjects } from '../../data/site'
import { getProjects } from '../../lib-github'

export const dynamic = 'force-dynamic'

export default async function Projects(){
  let projects
  try { projects = (await getProjects()).filter(p=>p.published) } catch { projects = localProjects.map(p=>({slug:p.slug,number:p.number,title:p.title,category:p.category,description:p.description,tools:p.stack,published:true})) }
  return <main><section className="page-hero wrap"><p className="eyebrow">Projects</p><h1>Selected work.</h1><p>Projects, experiments and case studies. New work added through the private project manager appears here automatically after deployment.</p></section><section className="wrap projects-page"><div className="project-grid">{projects.map(p=><article className="project-card" key={p.slug}><Link href={`/projects/${p.slug}`} className="project-image"><img src={p.cover} alt=""/><span className="project-number">{p.number}</span></Link><div className="project-copy"><p className="eyebrow">{p.category}</p><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tools.map(x=><span key={x}>{x}</span>)}</div><Link className="text-link" href={`/projects/${p.slug}`}>View case study <span>↗</span></Link></div></article>)}</div></section></main>
}