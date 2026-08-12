'use client'
import { useState } from 'react'
export default function Navbar(){
 const [open,setOpen]=useState(false)
 const links=[['About','#about'],['Skills','#skills'],['Projects','/projects'],['Experience','#experience'],['Education','#education'],['Contact','#contact']]
 return <header className="nav"><div className="wrap nav-inner"><a className="brand" href="/">JD</a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">Menu</button><nav className={open?'nav-links open':'nav-links'}>{links.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav></div></header>
}
