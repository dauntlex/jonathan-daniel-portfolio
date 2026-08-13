import { NextResponse } from 'next/server'
import { adminIsAuthenticated, commitFile } from '../../../../lib-github'

function safeName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9._-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

export async function POST(req: Request) {
  if (!(await adminIsAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const form = await req.formData()
    const file = form.get('file')
    const slug = String(form.get('slug') || '')
    const kind = String(form.get('kind') || 'screenshot')
    if (!(file instanceof File) || !slug) return NextResponse.json({ error: 'File and slug are required' }, { status: 400 })
    if (!file.type.startsWith('image/')) return NextResponse.json({ error: 'Only image files are allowed' }, { status: 400 })
    if (file.size > 8 * 1024 * 1024) return NextResponse.json({ error: 'Images must be 8MB or smaller' }, { status: 400 })
    const filename = safeName(file.name) || `image-${Date.now()}.jpg`
    const path = `public/projects/${slug}/${kind === 'cover' ? `cover-${filename}` : filename}`
    const bytes = Buffer.from(await file.arrayBuffer())
    await commitFile(path, bytes, `Add project image: ${slug}/${filename}`)
    return NextResponse.json({ path: `/${path}` })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Upload failed' }, { status: 500 })
  }
}
