import {site} from '../data/site'

function MailIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>}
function PhoneIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.8 5.4 5.6c-.7.7-.9 1.7-.5 2.6 2.2 5.1 5.8 8.7 10.9 10.9.9.4 1.9.2 2.6-.5l1.8-1.8-3.1-3.1-2.1 1.3c-2.2-1.1-3.9-2.8-5-5l1.3-2.1-3.1-3.1Z"/></svg>}
function LinkedinIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 10v6M8 7.5v.1M12 16v-3.2a2.8 2.8 0 0 1 5.6 0V16M12 10v6"/></svg>}

export default function Footer(){return <footer><div className="wrap footer-inner"><div className="footer-contact" aria-label="Contact details"><a href={`mailto:${site.email}`}><MailIcon/><span>{site.email}</span></a><a href={`tel:${site.phone.replace(/\s/g,'')}`}><PhoneIcon/><span>{site.phone}</span></a><a href={site.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon/><span>LinkedIn</span></a></div><div className="footer-bottom"><span>© 2026 {site.name}</span><span>{site.title}</span></div></div></footer>}
