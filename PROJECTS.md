# Adding a project

1. Create `public/projects/my-project/`.
2. Drag your cover image and screenshots into that folder.
3. Add the project to `data/projects.json`.
4. Commit the changes to GitHub.
5. Vercel automatically redeploys when connected to the repository.

Example:
```json
{
  "slug": "my-project",
  "title": "My Project",
  "category": "Product Design",
  "description": "Short project description.",
  "cover": "/projects/my-project/hero.png",
  "screenshots": [
    "/projects/my-project/screen-1.png",
    "/projects/my-project/screen-2.png"
  ],
  "tools": ["Figma", "React"],
  "published": true
}
```

This keeps project content separate from the visual layout.
