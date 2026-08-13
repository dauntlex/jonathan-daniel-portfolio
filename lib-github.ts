import { cookies } from 'next/headers'

const API = 'https://api.github.com'

export type ManagedProject = {
  slug: string
  number: string
  title: string
  category: string
  description: string
  cover: string
  screenshots: string[]
  tools: string[]
  published: boolean
  liveUrl?: string
  githubUrl?: string
  caseStudy?: string
}

function config() {
  const token = process.env.GITHUB_TOKEN
  const owner = process.env.GITHUB_OWNER
  const repo = process.env.GITHUB_REPO
  if (!token || !owner || !repo) throw new Error('Missing GITHUB_TOKEN, GITHUB_OWNER or GITHUB_REPO')
  return { token, owner, repo }
}

export async function adminIsAuthenticated() {
  const jar = await cookies()
  return jar.get('portfolio_admin')?.value === 'authenticated'
}

export async function githubRequest(path: string, init: RequestInit = {}) {
  const { token } = config()
  const headers = new Headers(init.headers)
  headers.set('Authorization', `Bearer ${token}`)
  headers.set('Accept', 'application/vnd.github+json')
  headers.set('X-GitHub-Api-Version', '2022-11-28')
  if (init.body) headers.set('Content-Type', 'application/json')
  return fetch(`${API}${path}`, { ...init, headers, cache: 'no-store' })
}

export function repoPath(path: string) {
  const { owner, repo } = config()
  return `/repos/${owner}/${repo}/contents/${path.replace(/^\//, '')}`
}

export async function getFile(path: string) {
  const res = await githubRequest(repoPath(path))
  if (!res.ok) throw new Error(`GitHub file lookup failed: ${res.status}`)
  return res.json() as Promise<{ content: string; sha: string }>
}

export async function getProjects(): Promise<ManagedProject[]> {
  const file = await getFile('data/projects.json')
  const decoded = Buffer.from(file.content.replace(/\n/g, ''), 'base64').toString('utf8')
  return (JSON.parse(decoded).projects || []) as ManagedProject[]
}

export async function commitFile(path: string, content: string | Buffer, message: string, sha?: string) {
  const body = Buffer.isBuffer(content) ? content.toString('base64') : Buffer.from(content, 'utf8').toString('base64')
  const payload: Record<string, string> = { message, content: body, branch: process.env.GITHUB_BRANCH || 'main' }
  if (sha) payload.sha = sha
  const res = await githubRequest(repoPath(path), { method: 'PUT', body: JSON.stringify(payload) })
  if (!res.ok) {
    const detail = await res.text()
    throw new Error(`GitHub commit failed: ${res.status} ${detail}`)
  }
  return res.json()
}

export async function saveProjects(projects: ManagedProject[]) {
  const file = await getFile('data/projects.json')
  const content = JSON.stringify({ projects }, null, 2) + '\n'
  return commitFile('data/projects.json', content, 'Update portfolio projects', file.sha)
}
