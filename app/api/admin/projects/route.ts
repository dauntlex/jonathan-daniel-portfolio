import { NextResponse } from 'next/server'
import { adminIsAuthenticated, getProjects, saveProjects, type ManagedProject } from '../../../../lib-github'

export async function GET() {
  try {
    const projects = await getProjects()
    return NextResponse.json({ projects })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to load projects' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  if (!(await adminIsAuthenticated())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const body = await req.json() as { projects?: ManagedProject[] }
    if (!Array.isArray(body.projects)) return NextResponse.json({ error: 'projects must be an array' }, { status: 400 })
    await saveProjects(body.projects)
    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unable to save projects' }, { status: 500 })
  }
}
