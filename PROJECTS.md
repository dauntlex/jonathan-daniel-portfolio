# Editable Projects

The portfolio now includes a private `/admin` project manager.

## What you can manage

- Add, edit and delete projects
- Publish or unpublish projects
- Cover image upload
- Multiple screenshot uploads
- Technologies/tags
- Live project URL
- GitHub URL
- Case-study text

## How publishing works

The admin panel commits project data and uploaded images to this GitHub repository. Vercel then rebuilds the site from the new commit.

## Required Vercel environment variables

Copy the values from `.env.example` into Vercel Project Settings → Environment Variables.

- `GITHUB_TOKEN` — a GitHub fine-grained token with repository Contents read/write permission for this portfolio repository.
- `GITHUB_OWNER` — your GitHub username or organization.
- `GITHUB_REPO` — repository name.
- `GITHUB_BRANCH` — normally `main`.
- `ADMIN_PASSWORD` — a strong private password used for `/admin`.

The GitHub token is only used in server-side API routes and is never sent to the browser.
