import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export const metadata:Metadata={title:'Jonathan Daniel — Full Stack Developer / Product Designer',description:'Portfolio of Jonathan Daniel, Full Stack Software Developer and Product Designer.'}
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body><Navbar/>{children}<Footer/></body></html>}
